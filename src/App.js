import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar.js'
import FormField from './components/FormField.js'
// import CoolButton from './components/CoolButton.js'
import Signup from './components/Signup.js'

const App = () => {
  return ( 
    <div>
  <Navbar/>
  <Signup/>
  {/* <FormField label="Name" type="text" placeholder="e.g Alex Smith" /> */}
  {/* <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
  {/* <CoolButton myClass="button is-danger is-rounded">Button 1</CoolButton> */}
  {/* <CoolButton myClass="button  is-success">Button 2</CoolButton> */}
  </div>
  )
};

export default App;
