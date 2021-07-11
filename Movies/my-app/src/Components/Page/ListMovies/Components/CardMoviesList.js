import { Card } from "antd";
import React from 'react'
import {NavLink } from 'react-router-dom';
import slugify from "react-slugify";
const { Meta } = Card;

const CardListMovies  = ({item}) => {

return(
    <NavLink to={`/movies/${slugify(item.title)}~${item.id}`}>
    <Card
    hoverable
    key="card"
    style={{ width: 240,margin:'10px' }}
    cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
  >
    <Meta title={item.title} />
  </Card>
  </NavLink>
)

}
export default React.memo(CardListMovies)