import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('login')
  }

  return (
    <button onClick={onLogoutButton} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
