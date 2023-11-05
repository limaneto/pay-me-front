'use client'

import React from 'react'
import { Container, Input, SignInButton, Form } from './page.style';

const SignIn = () => {
  return (
    <Form action="">
      <h1>Welcome to Pay Me</h1>
      <Container>
        <label htmlFor='email'>email</label>
        <Input id='email' typeof='email' />
      </Container>
      <Container>
        <label htmlFor='password'>password</label>
        <Input id='password' typeof='password' />
      </Container>
      <SignInButton>Sign in</SignInButton>
    </Form>
  )
}

export default SignIn