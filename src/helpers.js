import { META_TAGS, META_TAGS_DEFAULT, CANONICAL_DOMAIN } from './constants';

const parseImage = (imgData) => {
  if (!imgData || !imgData.version) {
    return null;
  }

  return `http://res.cloudinary.com/wcma/image/upload/v${imgData.version}/${imgData.public_id}.${imgData.format}`;
};

export const getMetaTags = path => {
  const tags = META_TAGS[path] || META_TAGS_DEFAULT;

  tags.canonical = CANONICAL_DOMAIN + path;

  return tags;
};

export const getGlobalAppData = () => {
  // if we're already in the browser, we don't have access to the process.env values
  // but, the server/index.js uses this same helper function to populate the global
  // window.APP_DATA with these values. So we can access them here.
  if (typeof window !== 'undefined') {
    return window.APP_DATA;
  }

  // otherwise, we're on the server.
  // Set them here and they'll get passed to the front end from server/index.js
  return {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    GRAPHQL_TOKEN: process.env.GRAPHQL_TOKEN,
  };
};

export const parseObjectProps = (props) => {
  const imgData = props.remote;

  if (!imgData) {
    return props;
  }

  return Object.assign({}, props, {
    imageUrl: parseImage(imgData),
  });
};

export const parseMakerProps = (props) => {
  const imgData = props.keyImage || null;

  return Object.assign({}, props, {
    imageUrl: parseImage(imgData),
    id: props.title,
  });
};

export const parseExhibitionProps = (props) => {
  // todo: improve this #apiExhibitionId
  // we're not getting any image data yet for the exhibitions (plural) search
  const imgData = props.keyImage || props.objects && props.objects[0] && props.objects[0].remote || null;

  return Object.assign({}, props, {
    imageUrl: parseImage(imgData),
  });
};

export const getNormalizedDataResponse = (data) => {
  // todo: see if we can change the API to make these uniform so we don't need this.
  const {
   object,
   objects,
   maker,
   makers,
   medium,
   mediums,
   exhibition,
   exhibitions,
  } = data;

  const singleResult = object || maker || medium || exhibition;
  const manyResults = objects || makers || mediums || exhibitions;

  if (singleResult) {
    return [singleResult];
  } else if (manyResults) {
    return manyResults;
  } else {
    return [];
  }
};
