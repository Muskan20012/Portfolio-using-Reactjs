import {db} from '../firebaseConfig'
import { setDoc,doc} from 'firebase/firestore'
import { TextField,Button } from '@mui/material'
import React, { useState } from 'react';
import 'firebase/firestore';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    
    event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Submitted:', values);
      // Save data to Firebase
      
      setDoc(doc(db,"querydata",values.email.trim()),{
        username:values.name,
        useremail:values.email,
        usercontact:values.phone,
        usermessage:values.message,  
        time:new Date().toISOString().split('T')[0],
      },
      )
      .then(() => {
        console.log('Data saved to Firebase!');
        // Reset form values
        setValues({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error saving data to Firebase:', error);
      });
    }
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }

    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <center>

    <form className='w-96'>
    <center>

      <TextField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Message"
        name="message"
        value={values.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button onClick={handleSubmit} type="submit" variant="contained">
        Submit
      </Button>

    </center>
</form>
    </center>);
};
export default Contact;
