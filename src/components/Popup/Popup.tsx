import { useEffect, useState } from "react"
import axios from "axios"

import { Title } from "../WindowProduct/Title/Title"

import { IGetmanufacturerdetails } from "../../models"

import { IconClose } from "../../assets/svg"
import Loading from "../../assets/gif/loading.gif"

import PopupStyle from "./Popup.module.scss"

export const Popup = ({props}:{props:[string,React.Dispatch<React.SetStateAction<string | null>>]}) =>{
    const [stateFacturer,setStateFacturer] = useState<null|IGetmanufacturerdetails>(null)
    const [stateIsLoading,setStateIsLoading] = useState(false)
    useEffect(()=>{
        setStateIsLoading(true)
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${props[0]}?format=json`)
            .then((e)=>{
                setStateFacturer(e.data.Results[0])
                setStateIsLoading(false)
            })
    },[props[0]])
    console.log(stateFacturer)
    function ManufacturerTypes(e:IGetmanufacturerdetails) {
        if(e.ManufacturerTypes.length){
            return e.ManufacturerTypes.map((e)=>{
                return (<section><h3>Тип: </h3><p>{e.Name}</p></section>)
            })
        }else 
        <p>Данные о типе производителя отсуствуют</p>
    }
    const setState = props[1]
    return(
        <>
        <div className={PopupStyle.bacgroundPopup}/>
        <div className={PopupStyle.popup}>
            {stateIsLoading && <img src={Loading} alt="" />}
            <button onClick={()=>setState(null)}><IconClose/></button>
            {stateFacturer?.Mfr_Name && <h2>{stateFacturer?.Mfr_Name}</h2>}
            {stateFacturer?.Address && <Title props={["Адрес",stateFacturer.Address]}/>}
            {stateFacturer?.Address2 &&<Title props={["Адрес2",stateFacturer?.Address2]}/>}
            {stateFacturer?.ContactEmail && <Title props={["Email",stateFacturer.ContactEmail]}/>}
            {stateFacturer?.ContactFax && <Title props={["FAX",stateFacturer.ContactFax]}/>}
            {stateFacturer?.ContactPhone && <Title props={["Номер телефона",stateFacturer.ContactPhone]}/>}
            {stateFacturer?.Country && <Title props={["Страна",stateFacturer.Country]}/>}
            {stateFacturer && ManufacturerTypes(stateFacturer)}
        </div>
        </>
    )
}