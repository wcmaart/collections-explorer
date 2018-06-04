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

const gqlQueries = {
  byId: gql`
    query object($id: String!) {
      object(id: $id) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  byPageIdx: gql`
    query objects($page: Int) {
      objects(page: $page, per_page: 40) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
};

export default gqlQueries;
