import { createSlice } from '@reduxjs/toolkit';

let clientInfo = createSlice({
    name         : 'clientInfo',
    initialState : {
        info   : {},
        tab    : {},
        list1  : [],
        list2  : []
    },
    reducers : {
        setClientInfo(state, payload)
        {
            return payload['payload']
        }
    }
});

export let { setClientInfo } = clientInfo.actions;
export { clientInfo };