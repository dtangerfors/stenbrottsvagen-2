import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";
import { auth } from "../firebase/index";
import { onAuthStateChanged } from "firebase/auth";
import { User as FirebaseUser} from "firebase/auth";

let currentUser: FirebaseUser;

export const AuthContext = createContext(currentUser);
export const useAuth = () => useContext(AuthContext);

type Props = {
  children?: ReactNode
};

const AuthProvider: FC<Props> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log('user is logged in')
    });
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthValue(){
  return useContext(AuthContext)
}

export default AuthProvider;