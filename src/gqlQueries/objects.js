import gql from "graphql-tag";

const ObjectProps = gql `
  fragment ObjectProps on Object {
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
`;

// Todo, can we fix the api so that we can re-use the fragment instead like we could before?
// I think this should be (plural) objects($id: Int!)
const gqlQueries = {
  byId: gql`
    query object($id: Int!) {
      object(id: $id) {
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
    }
  `,
  // Note this sort_field on "title" is a temp way to get decent data with images
  byPageIdx: gql`
    query objects($page: Int) {
      objects(page: $page, per_page: 40, sort_field: "title", sort: "asc") {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
};

export default gqlQueries;
