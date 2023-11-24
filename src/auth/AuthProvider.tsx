import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";
import { auth } from "../firebase/index";
import { onAuthStateChanged } from "firebase/auth";
import { User as FirebaseUser} from "firebase/auth";
import { useCookies } from "react-cookie";
import { getUserRights } from "../firebase/bookingDb";

let currentUser: FirebaseUser;

const AuthContext = createContext(currentUser);
const AuthLoadedContext = createContext(false);
const UserRoleContext = createContext({
  isAdmin: false,
  isManager: false,
});
const useAuth = () => useContext(AuthContext);

type Props = {
  children?: ReactNode
};

const AuthProvider: FC<Props> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userRoles, setUserRoles] = useState({
    isAdmin: false,
    isManager: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if(user) {
        setCookie("user", user.uid, { path: "/" });
        setIsLoaded(true);
      }
    });
    if(currentUser) {
      getUserRights(currentUser.uid, setUserRoles)
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <AuthLoadedContext.Provider value={isLoaded}>
        <UserRoleContext.Provider value={userRoles}>
          {children}
        </UserRoleContext.Provider>
      </AuthLoadedContext.Provider>
    </AuthContext.Provider>
  );
};

function useAuthValue(){
  return useContext(AuthContext)
}

function useIsLoaded(){
  return useContext(AuthLoadedContext)
}

function useHasUserRoles(){
  return useContext(UserRoleContext)
}

export {useAuthValue, useIsLoaded, AuthContext, useAuth, useHasUserRoles}
export default AuthProvider;