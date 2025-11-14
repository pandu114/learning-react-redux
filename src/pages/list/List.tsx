import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiCall } from "../../service/List.service";
import { getListReducerState } from "../../redux/list/List.selector";

const List = () => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(getListReducerState);
  const getData = ()=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj:any)=>{
                    return (
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                            <td>{obj.completed ? 'Active' :'Inactive'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
  }
  return (
    <div>
      <button onClick={() => dispatch(getApiCall() as any)}>Get Remote Data</button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          getData()
        ) : error ? (
          <p>{error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default List;
