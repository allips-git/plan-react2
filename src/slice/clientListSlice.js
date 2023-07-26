import { createSlice } from '@reduxjs/toolkit';

let clientList = createSlice({
    name         : 'clientList',
    initialState : {
        list : [],
        cnt  : 0
    },
    reducers : {
        setClientList(state, payload)
        {
            return payload['payload']
        }
    }
});

export let { setClientList } = clientList.actions;
export { clientList };