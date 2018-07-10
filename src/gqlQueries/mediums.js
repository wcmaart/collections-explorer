import gql from 'graphql-tag';
import { ObjectProps } from './objects';

const MediumProps = gql`
  fragment MediumProps on Medium {
    id
    title
    count
    images {
      status
      original_image_id
      public_id
      version
      signature
      width
      height
      format
    }
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

// todo: improve this #apiMediumId
// Todo, can we fix the api so that we can re-use the fragment instead like we could before?
// I think this should be (plural) mediums($id: Int!)
const gqlQueries = {
  byId: gql`
    query objects($id: String) {
      objects(medium: $id) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  // Note this sort_field on "id" is a temp way to get decent data with images
  byPageIdx: gql`
    query mediums($page: Int) {
      mediums(page: $page, per_page: 40, sort: "asc", sort_field: "id") {
        ...MediumProps
      }
    }
    ${MediumProps}
  `,
  byAlphabetical: gql`
    query mediums {
      mediums(per_page: 1000, sort_field: "title", sort: "asc") {
        id
        title
      }
    }
  `,
};

export default gqlQueries;
