const accountState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}


export default function accountReducer(state= accountState, action){
    switch(action.type){
        case 'account/balance': return{...state, 
        balance: state.balance + action.payload}

        case 'account/withdraw': return{...state, 
            balance: state.balance - action.payload}    
        
        case 'request/loan': if(state.loan > 0) return state
        return {...state,
        balance: state.balance + action.payload.amount,
        loan: state.loan + action.payload.amount,
        loanPurpose: action.payload.purpose
        }

        case 'pay/loan': return {
            ...state,
            balance: state.balance - state.loan,
            loan: state.loan - state.loan,
            loanPurpose: ''
        }

        default: return state
    }
}

export function deposit(amount){
    return{type: 'account/balance', payload: amount}
}
export function withdraw(amount){
    return{type: 'account/withdraw', payload: amount}
}
export function reqLoan(amount, purpose){
    return{type: 'request/loan', payload: {amount, purpose}}
}
export function payLoan(){
    return{type: 'pay/loan'}
}


// store.dispatch(deposit(500))
// store.dispatch(withdraw(200))

// store.dispatch(reqLoan(1000, 'Buy lexus'))
// store.dispatch(payLoan())
