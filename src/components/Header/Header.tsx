import { SearchProducts } from "../SearchProducts/SearchProducts";

import HeaderStyle from "./Header.module.scss";

export const Header = ({props}:{props: React.Dispatch<React.SetStateAction<string | null | undefined>>}) => {
  return (
    <>
      <header className={HeaderStyle.header}>
        <h1>Test</h1>
        <SearchProducts props={props}/>
      </header>
    </>
  );
};
