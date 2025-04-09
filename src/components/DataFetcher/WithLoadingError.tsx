import React from "react";

import { IProduct } from "../../models";
import { Pagination } from "../Pagination/Pagination";

import Loading from "./../../assets/gif/loading.gif"

interface WithLoadingErrorProps {
    isLoading: boolean;
    error: string | null;
}

export const WithLoadingError = ({props}:{props:[boolean,string|null,IProduct[] | null,React.Dispatch<React.SetStateAction<string | null>>]}) => {
    const loading = props[0]
    const error = props[1]
    const data = props[2]
    const setStateURL = props[3]
    if(loading){
        return <img src={Loading} alt="" />
    } else if(error){
        return <h2 style={{color:"red"}}>Произошла ошибка:{error}</h2>
    } else if(data){
        return <Pagination props={[data,setStateURL]} />
    } else{
        return <h2>Произошла неизвестная ошибка</h2>
    }
};

