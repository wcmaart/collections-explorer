import gql from "graphql-tag";

// todo: improve this #apiMakerId
// After we fix ^ we shouldn't need to export this
export const ObjectProps = gql `
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
  byMedium: gql`
    query objects($medium: String) {
      objects(medium: $medium) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  byTitle: gql`
    query objects($title: String) {
      objects(title: $title) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  byAlphabetical: gql`
    query objects {
      objects(per_page: 1000, sort_field: "title", sort: "asc") {
        id
        title
      }
    }
  `,
};

export default gqlQueries;
