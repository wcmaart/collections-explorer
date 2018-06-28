import gql from "graphql-tag";
// todo: can we use this fragment?
// import { ObjectProps } from './objects';

// Todo, can we fix the api so that we can re-use the fragment instead like we could before?
// I think this should be (plural) objects($id: Int!)
export const EventProps = gql `
  fragment EventProps on Event {
    eventId
    eventName
    facultyMember
    subjectAndCourse
    subject
    courseNbr
    institution
    description
    startDate
    startYear
    startMonth
    startDay
    dayOfTheWeek
    eventType
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
    query event($id: Int!) {
      event(id: $id) {
        eventId
        eventName
        facultyMember
        subjectAndCourse
        subject
        courseNbr
        institution
        description
        startDate
        startYear
        startMonth
        startDay
        dayOfTheWeek
        eventType
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
    query events {
      events {
        ...EventProps
      }
    }
    ${EventProps}
  `,
};

export default gqlQueries;
