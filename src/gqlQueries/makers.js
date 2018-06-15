import gql from 'graphql-tag';
import { ObjectProps } from './objects';

const MakerProps = gql `
  fragment MakerProps on Maker {
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

// todo: improve this #apiMakerId
// Todo, can we fix the api so that we can re-use the fragment instead like we could before?
// I think this should be (plural) makers($id: Int!)
const gqlQueries = {
  byId: gql`
    query objects($id: String) {
      objects(maker: $id) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  // Note this sort_field on "id" is a temp way to get decent data with images
  byPageIdx: gql`
    query makers($page: Int) {
      makers(page: $page, per_page: 40, sort: "asc", sort_field: "id") {
        ...MakerProps
      }
    }
    ${MakerProps}
  `,
};

export default gqlQueries;
