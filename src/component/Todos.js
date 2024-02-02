import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const Todos = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <div>

      <Header />

      <h1>Todos</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((ele,index) => {
            return(
              <>
                <tr key={index}>
                  <td>{ele.userId}</td>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.completed?'true':'false'}</td>
                </tr>
              </>
            )
          })
        }
      </tbody>
    </Table>


    </div>
  )
}

export default Todos
