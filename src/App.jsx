import Row from "./components/Row.jsx";
import Result from "./components/Result.jsx";
import Button from "./components/Button/Button.jsx";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [rows, setRows] = useState([
    { id: 1, value: "30", op: "+", disable: false, disValue: 'Disable' },
    { id: 2, value: "30", op: "+", disable: false, disValue: 'Disable' },
    { id: 3, value: "30", op: "+", disable: false, disValue: 'Disable' },
  ]);

  const [sum, setSum] = useState(0);

  // function to calculate
  function calculate() {
    let res = 0;
    for (let i = 0; i < rows.length; i++) {
      if (!rows[i].disable) {
        if (rows[i].op === '+') {
          // console.log(`ATTUALE: ${res} AGGIUNGO: ${Number(rows[i].value)} TOTALE: ${res+Number(rows[i].value)}`);
          res += Number(rows[i].value);
        }else{
          // console.log(`ATTUALE: ${res} TOLGO: ${Number(rows[i].value)} TOTALE: ${res-Number(rows[i].value)}`);
          res -= Number(rows[i].value);
        }
      }
    }
    setSum(res);
  }

  // function to add row
  function addRow() {
    let lastRowId = rows.length + 1;
    let newRow = { id: lastRowId, value: "30", op: "+", disable: false, disValue: 'Disable' };
    setRows([...rows, newRow]);
  }

  // logica per disabilitare row (da rivedere e migliorare)
  function disableRow(id) {
    let newRows = rows.map(row => {
      if (row.id === id) {
        return {
          ...row,
          disable: !row.disable,
          class: row.disable ? '' : 'disabled',
          disValue: row.disable ? 'Disable' : 'Enable',
        };
      }
      return row;
    });

    setRows(newRows);
    
  }

  function deleteRow(id) {
    let newArray = rows.filter((row)=>{
      return row.id !== id;
    })
    setRows(newArray);
  }

  function changeRow(id, newValue){
    setRows((rows) =>
      rows.map((row) =>
        row.id === id ? { ...row, value: newValue } : row 
      )
    );
  };

  function changeOp(id, newOp){
    setRows((rows) =>
      rows.map((row) =>
        row.id === id ? { ...row, op:newOp } : row 
      )
    );
  };

  useEffect(() => {
    calculate();
  }, [rows]); 
  

  return (
    <>
    <h1>React Challenge - Calculator</h1>
    <Button value="Add Row" onclick={addRow} id="addrow"></Button>
    <div className="rows">

      {rows.map((row) => (
        <Row
        key={row.id} 
        id={row.id}  // id
        op={row.op}  // operator
        value={row.value}  // number 
        isDisable={row.disable}  // disable true or false
        disable={disableRow}  // disable row button function
        delete={deleteRow}  // delete row button function
        onChange={changeRow}  // change value function
        opChange={changeOp}  // change operator value
        class={row.class}  // disabled class
        disValue={row.disValue}  // enable/disable label
        />
      ))}
      </div>
      <Result res={sum}></Result>
    </>
  );
}

export default App;
