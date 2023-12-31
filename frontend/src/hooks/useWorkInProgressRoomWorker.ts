
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'

import { userJoinRoom, updataOnlineUserList} from '@/store/slicers/WorkInProgressRoomInfo'
import { useCallback } from 'react'
import { JoinRoomParams } from '@/socket/types'


export default function useWorkInProgressWorker() {

    const dispatch = useDispatch()
    const roomInfo = useSelector((state: RootState) => state.workInProgressRoomInfo)

    const userJoinRoomDispatcher = useCallback((payload: JoinRoomParams) => {
        console.log('=888>', payload)
        dispatch(updataOnlineUserList({
            ...payload
        }))
    }, [dispatch])

    // const initRoomDispatcher = useCallback((sheetId: string) => {
    //     dispatch(initRoom(sheetId))
    // }, [dispatch])

    // const operationMessage



    return {
        roomInfo,
        // initRoomDispatcher,
        userJoinRoomDispatcher
    }
}