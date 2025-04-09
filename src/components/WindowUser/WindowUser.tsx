import { Title } from "./Title/Title"

import { IUser } from "../../models"

import WindowUserStyle from "./WindowUser.module.scss"

export const WindowUser = ({user}:{user:IUser}) => {
    return(
        <>
        <article className={WindowUserStyle.article}>
            <h2>{user.username}</h2>
            <Title category={"Email"} text={user.email}/>
            <Title category={"Телефон"} text={user.phone}/>
            <button onClick={()=>{console.log(user)}}>Информация о пользователе</button>
        </article>
        </>
    )
}