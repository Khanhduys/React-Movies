import React from 'react'
import { Card,Row,Col } from 'antd';
import {NavLink } from 'react-router-dom';
import slugifi from 'react-slugify'
const { Meta } = Card;

const CardMovies = ({item}) => {
    console.log(item)
     const data = Array.from(item)
    return (
      
<Row>
{data!==""?data.map(item=>(
  <NavLink to={`/movies/${slugifi(item.title)}~${item.id}`}>
    <Col style ={{padding:'10px'}}>
<Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
      >
        <Meta title={item.title}  />
      </Card>
      </Col>
      </NavLink> 
      )):null
}
    
</Row>
 
    
    )
}
export default CardMovies;