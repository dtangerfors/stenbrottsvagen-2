import React from "react";
import type { PageProps } from "gatsby";
import { signOut } from "firebase/auth";
import FixedHeader from "../../FixedHeader";
import { MenuButtonInternal, MenuButtonExternal } from "./MenuButtons";
import { PrimaryButton } from "../../buttons";

import { auth } from "../../../firebase";

const AppMenuPage: React.FC<PageProps> = () => {
  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Meny</h1>
      </FixedHeader>
      <main className="mt-20">
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
            <MenuButtonExternal href="/app/om" title="Admin" icon="admin" />
          </li>
        </ul>
        <div className="flex justify-center mt-20">
          <PrimaryButton
            onClick={() => signOut(auth)}
            text={"Logga ut"}
            actionText={"Klicka här för att logga ut från portalen"}
          />
        </div>
      </main>
    </>
  );
};

export default AppMenuPage;
