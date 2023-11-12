import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import './PostStyles.css'

const InfoPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {categories: {nodes: {elemMatch: {slug: {eq: "information"}}}}}
      ) {
        edges {
          node {
            id
            content
            title
            author {
              node {
                firstName
                lastName
                name
              }
            }
          }
        }
      }
    }
  `);

  if (!data) return <p>Ingen data hittad!</p>;
  const postData = data.allWpPost.edges;

  return postData.map((post: any) => (
    <article key={post.node.id} className="flex flex-col rounded-sm shadow-xl shadow-black-900/5 p-8 bg-white w-full dark:bg-black-800">
      <header className="text-center mb-10">
        <h2 className="font-sans text-title2 text-black-900 dark:text-white">{post.node.title}</h2>
      </header>
      <div className="wp-post-content" dangerouslySetInnerHTML={{__html: post.node.content}} />
      <footer className="mt-auto pt-8">
        <p className="text-sm text-gray-600">Publicerad av {post.node.author.node.firstName} {post.node.author.node.lastName}</p>
      </footer>
    </article>
  ));
};

export default InfoPosts;
