import { useLocation } from 'react-router';
import { SearchUsers } from '../../SearchUsers/SearchUsers';

export const HeaderSearch = () => {
    const location = useLocation();
    if (location.pathname.startsWith('/Pavepo/user/')) {
        return <h2>Страница товара</h2>;
    } else {
        return <SearchUsers />;
    }
};
