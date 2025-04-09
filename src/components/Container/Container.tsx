import { WindowUser } from "../WindowUser/WindowUser";

import { useGetAllUsersQuery } from "../../store/api/api";
import { useDispatch, useSelector } from "react-redux";

import loadingGif from "../../assets/gif/loading.gif"

import ContainerStyle from "./Container.module.scss"
import { useEffect } from "react";
import { addAllUsers } from "../../store/user/user.slice";
import { RootState } from "../../store/store";

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
      <main className={ContainerStyle.container}>
        {isLoading && <img className={ContainerStyle.loading} src={loadingGif} alt="" />}
        {usersState.Users && usersState.Users.map((e)=><WindowUser user={e}/>)}
      </main>
    </>
  );
};
