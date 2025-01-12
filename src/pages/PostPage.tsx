import { useState, useEffect } from "react";
import { Link } from "react-router";
import { sanityClient } from "../sanity";

import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";
import { IPost } from "../models";

const PostPage = () => {
  const [postData, setPost] = useState<IPost[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch<IPost[]>(
        `*[_type == "post"]{
      title,
      _id,
      slug, 
      mainImage{
        asset->{
        _id, 
        url}, 
        alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch((err) => {
        console.error();
      });
  }, []);

  return (
    <ContainerMain>
      <Container>
        <h1 className="text-accent font-accent">Blog Posts</h1>
        <p className="text-sm md:text-lg text-center mt-0 md:mt-2">
          Welcome to my page of blog posts!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 md:mt-8">
          {postData &&
            postData.map((post) => (
              <article key={post.slug.current}>
                <Link to={`/post/${post.slug.current}`}>
                  <div className="block h-64 relative rounded shadow-xl leading-snug bg-gray-100 border-l-8 border-accent hover:scale-[1.05] duration-300 ease-in-out">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-2 pb-2">
                      <h3 className="min-w-40 text-sm md:text-md lg:text-lg font-blog px-2 py-1 md:px-4 md:py-2 bg-accent text-accent-gray bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </Container>
    </ContainerMain>
  );
};

export default PostPage;
