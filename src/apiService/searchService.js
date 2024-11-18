import  * as request from '../utils/request' ;
export const search = async (name, type='less') => {
    try{
      const res = await request.get(`User/search`,{
        params:{
          name,
          type,
        },
     })
     return res
    }catch (error){
        console.log(error)
    }
   
  }