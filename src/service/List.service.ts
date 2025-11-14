import axios from "axios";
import { LIST_ACTION } from "../redux/list/List.action.types";

export const getApiCall = () => {
  return (dispatch: any) => {
    dispatch({type:LIST_ACTION.REQUEST});
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      console.log(result);
      dispatch({type:LIST_ACTION.SUCCESS, payload:result.data});
    }).catch(()=>
        dispatch({type:LIST_ACTION.FAILURE, payload:'Something went wrong'})
    );
  };
};