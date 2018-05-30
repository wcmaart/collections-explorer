import gql from "graphql-tag";

const ObjectProps = gql `
  fragment ObjectProps on Object {
    id
    title
    medium
    maker
    dimensions
    people
    creditline
  }
`;

const gqlQueries = {
  default: gql`
    query objects {
      objects {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  byIds: gql`
    query objects($ids: [ID!]) {
      objects(ids: $ids) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
  byPaginationIdx: gql`
    query objects($paginationIdx: Int) {
      objects(paginationIdx: $paginationIdx) {
        ...ObjectProps
      }
    }
    ${ObjectProps}
  `,
};

export default gqlQueries;
