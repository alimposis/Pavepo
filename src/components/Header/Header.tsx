import { SearchUsers } from "../SearchUsers/SearchUsers";

import HeaderStyle from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={HeaderStyle.header}>
        <h1>Test</h1>
        <SearchUsers/>
      </header>
    </>
  );
};
