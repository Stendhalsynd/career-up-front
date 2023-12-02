'use client'

import { Box } from 'components/layout/index.ts'
import { Signup } from 'components/organisms/index.ts'
import LoginSignupLayout from 'components/templates/LoginSignupLayout'

const LoginPage = () => {
  return (
    <>
      <LoginSignupLayout>
        <Box zIndex={1}>
          <Signup />
        </Box>
      </LoginSignupLayout>
    </>
  )
}

export default LoginPage
