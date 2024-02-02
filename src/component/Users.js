import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const Users = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
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

      <h1>Users</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Street</th>
          <th>Suite</th>
          <th>City</th>
          <th>Zipcode</th>
          <th>Lat</th>
          <th>Lng</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company Name</th>
          <th>Company catchPhrase</th>
          <th>Company Bs</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((ele,index) => {
            return(
              <>
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>{ele.address.street}</td>
                  <td>{ele.address.suite}</td>
                  <td>{ele.address.city}</td>
                  <td>{ele.address.zipcode}</td>
                  <td>{ele.address.geo.lat}</td>
                  <td>{ele.address.geo.lng}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.website}</td>
                  <td>{ele.company.name}</td>
                  <td>{ele.company.catchPhrase}</td>
                  <td>{ele.company.bs}</td>
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

export default Users
