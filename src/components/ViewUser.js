import React, { useEffect, useState } from "react";
import "./ViewUser.css";

//Viewing each user detail
const ViewUser = (props) => {
  const { id, title } = props;
  const [user, setUser] = useState({});

  //Using API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("fetched");
        return setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {id !== undefined || title !== undefined ? (
        <table className="table table-striped border table-hover table-align">
          <thead className="table-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">To Do ID</th>
              <td>{user.id}</td>
              {console.log("fetched")}
            </tr>
            <tr>
              <th scope="row">To Do Title</th>
              <td>{title}</td>
            </tr>
            <tr>
              <th scope="row">UserId</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{user.email}</td>
              {console.log("fetched")}
            </tr>
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ViewUser;
