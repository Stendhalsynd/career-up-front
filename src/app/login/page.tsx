'use client'

import { Box } from 'components/layout/index.ts'
import { Login } from 'components/organisms/index.ts'
import LoginSignupLayout from 'components/templates/LoginSignupLayout'

const LoginPage = () => {
  return (
    <>
      <LoginSignupLayout>
        <Box zIndex={1}>
          <Login />
        </Box>
      </LoginSignupLayout>
    </>
  )
}
export default LoginPage
