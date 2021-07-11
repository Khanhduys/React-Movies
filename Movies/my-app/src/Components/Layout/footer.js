import { Layout} from 'antd';
import React from 'react';
import  '../Css.css'
const {  Footer } = Layout;

const FooterMovies = () => {
    return(

        <Footer className="footer" style={{ textAlign: 'center' ,marginTop:'60px'}}>Phim hay ©2021 dq08042000@gmail.com </Footer>
    )
}
export default React.memo(FooterMovies)