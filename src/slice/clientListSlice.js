import { createSlice } from '@reduxjs/toolkit';

let clientList = createSlice({
    name         : 'clientList',
    initialState : [],
    reducers     : {
        setClientList(state , payload){
            return payload['payload']
        }
    }
});

export let { setClientList } = clientList.actions;
export { clientList };