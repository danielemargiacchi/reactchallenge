import Button from './Button/Button.jsx';

function Row(props) {
    let id = props.id;


    
    return (
        <>
            <div className={props.class}>
                <div className="row">

                <select value={props.op} onChange={(e)=>{props.opChange(id,e.target.value)}} >
                    <option value="+">+</option>;
                    <option value="-">-</option>;
                </select>
                <input type="number" value={props.value} onChange={(e)=>{props.onChange(id,e.target.value)}}/>
                <Button onclick={()=>{props.disable(id)}} value={props.disValue} id="disable"></Button>
                <Button onclick={()=>{props.delete(id)}} value="Delete" id="delete" ></Button>
                </div>
            </div>
        </>
    )
}

export default Row;

