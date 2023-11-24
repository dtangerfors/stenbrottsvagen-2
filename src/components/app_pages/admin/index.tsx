import React, { useContext } from "react";
import type { PageProps } from "gatsby";
import { useHasUserRoles } from "../../../auth/AuthProvider";
import FixedHeader from "../../FixedHeader";
import ShowStatistics from "./ShowStatistics";

const AppAdminPage: React.FC<PageProps> = () => {
  const user = useHasUserRoles();

  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Admin</h1>
      </FixedHeader>
      <main className="mt-20 pt-safe-top flex flex-col">
      <section className="lg:px-8 lg:pt-0">
        {user.isManager && <ShowStatistics />}
      </section>
        {user.isAdmin && ( 
          <section className="px-8 pt-8">
            <div className="w-full max-w-screen-xl mx-auto text-center">
              <a
                href="https://admin.sbv.dtangerfors.se/wp-login.php"
                target="_blank"
                title="Admin"
                className="appearance-none inline-block bg-primary text-white text-headline uppercase tracking-widest py-6 px-16 leading-none rounded-full font-medium hover:bg-secondary transition-all ease-in-out duration-200"
              >
                Logga in på Wordpress
              </a>
            </div>
          </section>
         )}
      </main>
    </>
  );
};

export default AppAdminPage;
