import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilteredUsers } from '../../store/users/users.slice';
import { useDebounce } from '../../hooks/useDebounce';

import { Input } from '../Input/Input';
import { RootState } from '../../store/store';
import { Menu } from '../Menu/Menu';

export const SearchUsers = () => {
    const [searchState, setSearchState] = useState<string | null>();
    const UsersState = useSelector((state: RootState) => state.allUsers.Users);
    const debounse = useDebounce(searchState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (debounse) {
            console.log();
            const filteredProducts = UsersState.filter(e => {
                return (
                    e.username.trim().toLowerCase() === debounse.trim().toLowerCase() ||
                    e.email.trim().toLowerCase() === debounse.trim().toLowerCase()
                );
            });
            dispatch(addFilteredUsers(filteredProducts));
        } else if (debounse?.length === 0) {
            dispatch(addFilteredUsers(UsersState));
        }
    }, [debounse]);

    return (
        <>
            <Input setSearchState={setSearchState} />
            <Menu />
        </>
    );
};
