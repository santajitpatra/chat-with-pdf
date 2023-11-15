import { PineconeClient } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const client = new PineconeClient();

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: "gcp-starter",
  });

  return client;
};

 
  



// import { Pinecone } from "@pinecone-database/pinecone";

// // Check if environment variables are defined
// const apiKey = process.env.PINECONE_API_KEY;
// const environment = process.env.PINECONE_ENVIRONMENT;

// if (!apiKey || !environment) {
//   throw new Error("Pinecone API key or environment is not defined");
// }

// // Create Pinecone instance
// export const pinecone = new Pinecone({
//   environment: "gcp-starter",
//   apiKey: apiKey,
// });
