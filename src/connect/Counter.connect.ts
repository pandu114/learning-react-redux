import { connect } from "react-redux";
import Counter from "../views/Counter";
import { COUNTER_ACTION } from "../redux/counter/counter.reducer";
import { AGE_ACTION } from "../redux/age/age.reducer";

const mapStateToProps = (state: any) => {
  //when ever the state of a reducer updates then this mapStateToProps will be trigger and returns a new state to the component
  console.log(state);
  return {
    counter: state.counterReducer.counter,
    age: state.ageReducer.age,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  // we will dispatch all the value or methods from components to reducer
  return {
    increment: () => dispatch({ type: COUNTER_ACTION.INCREMENT }),
    decrement: () => dispatch({ type: COUNTER_ACTION.DECREMENT }),
    reset: () => dispatch({ type: COUNTER_ACTION.RESET }),
    updateAge: (age: number) =>
      dispatch({ type: AGE_ACTION.UPDATE_AGE, payload: age }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
