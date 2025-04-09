import { IProduct } from "../../models";

import { WindowProduct } from "../WindowProduct/WindowProduct";

import ContainerStyle from "./Container.module.scss"

export const Container = ({props}:{props:[IProduct[],React.Dispatch<React.SetStateAction<string | null>>]}) => {
  
  return (
    <>
      <main className={ContainerStyle.container}>
        {props[0].map((e)=><WindowProduct props={[e,props[1]]}/>)}
      </main>
    </>
  );
};
