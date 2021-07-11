import React,{useState} from 'react'
import LayoutMovies from '../../Layout/layoutMovies'
import Breadcrumb from '../../Layout/Breadcrumb'
import SearchMovies from './Components/searchMovies'
import { api } from '../../Services/api'
import CardMovies from '../../Layout/cardMovies'



const ListMovies = () => {
const [loading,setLoading] = useState(false)
const [searchdata,setSearchdata] = useState ({})


const searchMovisbyData = async (keyword) => {
   setLoading(true)

   const data =await api.getDataSearchMovies(keyword);
   if(data !==" "){
    const dataResult=data.results;
    setSearchdata(dataResult)
   }
     setLoading(false)
}

    return(

        <LayoutMovies>
           
      <Breadcrumb style={{ margin: '16px 0' }}
      item_lv1="Trang chủ"
      item_lv2="Search"
      />
      <div style={{display:'flex' ,justifyContent:"center"}}><h1 style={{color:'red',marginRight:'10px'}}>Tìm kiếm Những Bộ Phim Hay  </h1></div>
        <SearchMovies
        loading={loading}
        search = {searchMovisbyData}
        />

      
            
        
        <CardMovies
        
        item={searchdata}
        
        />
        </LayoutMovies>
    )
}
export default React.memo(ListMovies)