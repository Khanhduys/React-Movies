import React  from 'react';
import { Input,Row,Col } from 'antd';



const { Search } = Input;


const SearchMovies = (props) => {
    return (
        <Row style={{margin:"30px 0 150px 0"}}>
            <Col  span={12} offset={6}>
        <Search
         placeholder="Tên Phim Mà Bạn Muốn Xem" 
         enterButton="Tìm Kiếm"
          size="large"
           loading={props.loading}
           onSearch={val=>{props.search(val)}}
           />
           
        </Col>
        </Row>
        
    )
}

export default React.memo(SearchMovies)