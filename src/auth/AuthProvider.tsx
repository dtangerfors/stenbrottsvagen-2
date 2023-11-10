import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";
import { auth } from "../firebase/index";
import { onAuthStateChanged } from "firebase/auth";
import { User as FirebaseUser} from "firebase/auth";
import { useCookies } from "react-cookie";

let currentUser: FirebaseUser;

export const AuthContext = createContext(currentUser);
const AuthLoadedContext = createContext(false);
export const useAuth = () => useContext(AuthContext);

type Props = {
  children?: ReactNode
};

const AuthProvider: FC<Props> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
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
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <AuthLoadedContext.Provider value={isLoaded}>
        {children}
      </AuthLoadedContext.Provider>
    </AuthContext.Provider>
  );
};

export function useAuthValue(){
  return useContext(AuthContext)
}

export function useIsLoaded(){
  return useContext(AuthLoadedContext)
}

export default AuthProvider;