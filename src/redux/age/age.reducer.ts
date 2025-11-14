import { IActions } from "../counter/counter.reducer";
export const AGE_ACTION = {
    UPDATE_AGE:'UPDATE_AGE'
}
const ageState = {
    age:0
}
interface IAge {
    age:number
}
export const ageReducer = (state:IAge = ageState, action:IActions)=>{
        switch(action.type){
            case AGE_ACTION.UPDATE_AGE : {
                return {
                    ...state,
                    age:action.payload
                }
            }
            default:{
                return {
                    ...state
                }
            }
        }
}   