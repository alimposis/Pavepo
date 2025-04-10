import { HeaderSearch } from './HeaderSearch/HeaderSearch';

import HeaderStyle from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <header className={HeaderStyle.header}>
                <main className="container">
                    <a className={HeaderStyle.link} href="/">
                        <h1>Test</h1>
                    </a>
                    <HeaderSearch />
                </main>
            </header>
        </>
    );
};
