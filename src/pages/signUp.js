import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebaseContext';
import { FooterContainer, HeaderContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || email === '' || password === ''

  const handleSignUp = (event) => { 
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      })
      .catch((error) => {
        setFirstName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      })
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error> {error} </Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input 
              placeholder='First Name'
              type='text'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            /> 
            <Form.Input 
              placeholder='Email address'
              type='text'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            /> 
            <Form.Input 
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type='submit' disabled={isInvalid}>
              Sign Up
            </Form.Submit> 
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
