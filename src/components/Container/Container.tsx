import { useGetAllUsersQuery } from '../../store/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addAllUsers } from '../../store/users/users.slice';
import { RootState } from '../../store/store';
import { lazy, Suspense, useEffect } from 'react';

const WindowUser = lazy(() => import('../WindowUser/WindowUser'));
import loadingGif from '../../assets/gif/loading.gif';

import ContainerStyle from './Container.module.scss';
import { useLocation, useParams } from 'react-router';

export const Container = () => {
    const location = useLocation();
    const { category } = useParams();
    const { data, isLoading } = useGetAllUsersQuery(null);
    const dispatch = useDispatch();
    const usersState = useSelector((state: RootState) => state.allUsers);
    useEffect(() => {
        if (location.pathname.startsWith('/category') && data) {
            const categoryFiltered = data.filter(e => {
                return e.address.city === category;
            });
            dispatch(addAllUsers(categoryFiltered));
        } else if (data) {
            dispatch(addAllUsers(data));
        }
    }, [data]);
    return (
        <>
            <section className="container">
                <main className={ContainerStyle.wrapper}>
                    {isLoading && (
                        <img className={ContainerStyle.loading} src={loadingGif} alt="" />
                    )}
                    <Suspense>
                        {usersState.filteredUsers
                            ? usersState.filteredUsers.map(e => <WindowUser user={e} />)
                            : usersState.Users.map(e => <WindowUser user={e} />)}
                    </Suspense>
                    {!usersState.Users.length && (
                        <h2 className={ContainerStyle.loading}>Товар не найдин</h2>
                    )}
                </main>
            </section>
        </>
    );
};
