import { Page1 } from "../Page1";
import { Page1DetaleA } from "../Page1DetailA";
import { Page1DetaleB } from "../Page1DetailB";

export const page1Routes= [
    {path:"/",
    exact:true,
    children:<Page1/>
},
{path:"/detailA",
exact:false,
children:<Page1DetaleA/>
},
{path:"/detailB",
exact:false,
children:<Page1DetaleB/>
},
]