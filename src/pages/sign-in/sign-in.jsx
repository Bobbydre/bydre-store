import React, { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, Wrapper, Title, Form, Input, SignInLink } from './sign-in.styles'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/Button/button';
import { UserContext } from '../../contexts/user.context';




const defaultFormFields = {
   
    email: '',
    password: ''
  };

const SignIn = () => {
        const [formFields, setFormFields] = useState(defaultFormFields);
        const { email, password } = formFields;

        const { setCurrentUser } = useContext(UserContext)
      
        const resetFormFields = () => {
          setFormFields(defaultFormFields);
        };

        const signInWithGoogle = async () => {
            const{user}  = await signInWithGooglePopup();
          await createUserDocumentFromAuth(user);
        };
    
            
        const handleSubmit = async (event) => {
          event.preventDefault();

          try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email, password
            );
            setCurrentUser(user);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
                case 'auth/user-not-found':
                alert('no user associated with this email');
                break; 
                default:
                    console.log(error)
            }
        }
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value});
    };


      

       

  return (

    <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
    
          <Form onSubmit={handleSubmit} >
            <Input placeholder="Email"
                   required
                   onChange={handleChange}
                   label='Email'
                   type='email'
                   name= 'email'
                   value={email}
            />
            <Input placeholder="Password"
                   required
                   onChange={handleChange}
                   label='Password'
                   type='password'
                   name='password'
                   value={password} 
                   />
            
            <Button buttonType={BUTTON_TYPE_CLASSES.google}>SIGN IN</Button>
            <Button type='button'
                    onClick={signInWithGoogle}
                    buttonType={BUTTON_TYPE_CLASSES.google}
            >
                SIGN IN WITH GOOGLE
            </Button>
            
            <SignInLink>
                
            <Link to='../register'>
                DON'T HAVE AN ACCOUNT?
            </Link>
            
            </SignInLink>
            
          </Form>

         
        </Wrapper>
      </Container>
  );
};

export default SignIn

