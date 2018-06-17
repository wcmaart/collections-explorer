import gql from "graphql-tag";
import {SEARCH_ITEMS_PER_PAGE} from '../constants';
// todo: can we use this fragment?
// import { ObjectProps } from './objects';

// Todo, can we fix the api so that we can re-use the fragment instead like we could before?
// I think this should be (plural) objects($id: Int!)
const gqlQueries = {
  byId: gql`
    query event($id: Int!) {
      event(id: $id, sort_field: "title", sort: "asc") {
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
    query events($page: Int) {
      events(page:$page, per_page:40, sort_field: "beginISODate", sort: "asc") {
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
    }
  `,
};

export default gqlQueries;
