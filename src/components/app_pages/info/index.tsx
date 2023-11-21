import React from "react";
import type { PageProps } from "gatsby";
import FixedHeader from "../../FixedHeader";
import InfoPosts from "./ShowInfoPosts";

const AppInfoPage: React.FC<PageProps> = () => {
  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Info</h1>
      </FixedHeader>
      <main className="mt-20 pt-safe-top">
        <section className="px-8 pt-8 lg:pt-0">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-3">
              <InfoPosts />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AppInfoPage;
