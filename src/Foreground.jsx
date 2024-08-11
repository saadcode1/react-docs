import "./Foreground.css"
import Cards from "./Cards"
import { useRef } from "react"
export default function Foreground(){

    const ref=useRef(null);
    let card=[{
        desc:"lorem ismpe ar kudru da kun kalaba uuuh Goo!",
        data:"3.4mb",
        close:true,
        footer:true,
        color:"pink",
    },
    {
        desc:"lorem ismpe ar kudru da kun kalaba uuuh Goo!",
        data:"1.4mb",
        close:true,
        footer:true,
        color:"yellow",
    },{
        desc:"lorem ismpe ar kudru da kun kalaba uuuh Goo!",
        data:"2.4mb",
        close:false,
        footer:true,
        color:"green",
    }]
    return(
        <div ref={ref} className="foreground">
            {card.map((data,idx)=><Cards data={data} key={idx} ref={ref}/>)}
        </div>
    )
}