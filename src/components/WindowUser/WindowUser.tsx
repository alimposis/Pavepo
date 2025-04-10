import { NavLink } from 'react-router';

import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

import WindowUserStyle from './WindowUser.module.scss';

import { IUser } from '../../models';

const WindowUser = ({ user }: { user: IUser }) => {
    return (
        <>
            <article className={WindowUserStyle.article}>
                <h2>{user.username.replace('_', ' ')}</h2>
                <Title category={'Город'} text={user.address.city.replace('_', ' ')} />
                <Title category={'Телефон'} text={user.phone} />
                <Title category={'Email'} text={user.email} />
                <NavLink to={`/user/${user.id}`}>
                    <Button text={'Подробнее'} color={'red'} />
                </NavLink>
            </article>
        </>
    );
};
export default WindowUser;
