
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'

import { userJoinRoom } from '@/store/slicers/WorkInProgressRoomInfo'
import { useCallback } from 'react'
import { JoinRoomParams } from '@/socket/types'


export default function useWorkInProgressWorker() {

    const dispatch = useDispatch()
    const roomInfo = useSelector((state: RootState) => state.workInProgressRoomInfo)

    const userJoinRoomDispatcher = useCallback((payload: JoinRoomParams) => {
        dispatch(userJoinRoom({
            ...payload
        }))
    }, [dispatch])

    // const operationMessage



    return {
        roomInfo,
        userJoinRoomDispatcher
    }
}