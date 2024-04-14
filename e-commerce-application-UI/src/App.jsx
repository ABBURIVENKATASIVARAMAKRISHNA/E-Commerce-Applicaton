import React from 'react'
import Headers from './Util/Headers'
import {Outlet} from 'react-router-dom'
import FormValidation from './FormValidation'

const App = (props) => {
  
  
  return (
    <div>
      <Headers user={props.user} />
  {/* <FormValidation/> */}
      
   <Outlet/>
    
    </div>
  )
}

export default App
