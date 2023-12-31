import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface OnlineUsersType {
    userId: string
    avatar: string
    username: string
}
export interface WorkInProgressRoomInfoType {
    sheetId: string
    onlineUsers: OnlineUsersType[]
    roomVersion: number
}


const initialState: WorkInProgressRoomInfoType = {
    sheetId: '',
    onlineUsers: [],
    roomVersion: 0
}

const roomSlicer = createSlice({
    initialState,
    name: 'roomInfo',
    reducers: {
        initRoom: (state, action) => {
            state.sheetId = action.payload
        },
        resetRoom: (state) => {
            state.sheetId = ''
            state.onlineUsers = []
        },
        userJoinRoom: (state, action: PayloadAction<OnlineUsersType>) => {
            console.log('=>userJoinRoom', action)
            // state.onlineUsers = [...action.payload]
            // state.onlineUsers = [
            //         ...state.onlineUsers,
            //         action.payload
            //     ]
            // if (!state.onlineUsers.find(item => item.userId !== action.payload.userId)) {
            //     state.onlineUsers = [
            //         ...state.onlineUsers,
            //         action.payload
            //     ]
            // }
            // const temp = new Set(state.onlineUsers)
            // temp.add(action.payload)
            // state.onlineUsers = [action.online_user_list]
        },
        updataOnlineUserList: (state, action) => {
            console.log('=>userJoinRoom', action)
            // state.onlineUsers = [...action.payload]
            // state.onlineUsers = [
            //         ...state.onlineUsers,
            //         action.payload
            //     ]
            // if (!state.onlineUsers.find(item => item.userId !== action.payload.userId)) {
            //     state.onlineUsers = [
            //         ...state.onlineUsers,
            //         action.payload
            //     ]
            // }
            // const temp = new Set(state.onlineUsers)
            // temp.add(action.payload)
            // state.onlineUsers = [...action.payload.online_user_list]
        },
        updateRoomVersion: (state, action) => {
            state.roomVersion = action.payload
        }
    }
})

export const { initRoom, resetRoom, userJoinRoom, updateRoomVersion, updataOnlineUserList } = roomSlicer.actions
export default roomSlicer.reducer