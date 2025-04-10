import { SearchUsers } from "../../SearchUsers/SearchUsers";

export const HeaderSearch = ({location}:{location:string}) =>{
    switch (location) {
        case "/":
            return(
                <>
                <SearchUsers/>
                </>
            )
            break;
        default:
            break;
    }
}