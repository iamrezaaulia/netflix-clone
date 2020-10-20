import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebaseContext';
import { FooterContainer, HeaderContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = email === '' || password === ''

  const handleSignIn = (event) => { 
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
        setError(error.message);
      })
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error> {error} </Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
