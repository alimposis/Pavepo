import { Title } from "./Title/Title"

import { IUser } from "../../models"

import WindowUserStyle from "./WindowUser.module.scss"

interface IProps{
    user:IUser
}
export const WindowUser = ({user}:IProps) => {
    return(
        <>
        <article className={WindowUserStyle.article}>
            <h2>{user.username}</h2>
            <Title props={["Email",user.email]}/>
            <Title props={["Телефон",user.phone]}/>
            <button onClick={()=>{console.log(user)}}>Информация о пользователе</button>
        </article>
        </>
    )
}