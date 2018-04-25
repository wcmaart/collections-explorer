import { META_TAGS, META_TAGS_DEFAULT, CANONICAL_DOMAIN } from './constants';

export const getMetaTags = (path) => {
  const tags = META_TAGS[path] || META_TAGS_DEFAULT

  tags.canonical = CANONICAL_DOMAIN + path

  return tags;
}
