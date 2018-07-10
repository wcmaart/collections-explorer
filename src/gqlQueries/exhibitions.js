import gql from 'graphql-tag';
// todo: can we use this fragment?
// import { ObjectProps } from './objects';

export const ExhibitionProps = gql `
  fragment ExhibitionProps on Exhibition {
    id
    title
    planningNotes
    beginISODate
    beginDate
    isInHouse
    objects
    curNotes
    endISODate
    endDate
    keyImage {
      status
      original_image_id
      public_id
      version
      signature
      width
      height
      format
    }
  }
`;

// Todo, can we fix the api so that we can re-use the fragment instead like we could before?
// I think this should be (plural) objects($id: Int!)
const gqlQueries = {
  byId: gql`
    query exhibition($id: Int!) {
      exhibition(id: $id, sort_field: "title", sort: "asc") {
        id
        title
        planningNotes
        beginISODate
        beginDate
        isInHouse
        objects {
          id
          title
          maker
          period
          object_name
          medium
          remote {
            status
            original_image_id
            public_id
            version
            signature
            width
            height
            format
          }
        }
        curNotes
        endISODate
        endDate
        keyImage {
          status
          original_image_id
          public_id
          version
          signature
          width
          height
          format
        }
      }
    }
  `,
  byPageIdx: gql`
    query exhibitions($page: Int) {
      exhibitions(page:$page, per_page:40, sort_field: "beginISODate", sort: "asc") {
        ...ExhibitionProps
      }
    }
    ${ExhibitionProps}
  `,
  byKeyword: gql`
    query exhibitions($keyword: String) {
      exhibitions(keyword: $keyword) {
        ...ExhibitionProps
      }
    }
    ${ExhibitionProps}
  `,
  byAlphabetical: gql`
    query exhibitions {
      exhibitions(per_page: 1000, sort_field: "title", sort: "asc") {
        id
        title
      }
    }
  `,
};

export default gqlQueries;
