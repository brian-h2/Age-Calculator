import './times.css';

export function Times({day,month,year}) {

    //Se debe hacer un evento que al darle enter renderice los datos, antes deberiamos tener una condicional 
    //Controlar que los numeros mostrados no se vuelvan negativos
    

    const fecha = new Date();
    let yearNow = fecha.getFullYear();
    let hoy = fecha.getDate();
    let mesActual = fecha.getMonth() + 1; 
    
    let years = yearNow - year;
    let days = hoy - day
    let months = mesActual - month;

    

    return (
        <>
         <div className='times-box'>
            <p><span className="times-box-number">{years}</span> years</p>
            <p><span className="times-box-number">{months}</span> months</p>
            <p><span className="times-box-number">{days}</span> days</p>
                
        </div>
        </>
        
    )
}