import React, {useEffect, useState} from "react";
import Complete from '../../Lottie.Searching'
// import { useStaticQuery, graphql } from "gatsby";

import './PostStyles.css'

const showDate = (timeStr: string) => {
  let date = new Date(timeStr)
  return date.toLocaleDateString();
};

const InfoPosts = () => {
  const [postData, setPostData] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // const data = useStaticQuery(graphql`
  //   query {
  //     allWpPost(
  //       filter: {categories: {nodes: {elemMatch: {slug: {eq: "information"}}}}}
  //     ) {
  //       edges {
  //         node {
  //           id
  //           content
  //           title
  //           author {
  //             node {
  //               firstName
  //               lastName
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // if (!data) return <p>Ingen data hittad!</p>;
  // const postData = data.allWpPost.edges;

  useEffect(() => {
    fetch(
      "https://admin.sbv.dtangerfors.se/wp-json/wp/v2/posts?categories=15"
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex flex-col col-span-full justify-self-center"><Complete /><p className="text-base text-black-900 dark:text-white text-center">Laddar …</p></div>;
  if (error) return <p>Ett fel uppstod …</p>;

  return postData?.map((post: any) => (
    <article key={post.id} className="flex flex-col rounded-sm shadow-xl shadow-black-900/5 p-8 bg-white w-full dark:bg-black-800">
      <header className="text-center mb-10">
        <h2 className="font-sans text-title2 text-black-900 dark:text-white">{post.title.rendered}</h2>
      </header>
      <div className="wp-post-content" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      <footer className="mt-auto pt-8">
        <p className="text-sm text-gray-600 dark:text-gray-300">Publicerad {showDate(post.date)}</p>
      </footer>
    </article>
  ));
};

export default InfoPosts;
