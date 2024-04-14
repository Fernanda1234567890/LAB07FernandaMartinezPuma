import { useState } from "react";
export const Nombre = () => {
    return (
        <div>
            <h1>LABORATORIO N° 7</h1>

        </div>
    )
}



 export const Lista = () => {
    const [name, setName] = useState('');

    const handlerChange = (event) => {
        setName (event.target.value);
    };

    return(
 <form>
          <label>
            <input type="text" name="name" onChange={handlerChange} />
           <p> User : {name} </p>
          </label>
      </form>
    )
 }

 