import './fechas.css';

export function Fecha() {
    return (
              
        <div className="fechas-box-textarea">
            <div className="input">
            <label htmlFor="">Day</label>
            
                <input className='input-text'></input>
            </div>

            <div className="input">
                <label htmlFor="">Month</label>
                <input className='input-text'></input>
            </div>

            <div className="input">
                <label htmlFor="">Year </label>
                <input className='input-text'></input>
            </div>
        </div> 
   
    )
}
