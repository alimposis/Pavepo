import TitleStyle from "./Title.module.scss"
export const Title = ({category,text}:{category:string; text:string}) =>{
    return(
        <>
        <section className={TitleStyle.section}>
            <h3>
                {category}:
            </h3>
            <p>
                {text}
            </p>
        </section>
        </>
    )
}