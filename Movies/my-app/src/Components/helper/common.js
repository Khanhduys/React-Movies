import jwt from 'jsonwebtoken'

const SERECT_KEY_TOKEN ='rectjs'  

const saveTokenLogin = (token) => {
if(token !==" " && token!==null){
    window.localStorage.setItem('tokenLogin' ,token)
}
}
const getTokenLogin = () => {
   let gettoken= window.localStorage.getItem('tokenLogin');
   return gettoken;
}
//hàm giải mã
const decryptionToken = () =>{
    let getcodeToken= getTokenLogin();
    let decoded=null
    if(getcodeToken!==null && getcodeToken!==""){
        decoded= jwt.verify(getcodeToken,SERECT_KEY_TOKEN)
    }
 
   return decoded
}
const getnameUser = () => {
    let  dataUser = decryptionToken()
    if(dataUser!=="" && dataUser !==null){
        
        return dataUser.name
    }
    return null
}

const removedToken = () =>{
       let removedtoken = window.localStorage.removeItem('tokenLogin')
       return removedtoken;
       
}
const getidUser = () =>{
    let getUser= decryptionToken();

    if(getUser !==null && getUser !==""){
        return getUser.id
        
    } 
}

const  cheackId = () => {
    let id = getidUser();
    if(id!==null && id>=1){
        return true
    }
    return false;
}


 export const helper = {
    saveTokenLogin,
    getnameUser,
    removedToken,
    cheackId,
}