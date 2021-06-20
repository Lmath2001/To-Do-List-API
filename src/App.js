import React, { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import TableList from "./components/TableList";
import Navbar from "./components/Navbar";
import ViewUser from "./components/ViewUser";
import './App.css';

const App = () => {
  const [todoList, settodoList] = useState([]);
  const [forView, setforView] = useState("");
  const [search, setsearch] = useState("");

  //Using API of todolist
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return settodoList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //For the view user button
  const onChangeView = (data) => {
    setforView(data);
  };

  //For the search field
  const onSearchChange=(event)=>{
    setsearch(event.target.value);
  }

  //Search field filtering
  const filteredList=todoList.filter((tododata)=>{
    return(tododata.id===Number(search) || tododata.title.includes(search));
  })

  return (
    <div className="app">
      {todoList.length > 0 ? (
        <div>
          <Navbar onSearchChange={onSearchChange} />
          <div className="sections">
            <div className="left-section">
              <TableList todoList={filteredList} onChangeView={onChangeView} />
            </div>
            <div className="right-section">
              <ViewUser id={forView.id} title={forView.title} />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
