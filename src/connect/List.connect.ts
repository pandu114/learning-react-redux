import { connect } from "react-redux";
import List from "../pages/list/List";
import { getApiCall } from "../service/List.service";


const mapStateToProps = (state: any) => {
  return {
    loading: state.list.loading,
    data: state.list.data,
    error: state.list.error,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(getApiCall()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
