import { SearchSVG } from "../../assets/svg/index"

import InputStyle from "./Input.module.scss"

export const Input = ({setSearchState}:{setSearchState: React.Dispatch<React.SetStateAction<string | null | undefined>>}) => {
  return (
    <>
      <div className={InputStyle.wrapperInput}>
        <SearchSVG/>
        <input onChange={(e)=>setSearchState(e.target.value)} className={InputStyle.input} type="text" />
      </div>
    </>
  );
};
