# Collection Explorer Architecture

Work in progress...

### Search Component Hierachy Architecture
- routes/index
  ```
  Where it all begins...
  Before passing a component to the route, we wrap it
  in a HOC (higher order component) called withSearchRouteHelper.
  ```
  - withSearchRouteHelper
    ```
    This checks route parameters to see if the search url has an id or a pagination index
    ```
    - SearchObjects
      ```
      This mixes in props specific to this category before delegating to the SearchGenericPage
      ```
      - SearchGenericPage
        ```
        Adds a page header
        Implements the SearchGeneric component
        ```
        - SearchGeneric
          ```
          Basic search with a search input, and a set of results deteminted by the search type.
          ```
          - QuerySearchResults
            ```
            Runs the search with an ApolloProvider and a react-apollo Query component
            The Query component returns a child via a function
            with params: ({ loading, error, data }).
            That function returns the SearchResultsWrapper
            ```
            - SearchResultsWrapper
              ```
                Renders search result related components like search filters
                and pagination. Depending on the filter state,
                renders various search views.
                Let's focus on the SearchResults view
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
