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

export const searchQuery = gql`
  query objects {
    objects {
      ...ObjectProps
    }
  }
  ${ObjectProps}
`;

export const searchQueryByIds = gql`
  query objects($ids: [ID!]) {
    objects(ids: $ids) {
      ...ObjectProps
    }
  }
  ${ObjectProps}
`;

export const searchQueryByPaginationIdx = gql`
  query objects($paginationIdx: Int) {
    objects(paginationIdx: $paginationIdx) {
      ...ObjectProps
    }
  }
  ${ObjectProps}
`;
