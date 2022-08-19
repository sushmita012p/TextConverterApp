import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const request = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1> Most Popular Users</h1>
          {users.slice(0, 6).map((value) => {
            return (
              <div className="col-md-4 my-3" key={value.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Name: {value.name}</h5>
                    <p className="card-text">UserName: {value.username}</p>
                    <a
                      href="/"
                      target={"_blank"}
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchUsers;
