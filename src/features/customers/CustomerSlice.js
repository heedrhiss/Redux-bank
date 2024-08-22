const customerState = {
    fullName: '',
    id: null,
    createdAt: null
}

export default function customerReducer(state= customerState, action){
    switch(action.type){
        case 'create/customer': return{...state,
            fullName: action.payload.fullName, id: action.payload.id,
            createdAt: action.payload.createdAt
        }
        case 'update/customer': return{...state, fullName: action.payload}
        default: return state;
    }
}


function createCustomer(fullName,id){
    return{
        type: 'create/customer', payload: {fullName, id, createdAt: new Date().toISOString()}
    }
}

function updateCustomer(fullName){
    return{
        type: 'update/customer', payload: fullName
    }
}


// store.dispatch(createCustomer('Idris Muyideen', 69))