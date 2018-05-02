# Micah Walter Studio kyt starter kit template builds

This repository provides some starter kit templates extended from the New York Time's open source KYT Project.

To be more specific, it does not fork KYT, but rather it forks KYT's Universal React starter-kyt package. (Please see the KYT documentation for what that means.)

In the future, it may be possible to make these starter kit templates official KYT "packages" so that you could use KTY to initialize one of these templates. But for now, you can simple fork one of the branches from this repo to start your project.

## Different branches for different kits.
  - `kyt-starter-universal`
    - This branch is the initial commit. It is the inial code created by KYT when you select the kyt-starter-universal package option.

  - `master`
    - The master branch is simply the kyt-starter-universal branch, plus some documentation.

  - `generic-materializecss`
    - This branch extends the master branch. And it adds materializecss to the project.

  - `collections-explorer-generic`
    - This branch extends generic-materializecss. And it adds the basic outline of a collections-explorer app.

  - `collections-explorer-apollo`
    - This branch extends collections-explorer-generic. And it adds functionality to use apollo and graqhql.

## So how do I use this?
Say you would like to create a apollo-based collections-explorer, you can fork this repo, and build your master branch off of the collections-explorer-apollo branch.

## Why should I fork instead of copy-paste?
The benefit of forking, is that it will make it easier to pull in changes later. What if in two years, the KYT starter kit updates some important npm dependencies? This repo will stay up to date with those changes. So in the future, your repo could in turn pull the latest changes with git fetch upstream collections-explorer-apollo. And then you would get a simple diff and could decide what to merge into your project.
