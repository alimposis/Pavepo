import { useLocation, Link } from "react-router";

import { HeaderSearch } from "./HeaderSearch/HeaderSearch";

import HeaderStyle from "./Header.module.scss";


export const Header = () => {
  const location = useLocation()
  return (
    <>
      <header className={HeaderStyle.header}>
        <main className="container">
          <Link className={HeaderStyle.link} to="/"><h1>Test</h1></Link>
          <HeaderSearch location={location.pathname}/>
        </main>
      </header>
    </>
  );
};
