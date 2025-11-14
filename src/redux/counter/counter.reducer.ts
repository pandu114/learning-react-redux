export const COUNTER_ACTION = {
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT',
    RESET:'RESET'
}
const initialState = {
    counter:0
}
interface ICounterState {
    counter:number
}
export interface IActions {
    type:string,
    payload?:any
}
export const counterReducer = (state:ICounterState=initialState, action:IActions)=>{
    switch(action.type){
        case COUNTER_ACTION.INCREMENT : {
            return {
                ...state,
                counter:state.counter + 1
            }
        }
        case COUNTER_ACTION.DECREMENT : {
            return {
                ...state,
                counter:state.counter - 1
            }
        }
        case COUNTER_ACTION.RESET : {
            return {
                 ...state
            }
        }
        default : {
            return {
                ...state
            }
        }
    }

}