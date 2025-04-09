import { Title } from "./Title/Title"

import { IProduct } from "../../models"

import WindowProductStyle from "./WindowProduct.module.scss"

export const WindowProduct = ({props}:{props:[IProduct,React.Dispatch<React.SetStateAction<string | null>>]}) => {
    const product = props[0] 
    const setState = props[1]
    
    return(
        <>
        <article className={WindowProductStyle.article}>
            <h2>{product.Name}</h2>
            <Title props={["Производитель",product.ManufacturerName]}/>
            <Title props={["Дата",product.LetterDate]}/>
            <a href={product.URL}>Открыть деклорацию</a>
            <button onClick={()=>{setState(`${product.ManufacturerId}`),console.log(product)}}>Информация о производителе</button>
        </article>
        </>
    )
}