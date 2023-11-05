'use client';

import { Context } from '@/app/page';
import React, { useEffect, useState, useContext } from 'react'
import { Container, Input, SignInButton, Form } from './page.style';

const SignIn = () => {
  const { updateAuth, updateUser } = useContext(Context);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Form action="">
      <h1>Welcome to Pay Me</h1>
      <Container>
        <label htmlFor='email'>email</label>
        <Input
          id='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Container>
      <Container>
        <label htmlFor='password'>password</label>
        <Input
          id='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Container>
      <SignInButton>Sign in</SignInButton>
    </Form>
  )
}

export default SignIn