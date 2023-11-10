import React, {FC} from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useAuthValue, useIsLoaded } from "../auth/AuthProvider"
import { useCookies } from "react-cookie";

const PrivateRoute = ({ component: Component, location, ...rest }: {component: any, Component: FC, location: any,}) => {

  const [cookies, setCookie] = useCookies(["user"]);

  const currentUser = cookies.user;
  const isLoaded = useIsLoaded();

  console.log(`private: ${isLoaded}`)
  console.log(`currentUser: ${currentUser}`)

  // const {currentUser} = useAuthValue()
  // if(!currentUser){
    
  //   return null
  // }

  if(!isLoaded && currentUser) {
    return <></>
  } else if (currentUser && isLoaded) {
    return <Component {...rest} />
  } else {
    navigate("/")
  }

}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
