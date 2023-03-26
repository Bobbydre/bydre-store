import React from 'react';
import { useState, useContext } from 'react';
import { Container, Wrapper, Title, Form, Input, Agreement } from './register.styles';
import { UserContext } from '../../contexts/user.context';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/Button/button';

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';



const defaultFormFields = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };


const Register = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, displayName, email, password, confirmPassword } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user)

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };



    return (
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input placeholder="first name"
                   type = 'text' 
                   required 
                   onChange={handleChange}
                   name = 'firstName'
                   value={firstName}
            />
            <Input placeholder="last name" 
                   type = 'text'
                   required
                   onChange={handleChange}
                   name = 'lastName'
                   value={lastName}
            />
            <Input placeholder="username" 
                   type = 'text' 
                   required
                   onChange={handleChange}
                   name = 'displayName'
                   value={displayName}
            />
            <Input placeholder="email" 
                   type = 'email' 
                   required 
                   onChange={handleChange}
                   name = 'email'
            />
            <Input placeholder="password" 
                   type = 'password' 
                   required
                   onChange={handleChange}
                   name = 'password'
                   value={password}
            />
            <Input placeholder="confirm password" 
                   type = 'password' 
                   required
                   onChange={handleChange}
                   name = 'confirmPassword'
                   value={confirmPassword}
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type='submit'
                    buttonType={BUTTON_TYPE_CLASSES.signIn}>
                        SIGN UP
            </Button>
          </Form>
        </Wrapper>
      </Container>
    );
  };
  
  export default Register;