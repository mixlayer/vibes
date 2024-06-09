import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''

export const WaitlistEmail = () => (
  <Html>
    <Head />
    <Preview>You&apos;re on the list!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src={`${baseUrl}/logo.png`} width="149" height="59" alt="Vibes" />
          <Hr style={hr} />
          <Heading style={heading}>You&apos;re on the list!</Heading>
          <Text style={paragraph}>
            Thank you for the interest! We&apos;ll keep you in the loop as the project progresses.
          </Text>
          <Button style={button} href="https://vibes.site">
            Back to Vibes
          </Button>
          <Hr style={hr} />
          <Text style={footer}>Makeswift, 437 Memorial Dr SE Ste 108, Atlanta, GA 30312</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default WaitlistEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const box = {
  padding: '0 48px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const heading = {
  color: '#525f7f',
  fontSize: '20px',
  lineHeight: '28px',
  fontWeight: 'bold',
  textAlign: 'left' as const,
}

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}

const anchor = {
  color: '#556cd6',
}

const button = {
  backgroundColor: '#000',
  borderRadius: '500px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px 12px',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
}
