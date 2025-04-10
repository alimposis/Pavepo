import { useState } from 'react';

import MenuStyle from './Menu.module.scss';
import { Button } from '../Button/Button';
import { useGetAllUsersQuery } from '../../store/api/api';

export const Menu = () => {
    const [stateMenu, setStateMenu] = useState(false);
    const [stateTargetMenu, setStateTargetMenu] = useState<string | null>(null);
    const { data } = useGetAllUsersQuery(null);
    function openCloseMenu(): undefined {
        setStateMenu(preff => !preff);
    }
    return (
        <>
            <section className={MenuStyle.menu}>
                <Button
                    text={stateTargetMenu ? stateTargetMenu : 'Выбрать город'}
                    functionProps={openCloseMenu}
                    color="red"
                />
                {stateMenu && (
                    <ul className={MenuStyle.ul}>
                        {data &&
                            data.map(e => {
                                return (
                                    <a key={e.id} href={`/Pavepo/category/${e.address.city}`}>
                                        <li
                                            onClick={() => {
                                                setStateTargetMenu(e.address.city);
                                                openCloseMenu();
                                            }}
                                        >
                                            {e.address.city}
                                        </li>
                                    </a>
                                );
                            })}
                    </ul>
                )}
            </section>
        </>
    );
};
