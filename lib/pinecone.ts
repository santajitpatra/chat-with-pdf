import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;
const environment = process.env.PINECONE_ENVIRONMENT;

if (!apiKey || !environment) {
  throw new Error("Pinecone API key or environment is not defined");
}

const pinecone: any = new Pinecone();
const initializePinecone = async () => {
  try {
    await pinecone.init({
      environment: "gcp-starter",
      apiKey: apiKey,
    });
    console.log("Pinecone initialized successfully");
  } catch (error) {
    console.error("Error initializing Pinecone:", error);
  }
};
const getPineconeIndex = (indexName: any) => {
  return pinecone.Index(indexName);
};
export { initializePinecone, getPineconeIndex };
