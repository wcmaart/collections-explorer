import { META_TAGS, META_TAGS_DEFAULT, CANONICAL_DOMAIN } from './constants';

export const getMetaTags = (path) => {
  const tags = META_TAGS[path] || META_TAGS_DEFAULT

  tags.canonical = CANONICAL_DOMAIN + path

  return tags;
}

export const getGlobalConstants = () => {
  // if we're already in the browser, we don't have access to the process.env values
  // but, the server/index.js uses this same helper function to populate the global
  // window.__APP_DATA__ with these values. So we can access them here.
  if (typeof window !== 'undefined') {
    return window.__APP_DATA__;
  }

  // otherwise, we're on the server.
  return {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  }
}
