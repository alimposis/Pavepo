import { useGetAllUsersQuery } from "../../store/api/api";
import { useDispatch, useSelector } from "react-redux";
import { addAllUsers } from "../../store/users/users.slice";
import { RootState } from "../../store/store";
import { useEffect } from "react";

import { WindowUser } from "../WindowUser/WindowUser";
import loadingGif from "../../assets/gif/loading.gif"

import ContainerStyle from "./Container.module.scss"

export const Container = () => {
    const {data, isLoading} = useGetAllUsersQuery(null)
    const dispatch = useDispatch()
    const usersState = useSelector((state: RootState) => state.allUsers)
    useEffect(()=>{
      if(data)
      dispatch(addAllUsers(data))
    },[data])
  return (
    <>
      <section className="container">
        <main className={ContainerStyle.wrapper}>
          {isLoading && <img className={ContainerStyle.loading} src={loadingGif} alt="" />}
          {usersState.Users && usersState.Users.map((e)=><WindowUser user={e}/>)}
          {!usersState.Users.length && <h2 className={ContainerStyle.loading}>Товар не найдин</h2>}
        </main>
      </section>
    </>
  );
};
