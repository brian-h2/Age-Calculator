import { useState } from 'react'
import './arrow.css'

const Arrow = ({onChildClick}) => {

    const [click,setClick] = useState(false)

    const handleClickArrow = () => {
        setClick(click => !click) //Alterna el estado del click para que pase de false a true y viceversa
        onChildClick(click);      //Pasamos por parametro el estado de click a onChilClick que llevaria el valor al comp padre
                                    //Cuando se da click por segunda vez que haga limpieza de campos
    }


    return <div className='box-salto-linea' id="arrow" onClick={handleClickArrow}> </div>
}

export default Arrow;