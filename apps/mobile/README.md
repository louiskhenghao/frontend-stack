# Mobile Boilerplate

This is the boilerplate that inpired by [Infinite Red](https://infinite.red)

Refer to their [Github](https://github.com/infinitered/ignite) for more information

Included out of the box:

- React Native
- React Navigation 6
- MobX-State-Tree
- MobX-React-Lite
- TypeScript
- AsyncStorage (integrated with MST for restoring state)
- apisauce (to talk to REST servers)
- Flipper-ready
- Reactotron-ready (and pre-integrated with MST)
- Fastlane-ready (management cert and deployment)
- Tailwind
- React Native Vector Icons
- React Native SVG
- HMS supported
- ... More to come

## Quick Start

The main folder structure will look like this:

```
├── app
│   ├── components
│   ├── i18n
│   ├── config
│   ├── utils
│   ├── models
│   ├── navigators
│   ├── containers
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── storybook
│   ├── views
│   ├── index.ts
│   ├── storybook-registry.ts
│   ├── storybook.ts
│   ├── toggle-storybook.tsx
├── test
│   ├── __snapshots__
│   ├── storyshots.test.ts.snap
│   ├── all the mock file, exp: mock-async-storage, mock-fetch...
│   ├── setup.ts
│   ├── storyshots.test.ts

```

### ./app directory

Included in an boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

**components**

This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**i18n**

This is where your translations will live if you are using `react-native-i18n`. The translation files all came from libs/shared/assets/src/locales.

**models**

This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**

This is where your `react-navigation` navigators will live.

**containers**

This is where your smart components will live. However, it should only be used for things that are truely shared across your application. If not it will just live in screens.

**screens**

This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files. It will have combinations of containers and components.

**services**

Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**

Here lives the theme for your application, including font and typography. Some other theme configs will came from libs/ui-theme.

**utils**

This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx**

This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./ignite directory

--- wip ----

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find generators, plugins and examples to help you get started with React Native.

### ./storybook directory

This is where your stories will be registered and where the Storybook configs will live.

### ./test directory

This directory will hold your Jest configs and mocks, as well as your [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) test file. This is a file that contains the snapshots of all your component storybooks.

## Running Storybook

--- wip ----

## Running e2e tests

Following NX monorepo standard, the e2e test for mobile will be at another folder named mobile-e2e. Please refer to the README at root for command to run.

## Fastlane Setup

We had prepared the fastlane setup for you already. You only need to modify:

**Android**

1. JSON key path and file name in apps/mobile/android/fastlane/Appfile

**IOS**

1. [itc_team_id](https://developer.apple.com/forums/thread/77563) and [team_id](https://stackoverflow.com/questions/42960644/how-to-get-itunes-connect-team-id-and-team-name) in apps/mobile/android/fastlane/Appfile
2. git_url in apps/mobile/android/fastlane/Matchfile, please refer to Notion for fastlane match command for IOS cert management

p.s. Please note that fastlane is setup using dev@lavax.co. Don't modify it.

## Checklist to do after cloning

[ ] Rename your app by running rename command at root (please include bundle id)

[ ] Clean necessary folder/file after rename

[ ] Replace your app icon (logo.png) at libs/shared/assets/src/images

[ ] Run generate icon command at root

[ ] Update the fastlane config

[ ] Test run the automated testing (jest and detox)
