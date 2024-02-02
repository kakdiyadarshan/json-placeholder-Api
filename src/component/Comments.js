import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const Comments = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
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

      <h1>Comments</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>PostId</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((ele,index) => {
            return(
              <>
                <tr key={index}>
                  <td>{ele.postId}</td>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.body}</td>
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

export default Comments
