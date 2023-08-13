import React, { useState } from "react";
import {PhotoAlbum, RenderRowContainer} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const renderRowContainer: RenderRowContainer = ({ rowContainerProps, children }) => (
   <div className="grid grid-cols-3 gap-2 lg:grid-cols-5">
      {children}
   </div>
);

const GallerySection = ({
  title,
  gallery,
}: {
  title: string;
  gallery: any;
}) => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="relative px-8 lg:px-20 pb-20">
      <div className="w-full max-w-screen-xl mx-auto pt-6 pb-4">
        <h2 className="text-900 dark:text-white text-title2">{title}</h2>
      </div>

      <div className="max-w-screen-xl -mx-8 lg:mx-auto">
        <PhotoAlbum
          layout="rows"
          photos={gallery.images}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={gallery.images}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default GallerySection;