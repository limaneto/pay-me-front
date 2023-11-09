'use client'

import React from 'react'
import { useQuery } from '@apollo/client'
import { Container, Section } from './page.style'
import { GET_CREDITS } from '../queries'

const Dashboard = () => {
  const { loading, data } = useQuery(
    GET_CREDITS,
    { variables: { page: 1, limit: 10 } }
  );

  if (loading) return <div>Loading...</div>

  return (
    <Container>
      <Section>
        <h2>Credits</h2>
      </Section>
    </Container>
  )
}

export default Dashboard