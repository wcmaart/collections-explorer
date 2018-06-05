import gql from "graphql-tag";

const MakerProps = gql `
  fragment MakerProps on Maker {
    id
    title
    count
  }
`;

const gqlQueries = {
  byId: gql`
    query maker($id: Int!) {
      maker(id: $id) {
        ...MakerProps
      }
    }
    ${MakerProps}
  `,
  byPageIdx: gql`
    query makers($page: Int) {
      makers(page: $page, per_page: 40) {
        ...MakerProps
      }
    }
    ${MakerProps}
  `,
};

export default gqlQueries;
