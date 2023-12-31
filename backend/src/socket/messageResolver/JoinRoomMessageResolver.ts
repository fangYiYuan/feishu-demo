import { Socket } from "socket.io";
import { JoinRoomParams, ValidMessageType } from "../type";
import onlineUserSchema from '../../db/onlineUser'

const getOnlineUserList = async (params:JoinRoomParams) => {
    console.log('=>getOnlineUserList', params)
    const {sheetId, userId, username, avatar} = params

    const queryParams = {
        userId,
        username,
        avatar
    }

    const result = await onlineUserSchema.findOneAndUpdate({ userId }, queryParams, {upsert: true, new: true}).select('-_id -__v')
    console.log('=>getOnlineUserList-result', result)

    // const result = await onlineUserSchema.find()
    // console.log('=>result', result)
    // const temp = result && result.filter(f => f.userId === userId)

    // if (!result) {
    //     const a = await onlineUserSchema.create(params)
    //     console.log('=>a', a)
    // }
    // return await onlineUserSchema.create(params)
    // return await onlineUserSchema.find()
}


export default async function JoinRoomMessageResolver(socket: Socket, params: JoinRoomParams){
    console.log('=>JoinRoomMessageResolver-params', params)
    const online_user_list: any = await getOnlineUserList(params)
    // console.log('=>online_user_list', online_user_list)
    // console.log('=>8888', params)
    const {sheetId, userId, username, avatar} = params
    // online_user_list[userId] = {
    //     userId,
    //     username,
    //     avatar
    // }

    // console.log('=>111', console.log(socket.conn.transport))
    // console.log('=>socket.adaptclienter', socket.client)
    // console.log('=>socket.rooms', socket.rooms)
    // console.log('=>socket.rooms', socket.rooms.get(sheetId))
    socket.join(sheetId)
    socket.to(sheetId).emit('message', {
        type: ValidMessageType.JoinRoom,
        params: {
            ...params,
            username: `${username}${userId.slice(0, 2)}`,
            // online_user_list
            // online_user_list: Object.values(online_user_list)
        }
    })
}