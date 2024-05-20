import { useState } from 'react';
import './app.css';
import  Fecha  from './components/fechas/Fecha';
import { Times } from './components/times/times';
import Arrow from './components/Arrow/arrow';

export function App() {

    //Verificar que los datos se muestran aunque en algunas casillas falten datos

    const [date,setDate] = useState({ day: '', month: '', year: '' }); //Definimos un objeto como valor inicial

    const [click, setClick] = useState(false);

    const handleChildClick = (clickStatus) => {
        setClick(clickStatus);
    };

    const handleEventChange = (newDate) => {
        setDate(newDate) //Evento que setea los valores que se pasan desde App
    }
    
    return(
        <>
        <div className="body">
            <Fecha onDateChange={handleEventChange} 
            date={date} 
            onDateEvalute={handleEventChange} />
            <Arrow onChildClick={handleChildClick} />
            <Times click={click} day={date.day} month={date.month} year={date.year}/>
        </div>   
        </>
        
    )
}

