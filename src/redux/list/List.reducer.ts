import { LIST_ACTION } from "./List.action.types";
import { IlistState, initialList } from "./List.state";

export interface IAction {
  type: string;
  payload?: any;
}

export const listReducer = (
  state: IlistState = initialList,
  action: IAction
) => {
  switch (action.type) {
    case LIST_ACTION.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LIST_ACTION.SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case LIST_ACTION.FAILURE: {
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
