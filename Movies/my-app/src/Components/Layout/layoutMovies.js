import '../Css.css'
import React from 'react'
import Header from './header'
import Footer from './footer'
import { Layout,Row,Col} from 'antd';



const { Content }=Layout


const LayoutMovies = (props) => {

    return(
         <Layout>
        <Header/>
        <Row style={{background:"white"}}>
            <Col span={21} offset={2}>
            <Content>
        {props.children}
        </Content>
            </Col>
        </Row>
       
        <Footer/>
        </Layout>
    )
}
export default LayoutMovies