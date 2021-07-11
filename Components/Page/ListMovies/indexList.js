import React,{useState,useEffect} from 'react'
import LayoutMovies from '../../Layout/layoutMovies'
import Breadcrumb from '../../Layout/Breadcrumb'
import { api } from '../../Services/api'
import { Skeleton,Row,Col,Pagination } from 'antd'
import CardMoviesList from './Components/CardMoviesList'

const ListMovies = () => {
const [dataList,setDataList]= useState([])
const [loading,setLoading] = useState(false)
const [page,setPage] = useState(1)

const [totoresult,setTotoresult] = useState()



useEffect(()=>{

  const DataListMovies = async () => {
    setLoading(true)
    const data =await api.getDataListMovies(page)
    
     console.log(data.results)
    if(data !==" "){
     setDataList(data.results)
     setTotoresult(data.total_results)
    }
    
    console.log(data.total_pages)
    setLoading(false)
 
  
  }
   
  DataListMovies()
},[page])

const getPage = (p) =>{
   if(p>=1  && p<totoresult)
      
   setPage(p)
}

if(loading===true || dataList==={}){
  return <Skeleton/>
}

    return(

        <LayoutMovies>
           
      <Breadcrumb style={{ margin: '16px 0' }}
      item_lv1="Trang chủ"
      item_lv2="Danh Sách"
      />
        <h1 style ={{color:'red',margin:'auto'}}>Tuyển Chọn Những Bộ Phim Bom Tấn  Hay Nhất </h1>
        <Row>
        {dataList.map((item,index)=>(
          <Col key={index}>
             <CardMoviesList key={index}
             item={item} />
          </Col>
        ))}
        <Col  span={14} offset={5} >
         <Pagination current={page} total={totoresult} style={{margin:'20px 0'}} 

            pageSize={20}
            onShowSizeChange={false}
            onChange ={ (p)=>{getPage(p)}}
         />
         </Col>
       </Row>
      
        </LayoutMovies>
    )
}
export default React.memo(ListMovies)