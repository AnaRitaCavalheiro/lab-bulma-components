import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './Navbar.js'
import FormField from './FormField.js'
import CoolButton from './CoolButton.js'

const Signup = () => {
    return ( 
      <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="*************" />
          <CoolButton myClass="button  is-info" type="submit">Submit</CoolButton>
    </div>
    )
  };
  
  export default Signup;
  