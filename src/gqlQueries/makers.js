import gql from "graphql-tag";

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

const gqlQueries = {
  byId: gql`
    query maker($id: Int!) {
      maker(id: $id) {
        ...MakerProps
      }
    }
    ${MakerProps}
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
