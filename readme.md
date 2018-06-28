# WCMA Collections Explorer

A collections explorer for WCMA

### Dependencies
Ensure [Node](https://nodejs.org/en/download/) is installed.

Ensure [Yarn](https://yarnpkg.com/lang/en/docs/install) is installed.

Note: npm can be used instead of yarn if you prefer.

### Setup private environment values
Copy `.env.example` to `.env` and replace values as appropriate.

### Server Scripts

#### Development
`yarn dev`

#### Production
`yarn build && yarn start`

#### Tests
`yarn test`

#### More...
See `package.json` scripts for more helpful tools. Please also refer to the [NYTimes/kyt project repo](https://github.com/NYTimes/kyt) for more details about the server configuration toolkit used for this app.

### App Component Architecture
The [readme-architecture doc](./readme-architecture.md) gives a quick outline of the nested react components used for the search pages.
