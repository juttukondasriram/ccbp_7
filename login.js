import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  const onLoginButton = () => {
    const {history} = props
    Cookies.set('jwt_token', '12345678', {expires: 30})
    history.replace('/')
  }
  return (
    <>
      <h1>Please Login</h1>
      <button onClick={onLoginButton} type="button">
        Login with Sample Credits
      </button>
    </>
  )
}
export default Login
