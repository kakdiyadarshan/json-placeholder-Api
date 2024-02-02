import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import './../App.css'
import { Container } from 'react-bootstrap';

const Photos = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
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
      
      <Container>
      <Header />

      <h1>Photos</h1>

      <div className='row'>
        {
          data.map((ele, index) => {
            return (
              <>
                <Card className='box'>
                  <Card.Img variant="top" src={ele.thumbnailUrl} className='img' />
                  <Card.Body>
                    <Card.Text>Albums Id : {ele.albumId}</Card.Text>
                    <Card.Text>Id : {ele.id}</Card.Text>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Link href="#">{ele.url}</Card.Link>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
      </Container>



    </div>
  )
}

export default Photos
