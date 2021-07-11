import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { api } from '../../Services/api'
import { Col,Row,Image,Skeleton } from 'antd'
import LayoutMovies from '../../Layout/layoutMovies'
import Breadcrumb from '../../Layout/Breadcrumb'


const DetailMovies = () => {
const {id,slug} = useParams();
console.log(id,slug)
const [loading,setLoading] = useState(true);
const [dataDetail,setDataDetail] = useState({});

useEffect(
  ()=>{
  const getDataDetail= async () => {
const data = await api.getdataDetailbyId(id);
let result={}
if(data!==" "){
  result.images = data['images']['posters'] || [];
  result.title=data.title;
  result.poster_path = data.poster_path;
  result.original_title = data.original_title;
  result.overview=data.overview;              
  result.vote_average=data.vote_average;
}
setDataDetail(result)

setLoading(false)
  }
  getDataDetail();
  },[id]
)
const notify = () =>{
  alert('Tác giả đang hết tiền mua bản Quyền')
}
if(loading===true||dataDetail===""){
  return <Skeleton/>
}

  return(
    <LayoutMovies>
      <Breadcrumb
      item_lv1="Trang Chủ"
      item_lv2={slug}
      />
<Row>
<Col span={6} style={{marginRight:'20px'}}>
<Image
      
      src={ `https://image.tmdb.org/t/p/w300/${dataDetail.poster_path}`}
    />
       <h3 style={{textAlign:'center'}}>{dataDetail.original_title}</h3>
</Col>


<Col span={12}>
<h2  style={{color:'red'}}>Tên Phim : {dataDetail.title}</h2>
<p>{dataDetail.overview}</p>
      <p style={{color:'red'}}>Lượt Thích : {dataDetail.vote_average} tr</p>
    <button style={{background:'#33FF00',borderRadius:'4px' ,color:'white', marginTop:'30px'}} onClick={notify}>xem phim</button>
</Col>
</Row>

</LayoutMovies>
  )
}
export default React.memo(DetailMovies)