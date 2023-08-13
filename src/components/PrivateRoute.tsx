import React, {FC} from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useAuthValue } from "../auth/AuthProvider"

const PrivateRoute = ({ component: Component, location, ...rest }: {component: any, Component: FC, location: any,}) => {

  const {currentUser} = useAuthValue()
  if(!currentUser){
    navigate("/")
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
