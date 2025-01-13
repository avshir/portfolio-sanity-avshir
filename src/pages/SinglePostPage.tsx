import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { sanityClient } from "../sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types.js";
import BlockContent from "@sanity/block-content-to-react";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { Container } from "../components/Container";
import { ContainerMain } from "../components/ContainerMain";
import Button from "../components/Button";
import { ISinglePost } from "../models.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const SinglePostPage = () => {
  const [singlePost, setSinglePost] = useState<ISinglePost | null>(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    sanityClient
      .fetch<ISinglePost[]>(
        `*[slug.current == "${slug}"]{
      title, 
      _id, 
      slug, 
      mainImage{
        asset->{
          _id, 
          url
        },
        alt
      },   
      body,
      "name": author->name,
      "authorImage": author->image
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => {
        console.error(err);
      });
  }, [slug]);

  if (!singlePost) return <div>Loading ...</div>;

  return (
    <ContainerMain className="bg-accent-gray">
      <Container>
        <Button
          onClick={goBack}
          size="md"
          color="outlineNo"
          className="flex items-center gap-1 px-0"
        >
          <MdKeyboardArrowLeft className="size-6" /> Back
        </Button>

        <article className="max-w-5xl mx-auto bg-neutral-50 shadow-2xl rounded">
          <header className="relative h-48 sm:h-80 lg:h-96">
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="absolute w-full h-full object-cover rounded-t"
            />
          </header>
          <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8 lg:py-12">
            <h1 className="text-accent font-accent mb-4">{singlePost.title}</h1>
            <span className="block mx-auto mb-8 w-24 border-b-2 border-gray-600/50"></span>

            <BlockContent
              className="prose-sm md:prose lg:prose-lg"
              blocks={singlePost.body}
              projectId="ccoonwf1"
              dataset="production"
            />
            <div className="flex items-center justify-center gap-4 mt-4">
              <img
                src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="m-0">by {singlePost.name}</p>
            </div>
          </div>
        </article>
      </Container>
    </ContainerMain>
  );
};

export default SinglePostPage;
