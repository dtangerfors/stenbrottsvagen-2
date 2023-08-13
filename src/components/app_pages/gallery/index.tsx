import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import FixedHeader from "../../FixedHeader";
import GallerySection from "./GallerySection";

import galleries from "./image-data.json";

const AppGalleryPage: React.FC<PageProps> = () => {

  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Galleri</h1>
      </FixedHeader>
      <main className="mt-20 py-20">
        {galleries.galleries.map((gallery: any, key: number) => (
          <GallerySection title={gallery.name} key={`gallery-${key}`} gallery={gallery} />
        ))}
      </main>
    </>
  );
};

export default AppGalleryPage;

export const Head: HeadFC = () => <title>Stenbrottsvägen | Galleri</title>;
