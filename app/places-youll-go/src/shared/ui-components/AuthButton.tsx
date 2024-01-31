import { useAuth0 } from "@auth0/auth0-react"

export const AuthButton = () => {
  return LogoutButton() || LoginButton()
}

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0()

  return (
    isAuthenticated && (
      <a
        href="#"
        onClick={() => {
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          })
        }}
      >
        Log Out
      </a>
    )
  )
}

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    !isAuthenticated && (
      <a href="#" onClick={() => loginWithRedirect()}>
        Log In
      </a>
    )
  )
}
