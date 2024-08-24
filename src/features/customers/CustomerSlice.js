import { createSlice } from "@reduxjs/toolkit"

const customerState = {
    fullName: '',
    id: null,
    createdAt: null
}

const customerSlice = createSlice({
    name: "customer",
    initialState: customerState,
    reducers: {
        create:{
            prepare(fullName, id){
                return {
                    payload: {fullName, id, createdAt: new Date().toISOString()}
                }
            },
            reducer(state,action){
            state.fullName = action.payload.fullName
            state.id = action.payload.id
            state.createdAt = action.payload.createdAt
        }},
        update(state, action){
            state.fullName = action.payload
        }
    }
})

export default customerSlice.reducer
export const {create, update} = customerSlice.actions
// export default function customerReducer(state= customerState, action){
//     switch(action.type){
//         case 'create/customer': return{...state,
//             fullName: action.payload.fullName, id: action.payload.id,
//             createdAt: action.payload.createdAt
//         }
//         case 'update/customer': return{...state, fullName: action.payload}
//         default: return state;
//     }
// }


// export function createCustomer(fullName,id){
//     return{
//         type: 'create/customer', payload: {fullName, id, createdAt: new Date().toISOString()}
//     }
// }

// export function updateCustomer(fullName){
//     return{
//         type: 'update/customer', payload: fullName
//     }
// }


// store.dispatch(createCustomer('Idris Muyideen', 69))