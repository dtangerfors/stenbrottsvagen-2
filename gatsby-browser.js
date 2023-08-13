import React from "react"
import "./src/styles/global.css"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

import AuthProvider from "./src/auth/AuthProvider";

export const wrapRootElement = ({ element }) => (
    <AuthProvider >
        {element}
    </AuthProvider>
); 