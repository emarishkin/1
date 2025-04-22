import { useState } from "react"
import { Button } from "./Button"
import { tripitropa } from "../../data"



export const Tripi = () => {
    const [content,setContent] = useState('нажми на кнопку')
    return(
        <section>
                    <Button Ontypoy={()=>setContent('way')}>доступность</Button>
                    <Button Ontypoy={()=>setContent('easy')}>яркость</Button>
                    <Button Ontypoy={()=>setContent('program')}>интерактивность</Button>
                    <p>{tripitropa[content]}</p>
                 </section>
    )
}