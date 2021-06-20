import React, { useState } from "react";
import './TableList.css';

//Creating the tableList
const TableList = (props) => {
  let { todoList, onChangeView} = props;

  const [sort, setSort] = useState(1);

  //Sorting the ids
  const onSort=()=>{
    if(sort===1){
      todoList=todoList.reverse();
      setSort(-1)
    }else{
      todoList=todoList.sort();
      setSort(1);
    }
    
  }
  
  return (
    <div>
      <table className="table caption-top border table-hover table-css">
        <thead className="table-dark">
          <tr>
            <th scope="col"><button className="btn btn-mix" onClick={onSort}>ToDoID</button></th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((data) => {
                return(<tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.title}</td>
                  {(data.completed)? <td>Complete</td>:<td>Incomplete</td>}
                  <td><button type="button" className="btn btn-light btn-sm button" onClick={()=>{onChangeView(data)}}>View User</button></td>
                </tr>);
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
