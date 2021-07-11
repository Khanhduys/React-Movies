import { Form, Input, Button,Row,Col } from 'antd';
import React,{useState} from 'react'
import { api } from '../../Services/api';
import '../../Css.css'
import { useHistory } from 'react-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {helper} from '../../helper/common'


const LoginMovies = () => {
    const [error,setError] = useState(null)
    const history = useHistory();
        const onFinish = (values) => {
          const {username,password} = values;
          console.log(values)
          const token = api.cheackUserLogin(username,password)
         if(token !=='' && token !==null){
              
             setError(null)
             helper.saveTokenLogin(token)
             history.push('/list-movies')
         }
         else{
             setError('Tài Khoản hoặc mật khẩu không hợp lệ !')
         }

        };
      
        return (
            <section style={{background:'black'}}>
            
            <Row >
            <div style={{margin:'100px auto',height:'300px' ,background:'#99FFFF' ,width:'40%'}}>
                <Col span={10} offset={6}>
                    <h1 style={{textAlign:'center',marginTop:'30px'}}>Đăng Nhập   </h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            style={{marginTop:'20px'}}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input type="text" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
             {error !=="" && <p style={{color:'red'}}>{error}</p>}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button"  style={{margin:'10px 15px'}}>
                Log in
              </Button>
             
            </Form.Item>
          </Form>
          </Col>
          </div>
          </Row>
          
          </section>
        );
      
}
export default LoginMovies
