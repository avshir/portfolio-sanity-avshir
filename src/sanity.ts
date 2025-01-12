import { createClient, SanityClient } from "@sanity/client";

interface SanityConfig {
  projectId: string;
  dataset: string;
  useCdn: boolean;
  apiVersion: string;
  token?: string; // Необязательно, если вы не планируете обновлять контент
}

const sanityConfig: SanityConfig = {
  projectId: "ccoonwf1",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
};

export const sanityClient: SanityClient = createClient(sanityConfig);
// const data = await client.fetch(`count(*)`);
// console.log(`Number of documents: ${data}`);

// // uses GROQ to query content: https://www.sanity.io/docs/groq
// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "post"]')
//   return posts
// }

