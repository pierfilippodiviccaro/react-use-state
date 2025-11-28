import  './App.css'
import { languages } from './assets/languages'
import { useState } from "react";
export default function DevLanguages() {
{const[show,setShow] = useState();
    return(
        <div className="container">
            <h1>learn your new programming language</h1>
            {languages.map((language)=>{
                return(
                    <button onClick={()=>setShow(language)} className='btn flex btn-warning'>{language.title}</button>
                )
            })}
            <h2>{show ? show.title : ""}</h2>
            <p>{show ? show.description : ""}</p>

        </div>
    )
}
}