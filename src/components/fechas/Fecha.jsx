import './fechas.css';

function Fecha({ onDateChange, date}) {
    // Desestructuración del objeto `date` para extraer `day`, `month`, `year`
    const { day, month, year } = date;

    const handleInputChange = (e) => {
        
        const { id, value } = e.target;        //Obtiene de e.target (Brinda el elemento html) su id y value
        onDateChange({ ...date, [id]: value }) //Los ... llamado spread permiten crear una nueva copia del objeto date asignando 
                                               //id y value obtenidos desde los inputs
    };

    return (
        <form className="fechas-box-textarea">
            
            <div className="input">
                <label htmlFor="">Day</label>
                    <input 
                        id="day" placeholder="DD" className='input-text' type='number'
                        value={day}
                        required="number"
                        onChange={handleInputChange}                      
                    ></input >
            </div>

            <div className="input" > 
                <label htmlFor="">Month</label>
                    <input 
                    id="month" placeholder="MM" className='input-text' type='number'
                    value={month}
                    onChange={handleInputChange}
                    ></input>
            </div>

            <div className="input">
                <label htmlFor="">Year </label>
                    <input 
                    id="year" placeholder="YYYY" className='input-text' type='number'
                    value={year}
                    onChange={handleInputChange}
                    pattern="^[1-9]\d*$"
                    ></input>
            </div>
        </form>   
   
    )
}

export default Fecha;