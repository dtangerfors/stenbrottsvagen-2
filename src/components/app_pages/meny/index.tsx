import React, {useContext} from "react";
import type { PageProps } from "gatsby";
import { useHasUserRoles } from "../../../auth/AuthProvider";
import { signOut } from "firebase/auth";
import FixedHeader from "../../FixedHeader";
import { MenuButtonInternal, MenuButtonExternal } from "./MenuButtons";
import { PrimaryButton } from "../../buttons";
import { useCookies } from "react-cookie";

import { auth } from "../../../firebase";

const AppMenuPage: React.FC<PageProps> = () => {
  const user = useHasUserRoles();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const handleLogout = () => {
    removeCookie("user", { path: "/" });
    signOut(auth)
  }

  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Meny</h1>
      </FixedHeader>
      <main className="mt-20 pt-safe-top">
        <ul className="max-w-screen-sm mx-auto">
          <li>
            <MenuButtonInternal
              href="/app/galleri"
              title="Galleri"
              icon="gallery"
            />
          </li>
          <li>
            <MenuButtonInternal href="/app/om" title="Om" icon="information" />
          </li>
          <li>
            <MenuButtonInternal href="/app/rapportera-problem" title="Rapportera problem" icon="bug" />
          </li>
          {user.isManager && 
          <li>
            <MenuButtonInternal href="/app/admin" title="Admin" icon="admin" />
          </li>} 
        </ul>
        <div className="flex justify-center mt-20">
          <PrimaryButton
            onClick={handleLogout}
            text={"Logga ut"}
            actionText={"Klicka här för att logga ut från portalen"}
          />
        </div>
      </main>
    </>
  );
};

export default AppMenuPage;
