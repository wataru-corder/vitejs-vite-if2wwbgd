import {useParams} from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
export const UrlParameter = () => {
    const {id} = useParams();
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    console.log(query)
    return (
      <div>
        <h1>UrlParameterページです</h1>
        <p>{id}</p>
        <p>{query.get("name")}</p>
      </div>
    );
  };
  