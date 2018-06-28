# Collection Explorer Architecture

Work in progress...

This outlines the hierarchy of nested react components used for the search pages.
We will use the "/objects" set of routes for this example. Other search routes use a similar architecture.

### Search Component Architecture

- routes/index
  ```
  The router kicks things off matching a route like "/objects/".
  Before passing a component to the route, we wrap it
  in a HOC (higher order component) called withSearchRouteHelper.
  ```
  - withSearchRouteHelper
    ```
    This checks route parameters to parse information such as whether the search url has an id or a pagination index
    ```
    - SearchObjects
      ```
      This mixes in props and the gqlQueries specific to this category before delegating to the SearchGenericPage
      ```
      - SearchGenericPage
        ```
        Templates the basic html page structure including a page header.
        Implements the SearchGeneric component
        ```
        - SearchGeneric
          ```
          Basic search with a search input, and a set of results deteminted by the search type.
          ```
          - QuerySearchResults
            ```
            Runs the search with an ApolloProvider and a react-apollo Query component
            The Query component returns a child which is a closure function
            passing the following params: ({ loading, error, data }).
            This function returns the SearchResultsWrapper.
            ```
            - SearchResultsWrapper
              ```
                Adds the pagination UI as appropriate, and renders the SearchResults View.
              ```
              - SearchResults
                ```
                This checks props.searchCategory to determine which category's
                 "card" to show. For example, if searchCategory === 'objects',
                 it will show the ArtObjectCard.
                ```
                - ArtObjectCard
                  ```
                  The rendered markup for each search result
                  ```
