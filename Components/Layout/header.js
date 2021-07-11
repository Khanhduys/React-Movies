import { Layout, Menu} from 'antd';
import React from 'react'
import '../Css.css'
import {
   NavLink,
   useHistory,
   useLocation
    
  } from "react-router-dom";
  import { helper } from '../helper/common';
 

const { Header } = Layout;


const HeaderMovies = () => {
    const location =useLocation()
    const nameUser =helper.getnameUser()
    const history = useHistory()
  
    const logoutMovies = () =>{ 
      helper.removedToken()
      history.push('/login-movies')
    }
    return(
<Header >
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={location.pathname} style={{display:'flex'}}  >
       
   
         <Menu.Item key="/list-movies"> <NavLink to="/list-movies"> Danh Sách</NavLink></Menu.Item>
      
        <Menu.Item  key="/search-movies"><NavLink to="/search-movies">Tìm Kiếm</NavLink></Menu.Item>
       
     {helper.nameUser===null&&<Menu.Item  style={{marginLeft:'650px'}} key="/login-movies"><NavLink to="/login-movies">Đăng Nhập</NavLink> </Menu.Item >}
     {helper.nameUser!==null&&<Menu.Item key="logout" onClick={()=>logoutMovies()}   style={{marginLeft:'650px'}}>Đăng Xuất</Menu.Item>}
        
        {helper.nameUser!==null&&<Menu.Item key="usename"  style={{fontWeight:'100'}}><span>Tài Khoản:</span>{nameUser}</Menu.Item >}
       
        
      </Menu>
    </Header>
    )
}
export default React.memo(HeaderMovies)