import ButtonStyle from "./Button.module.scss"

export const Button = ({props}:{props:[string,Function]}) =>{
    const text = props[0]
    const functionProps = props[1]
    return(
        <>
        <button 
        onClick={()=>{ functionProps()}}
        className={ButtonStyle.button}> 
            {text && text}
        </button>
        </>
    )
}