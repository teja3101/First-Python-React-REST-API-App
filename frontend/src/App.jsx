import { useState } from 'react'
import './App.css'
import ShowTable from './ShowTable'
import EmployeeForm from './EmployeeForm'

function App() {

  const [add, setAdd] = useState(null)
  
  const [sendUpdate, setSendUpdate] = useState(null)

  return (
    <>
      <center>

        <EmployeeForm add={(e) => { setAdd(add + e), setSendUpdate(null) }} recieveUpdate={sendUpdate} />

        <ShowTable refresh={add} handleUpdate={(e) => setSendUpdate(e)} />

      </center>

    </>
  )
}

export default App