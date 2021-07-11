
import axios from 'axios';
import jwt from 'jsonwebtoken'


const SERECT_KEY_TOKEN ='rectjs'
//key mã hóa 

const getDataSearchMovies = async (key,page) => { 
    const url =`https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`

    const reponse = await axios.get(url);
    const resultdatasearch = reponse.status===200?reponse.data:{}
    return resultdatasearch
}

// api detail 

const getdataDetailbyId = async (id) =>  {
    const url =`https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,null`

    const reponse2 = await axios.get(url)

    const result2 = reponse2.status===200?reponse2.data:{}

    return result2;

}
const getDataListMovies = async (page=1) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=2020-07-20&release_date.lte=2020-10-18&with_release_type=3|2  `
    const reponse3=  await axios.get(url)

    const result3 = await reponse3.status===200?await reponse3.data: await {}

    return result3
}



const cheackUserLogin = (user,pass) =>{
    //khi mà người dùng nhập tài khoản mật khẩu
    //back-end sẽ check xem nó có tồn tại không
    // sự giao tiếp giữa back-end và font-end được thông qua 1 loại mã hóa đó là token
   
  console.log('api',user,pass)
    // tạo Api 
    let token=null;
    if(user==='quangdz' && pass ==='123'){
        token=jwt.sign({
            id:1,
            user : user,
            name:'QuangTrần',
            fullname:'Tran Van Quang',
            email:'dq04082000@gmail.com'
          
        },SERECT_KEY_TOKEN)
    }
     return token;

}


export const api = {
    getDataSearchMovies,
    getdataDetailbyId,
    getDataListMovies,
    cheackUserLogin,

}