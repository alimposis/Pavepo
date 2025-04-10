import { NavLink } from "react-router"

import { Title } from "../Title/Title"

import { IUser } from "../../models"

import WindowUserStyle from "./WindowUser.module.scss"


export const WindowUser = ({user}:{user:IUser}) => {
    return(
        <>
        <article className={WindowUserStyle.article}>
            <h2>{user.username}</h2>
            <Title category={"Email"} text={user.email}/>
            <Title category={"Телефон"} text={user.phone}/>
            <NavLink to={`/user/${user.id}`}><button onClick={()=>{console.log(user)}}>Подробнее</button></NavLink>
        </article>
        </>
    )
}