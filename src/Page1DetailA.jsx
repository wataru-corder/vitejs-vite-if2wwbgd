import {useLocation,useHistory} from "react-router-dom"

export const Page1DetaleA = () => {
    const {state} = useLocation();
    console.log(state)

    const history = useHistory();

    const onClickBacktory = () => history.goBack();
    return (
      <div>
        <h1>Page1DetaleAページです</h1>
        <button onClick={onClickBacktory}>戻る</button>
      </div>
    );
  };
  