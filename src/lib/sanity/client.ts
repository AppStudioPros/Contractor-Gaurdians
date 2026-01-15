import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-19';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Client for fetching draft content (preview mode)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

export function getClient(preview = false) {
  return preview ? previewClient : client;
}
