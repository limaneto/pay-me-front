'use client';

import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'
import { Context } from '@/app/page'
import { Container, ErrorMessage, Input, SignInButton, Form } from './page.style'
import { LOGIN } from '@/app/queries';

const SignIn = () => {
  const router = useRouter()
  const [login, { loading, data }] = useMutation(LOGIN)
  const { updateAuth, updateUser } = useContext(Context)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  useEffect(() => {
    if (!data) return;

    const responseType = data.login.__typename;

    switch(responseType) {
      case 'Login':
        updateAuth(data.login)
        updateUser(data.login.user)
        router.push('/dashboard')
        break;
      case 'Error':
        setErrorMessage(data.login.error.message);
        break;
      case 'Errors':
        setErrorMessage(data.login.errors[0].message)
    }
  }, [data, updateUser, updateAuth])

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(undefined)
    }
  }, [email, password])

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ variables: { email, password } })
  }

  return (
    <Form onSubmit={signIn}>
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
      {loading && <span>Loading...</span>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SignInButton type='submit'>Sign in</SignInButton>
    </Form>
  )
}

export default SignIn