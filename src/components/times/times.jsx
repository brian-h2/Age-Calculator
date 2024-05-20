import { useState,useEffect } from 'react';
import './times.css';

export function Times({day,month,year,click}) {

    //Se debe hacer un evento que al darle enter renderice los datos, antes deberiamos tener una condicional 
    //Controlar que los numeros mostrados no se vuelvan negativos

    const [years, setYears] = useState("--");
    const [months, setMonths] = useState("--");
    const [days, setDays] = useState("--");


    const fecha = new Date();
    let yearNow = fecha.getFullYear();
    let hoy = fecha.getDate();
    let mesActual = fecha.getMonth() + 1; 


    const evaluateInputs = () => {
        if(day <= 0 || day > 31) {
            alert("Verifique la casilla day")
            setDays("--")
        } else {
            let resultDays = hoy - day
            resultDays = Math.abs(resultDays);
            setDays(resultDays)
        }

        if(month <= 0 || month > 12) {
            alert("Verifique la casilla month")
            setMonths("--")
        } else{
            let resultMonths = mesActual - month
            resultMonths = Math.abs(resultMonths); //Permite devolver el valor absoluto
            setMonths(resultMonths)
        }

        if(year > yearNow || year <= 0) {
            alert("Verifique la casilla year")
            setYears("--")
        } else {
            setYears(yearNow - year)
        }
    }
 
    const comprobarClick = () => {
        if(click) {
            evaluateInputs();
          
        } else {
            setDays("--")
            setYears("--")
            setMonths("--")
        }
    }

    useEffect(() => {
        comprobarClick();
        
    }, [click]); //El useEffect ejecutara la funcion comprobarClick cada vez que el valor de click cambie
       
    return (
        
         <div className='times-box'>
            <p><span className="times-box-number">{years}</span> years</p>
            <p><span className="times-box-number">{months}</span> months</p>
            <p><span className="times-box-number">{days}</span> days</p>
                
        </div>
        
    
    )
}