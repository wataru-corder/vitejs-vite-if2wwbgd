import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Page404 = () => {
    return (
      <div>
        <h1>ページが見つかりません</h1>
        <Link to="/">トップへ</Link>
      </div>
    );
  };
  