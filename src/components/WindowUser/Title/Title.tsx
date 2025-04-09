import TitleStyle from "./Title.module.scss"
export const Title = ({props}:{props:[string,string|number]}) =>{

    return(
        <>
        <section className={TitleStyle.section}>
            <h3>
                {props[0]}:
            </h3>
            <p>
                {props[1]}
            </p>
        </section>
        </>
    )
}