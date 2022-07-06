import {ApiManager} from "./ApiManager";

export const loginCall = async(email,password) => {
    
  const response = await ApiManager.post(`http://buddy.ropstambpo.com/api/login`,
    { 
       email:email,
       password:password,
       device_token:"zasdcvgtghnkiuhgfde345tewasdfghjkm"
    }
  );
    if (response?.ok) {
       return response?.data
      }
        else {
        throw response.error
      }
};

export const getDataCall = async() => {
    
  const response = await ApiManager.get(`https://jsonplaceholder.typicode.com/Posts`);
    if (response?.ok) {
       return response?.data
      }
        else {
        return response.error
      }
};