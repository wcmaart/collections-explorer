# Micah Walter Studio kyt starter kit template builds

This repository provides some starter kit templates extended from the New York Time's open source KYT Project. Please see the [master branch](https://github.com/micahwalterstudio/kyt-starter-kit-builds) for details.

## KYT package: Apollo/graphQL based Art Collections Explorer
This `collections-explorer-apollo` branch provides a kyt starter kit template to build your own Art Collections Explorer using materializeCss and Apollo/graphQL.

##### So how do I use this?
You can fork this repo and build your master branch off of this `collections-explorer-apollo` branch.

##### Why should I fork instead of copy-paste?
The benefit of forking, is that it will make it easier to pull in changes later. What if in two years, the KYT starter kit updates some important npm dependencies? This repo will stay up to date with those changes. So in the future, your repo could in turn pull the latest changes with git fetch upstream collections-explorer-apollo. This would give you a simple diff which you could merge into your project as desired.


## Developer Setup
Fork or clone this repo and build your master branch off of this `collections-explorer-apollo` branch.


### Setup

##### Dependencies
Ensure [Node](https://nodejs.org/en/download/) is installed.

Ensure [Yarn](https://yarnpkg.com/lang/en/docs/install) is installed.

Note: npm can be used instead of yarn if you prefer.

Copy `.env.example` to `.env` and replace values as appropriate.

##### Development
`yarn dev`

##### Production
`yarn build && yarn start`

##### Tests
`yarn test`

##### More
See `package.json` for more scripts. Please also refer to the [NYTimes/kyt project repo](https://github.com/NYTimes/kyt) for more details about this server setup.

