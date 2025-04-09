import { SearchSVG } from "../../../assets/svg/index"

import InputStyle from "./Input.module.scss"

export const Input = ({props}:{props: React.Dispatch<React.SetStateAction<string | undefined>>}) => {
  const setInputState = props
  return (
    <>
      <div className={InputStyle.wrapperInput}>
        <SearchSVG/>
        <input onChange={(e)=>setInputState(e.target.value)} className={InputStyle.input} type="text" />
      </div>
    </>
  );
};
