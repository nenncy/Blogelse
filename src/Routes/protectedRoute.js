import React, { useState ,useEffect} from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import HttpService from "../utils/http.service";

function ProtectedRoute({ Component }) {

    const [item,setItem]=useState([]);

    const tokenid=localStorage.getItem("token");

    const tokenverify = async()=>{

         await axios.get(HttpService.loginUrlVerifyToken +`${tokenid}`)
         
         .then((response)=>{
            setItem(response.data.user.cinform);
         })  
         .catch((err)=>{
            console.log(err)
         }) 
     }

    useEffect(() => {
        if(tokenid){
            tokenverify();
        }  
        else{
            setItem(false);
        }
    },[tokenid]);

    return (
        item ? <Component /> : <Navigate to="/login" />
    );
}

export default ProtectedRoute;