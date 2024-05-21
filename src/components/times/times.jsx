import { useState,useEffect } from 'react';
import './times.css';

export function Times({day,month,year,click}) {

    const [years, setYears] = useState("--");
    const [months, setMonths] = useState("--");
    const [days, setDays] = useState("--");


    const evaluateInputs = () => {
        
        const currentDate = new Date();
        const hoy = currentDate.getDate();
        const mesActual = currentDate.getMonth() + 1; 
        const yearNow = currentDate.getFullYear();
    
        if (day <= 0 || day > 31) {
            Toastify({
                text: "Verifique la casilla day", 
                duration: 1500,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(180deg, #854dff, #dedede)",
                  },
            }).showToast();
            resetResults()  
            return;    
        } else {
            const resultDays = Math.abs(hoy - day);
            setDays(resultDays);
        }
    
        if (month <= 0 || month > 12) {
            Toastify({
                text: "Verifique la casilla month", 
                duration: 1500,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(180deg, #854dff, #dedede)",
                  },
            }).showToast();  
            resetResults() 
            return;  
        } else {
            const resultMonths = Math.abs(mesActual - month);
            setMonths(resultMonths);
        }
    
        if (year > yearNow || year <= 0) {
            Toastify({
                text: "Verifique la casilla year", 
                duration: 1500,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(180deg, #854dff, #dedede)",
                  },
        
            }).showToast();   
            resetResults()
            return;  
        } else {
            const resultYears = yearNow - year;
            setYears(resultYears);
        }
    }
 
    const comprobarClick = () => {
        if(click) {
            evaluateInputs();
          
        } else {
            resetResults()
        }
    }

    const resetResults = () => {
        setDays("--");
        setMonths("--");
        setYears("--");
    };

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