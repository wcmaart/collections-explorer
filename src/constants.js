export const CANONICAL_DOMAIN = 'https://mydomain.com';

export const META_TAGS = {
  '/': {
    title: 'home',
  },
  '/objects': {
    title: 'search objects',
  },
  '/explore': {
    title: 'Search by Type',
  },
};

export const NAV_LINKS = [
  {
    content: 'Objects',
    url: '/objects',
  },
  {
    content: 'Makers',
    url: '/makers',
  },
  {
    content: 'Periods',
    url: '/periods',
  },
  {
    content: 'Materials',
    url: '/materials',
  },
  {
    content: 'Colors',
    url: '/colors',
  },
  {
    content: 'Events',
    url: '/events',
  },
];

export const SEARCH_TABS = [
  {
    content: 'Top Results',
    key: 'topResults',
  },
  {
    content: 'By Medium',
    key: 'byMedium',
  },
  {
    content: 'A-Z',
    key: 'byAlphabetical',
  },
];

export const OBJECT_MEDIUMS = [
  {
    content: 'Prints',
    key: 'prints',
  },
  {
    content: 'Photographs',
    key: 'photographs',
  },
  {
    content: 'Drawings',
    key: 'drawings',
  },
  {
    content: 'Paintings',
    key: 'paintings',
  },
];

export const META_TAGS_DEFAULT = {
  title: 'default title',
};

export const ALPHABET = [
  'A','B','C','D','E','F','G','H',
  'I','J','K','L','M','N','O','P',
  'Q','R','S','T','U','V','W','X',
  'Y','Z'
];

export const SEARCH_OBJECTS_CONSTS = {
  searchCategory: 'objects',
  slugPrefix: '/objects',
  searchInputPlaceholder: 'Search All Objects',
};

export const SEARCH_MAKERS_CONSTS = {
  searchCategory: 'makers',
  slugPrefix: '/makers',
  searchInputPlaceholder: 'Search Makers',
};

export const SEARCH_EVENTS_CONSTS = {
  searchCategory: 'events',
  slugPrefix: '/events',
  searchInputPlaceholder: 'Search Events',
};

export const FAKE_MAKER_BIO = `
This is a temporary placeholder bio for makers...\n
Pablo Picasso (October 25, 1881 to April 8, 1973) was a Spanish expatriate painter, sculptor, printmaker, ceramicist and stage designer considered one of the greatest and most influential artists of the 20th century and the co-creator, along with Georges Braque, of Cubism. Considered radical in his work, Picasso continues to garner reverence for his technical mastery, visionary creativity and profound empathy. Together, these qualities have distinguished the "disquieting" Spaniard with the "sombrepiercing" eyes as a revolutionary artist. For nearly 80 of his 91 years, Picasso devoted himself to an artistic production that he superstitiously believed would keep him alive, contributing significantly to — and paralleling the entire development of — modern art in the 20th century.
`;
