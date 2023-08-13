import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../layout";
import FixedHeader from "../../FixedHeader";
import { MenuButtonInternal, MenuButtonExternal } from "./MenuButtons";
import { PrimaryButton } from "../../buttons";

const AppMenuPage: React.FC<PageProps> = () => {
  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Meny</h1>
      </FixedHeader>
      <main className="mt-20">
         <ul className="max-w-screen-sm mx-auto">
            <li><MenuButtonInternal href="/app/galleri" title="Galleri" icon="gallery"/></li>
            <li><MenuButtonInternal href="/app/om" title="Om" icon="information"/></li>
            <li><MenuButtonExternal href="/app/om" title="Admin" icon="admin"/></li>
         </ul>
         <div className="flex justify-center mt-20">
            <PrimaryButton 
               text={"Logga ut"}
               actionText={"Klicka här för att logga ut från portalen"}
            />
         </div>
      </main>
    </>
  );
};

export default AppMenuPage;

export const Head: HeadFC = () => <title>Stenbrottsvägen | Meny</title>;
