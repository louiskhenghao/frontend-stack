```bash




```

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@frontend-stack/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

# Nx - NextJs + React Native Web + React Native

🔎 **Smart, Fast and Extensible Build System**

# Table of contents

- [Used of Technologies](#used-of-technologies)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Assets](#assets)
- [Translation](#translation)
- [Theme](#theme)
- [Reusable Components](#reusable-components)
- [GraphQL CodeGen](#graphQL-codeGen)
- [Deploy](#deploy)
- [Learn](#learn)
- [About Us](#about-us)

---

# Used of Technologies

1.  Monorepo - `yarn workspace`
2.  Coding styles - `TypeScript`
3.  UI styles - `styled-components`
4.  UI Framework - `AntDesign` (cms), `Tailwind` (web, mobile)
5.  Coding Practice - `Eslint` rules for `(.ts, .tsx)`
6.  API Integration - `GraphQL (with codegen)`

---

# Getting Started

1. Install dependencies `yarn install`
2. Run development server
3. Start coding

```bash
# to install dependencies
yarn
# or
yarn install
```

Available commands:

```bash

# to start `cms` development server
$ yarn dev:cms

# to start `web` development server
$ yarn dev:web

```

Mobile

```bash
# to start metro bundler
$ yarn mobile:start

# to run project in ios simulator
$ yarn mobile:ios

# to run project in android emulator
$ yarn mobile:android

# to build project for ios e2e testing
$ yarn mobile:ios-build-e2e

# to run ios e2e testing in emulator
$ yarn mobile:ios-test-e2e

# to build project for android e2e testing
$ yarn mobile:android-build-e2e

# to run android e2e testing in emulator
$ yarn mobile:android-test-e2e

# to generate apk
$ yarn mobile:generate-apk

# to generate icon automatically for project (refer mobile/project.json to check or modify the icon path )
$ yarn mobile:generate-icon

# to rename mobile app (name and identifier is a must, identifier will be used for both platform)
$ yarn mobile:rename --name=YOURNAME --identifier=com.xxx.xxx

# to run test for mobile project
$ yarn mobile:test

# to make sure android to connect to services such as reactotron, android device remotely
$ yarn adb

```

Miscellaneous

```bash
# to view tailwind theme
$ yarn theme:viewer

# to generate graphl Types, Docs, Hooks, etc
$ yarn generate:gql

# generate shared ui components (React Native)
$ yarn generate:component [componentName]

# to run eslint rules check
$ yarn lint

# to fix translation locale files
$ yarn locale:fix

# to run prettier
$ yarn format

# to commit
$ yarn cz


# ======== Production Build

# execute production build for `cms` project
$ yarn build:cms

# execute production build for `web` project
$ yarn build:web

# start production server for `cms` project
$ yarn run:cms

# start production server for `web` project
$ yarn run:web

```

If you wish to install/remove dependencies in projects or packages, you can use command below

```bash
# to install dependencies
yarn workspace <TARGET> add <DEPENDENCIES>

# to remove dependencies
yarn workspace <TARGET> remove <DEPENDENCIES>

# to run specific script for selected packages/projects
yarn workspace <TARGET> run <SCRIPT>


yarn nx
```

---

## Folder Structure

```
├── packages
│   ├── common-assets # Assets files (png, jpeg, json, etc)
│   ├── common-graphql # GraphQL Types, Documents, Hooks, etc
│   ├── common-locale # Translation locale files
│   ├── ui-native # React Native UI Components
│   └── ui-theme # theme configuration accross mobile & web (cms coming soon)
└── projects
    ├── cms # cms panel
    ├── mobile # end user mobile application
    └── web # end user web application

```

---

## Assets

If you have common assets that want to shared across projects & packages, you add added thos file under folder `packages/common-assets`. Then you can import your preferred assets with below example

```TypeScript
// In react project
import logo from "@common/assets/static/logo-brand.png";

<img src={logo} />

// In react native project
import { Image } from "react-native";

const logo = require("@common/assets/static/logo-brand.png");
<Image source={logo} />

```

---

## Translation

Translation locales can be shared among `cms`, `web` & `mobile` projects under `packages/common-locale`. You can have multiple locale files (JSON) within a language folder. This monorepo has come with two languanges by default, you may refer to the folder structure below & feel free to make changes

```
├── cn
│   ├── common.json
│   └── screen.json
└── en
    ├── common.json
    └── screen.json

```

We've provided a basic example below & this is how each JSON file should looks like.

```JSON
{
  "some-variable": "Using a variable {{message}}",
  "title": "Hello world",
}
```

Note: Please follow the ascending order for the key (A-Z, from top to bottom). You may use `yarn locale:fix` command for the fixes automatically

### Example

For `cms` & `web` project, you may refer the example below or checkout out [next-translate](https://github.com/vinissimus/next-translate) for more information.

```TypeScript
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

export default function SomeComponent() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <div>{t("language")}: {t(`language-${lang}`)}</div>
      <div>{t("poweredBy")}</div>
      <div>{t("some-variable", { message: "Hey" })}</div>

      {/* Switch Language */}
      <button onPress={() => setLanguage("en")}>
        {t("language-en")}
      </button>
      <button onPress={() => setLanguage("cn")}>
        {t("language-cn")}
      </button>
    </>
  );
}
```

For `mobile` projects, you can do refer to the example below

```TypeScript
import { Text } from "react-native";
import { Button } from "@ui/native";
import { useTranslation } from "i18n"; // <--- always import from "i18n"

export default function SomeComponent() {
  const { t, lang, setLanguage } = useTranslation("common");

  return (
    <>
      <Text>{t("language")}: {t(`language-${lang}`)}</Text>
      <Text>{t("poweredBy")}</Text>
      <Text>{t("some-variable", { message: "Hey" })}</Text>

      {/* Switch Language */}
      <Button onPress={() => setLanguage("en")}>
        {t("language-en")}
      </Button>
      <Button onPress={() => setLanguage("cn")}>
        {t("language-cn")}
      </Button>
    </>
  );
}
```

If you've noticed, the interface for the translation actually is quite similar for both `react` & `react-native` projects. But there are certains thing you guys have to take note

1. In `react-native` project (mobile) always import from `"i18n"`
2. In `react` projects (web, cms) please can refer to [next-translate](https://github.com/vinissimus/next-translate) documentation or above example
3. You can always use `setLanguage` method to switch language within projects, but there is some differences on implementation. Please checkout the example below:

```TypeScript
// in react project (web & cms)
import setLanguage from "next-translate/setLanguage";

setLanguage("en"); // within component

// in react-native project (mobile)
import { useTranslation } from "i18n";

const { t, lang, setLanguage } = useTranslation(); // within component
setLanguage("en")
```

You can check the table for

| Variable/Function        | Description                       | Web & CMS                                                                             | Mobile                                                       |
| ------------------------ | --------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `t` (function)           | A function to get translated text | access via `useTranslation` react hooks (import from `next-translate/useTranslation`) | access via `useTranslation` react hooks (import from `i18n`) |
| `lang` (string)          | Current language                  | Same as above                                                                         | Same as above                                                |
| `setLanguage` (function) | A function for language switching | import from `next-translate/setLanguage`                                              | Same as above                                                |

---

## Theme

This monorepo enable theme configuration accross packages & projects. There were predefined setting under `packages/ui-theme` folder and below the folder structure

```
├── src
│   ├── config # constant values
│   │   ├── colors
│   │   ├── palette
│   │   └── spacing
│   └── tailwind # helper function for get tailwind styles with css name
├── styles.json # tailwind styles for react native
└── tailwind.config.js # tailwind configuration
```

For minimal usage, just modify constant values for ` colors`, `palatte`, `spacing` under `config` folder and you can access the value by importing the package. For example

```TypeScript
import { colors, palette, spacing } from "@ui/theme";

colors.primary // primary color
palette.black // black color

spacing.scale.sm // xs, sm, md, lg, xl, xxl
spacing.unit // px, rem, em

```

For advanced usage, please refer to upcoming section for Tailwind & Ant Design

### Tailwind

For tailwind theme configuration, you may update the `tailwind.config.js` under `packages/ui-theme` folder. The configuration will be shared accross `mobile` and `web` or other project that enable tailwind.

If you wish to have advanced configuration, please checkout the [official documentation](https://tailwindcss.com/docs/configuration) for customization.

**Note**: You can always run `yarn theme:viewer` to view theme configuration.

#### Example

To apply tailwind style for `react` or `react-native` project, you can do something like below:

```TypeScript
// in react-native project use with `@ui/theme` for styling
import { View } from "react-native";
import { Text } from "@ui/native";
import { tw } from "@ui/theme";

<View style={tw("bg-primary")}>
  <Text>View with primary color background</Text>
</View>

// if you are working on react project, just do as simple like below
<div className="bg-primary">
  View with primary color background
</div>
```

##### Caveat:

1. There are limited css classname supported for `React Native`, you can checkout this [repo](https://github.com/vadimdemedes/tailwind-rn#supported-utilities) for more information
2. Whenever there is updates on `tailwind.config.js`, please remember to run `yarn theme:generate` in order apply changes on `React Native`

### Ant Design

For Ant.Design theme configuration, you may update the `custom.less` under `projects/cms/styles` folder. Please refer to this [reference](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) if you need to overwrite the default styles.

---

## Reusable Components

In this skeleton there were few reusable components that created to be shared accross web & mobile project in purpose. There will be components added to this skeleton from time to time, please stay tuned and at the meantime you may check below section for existing component documentation

1. `Screen` - [documentation](./packages/ui-native/src/components/Screen/README.md)
2. `Button` - [documentation](./packages/ui-native/src/components/Button/README.md)
3. `Text` - [documentation](./packages/ui-native/src/components/Text/README.md)
4. `TextInput` - [documentation](./packages/ui-native/src/components/TextInput/README.md)
5. `LoginView` - [documentation](./packages/ui-native/src/components/Form/LoginView/README.md)

**Note: You may check `@ui/native` (packages/ui-native) packages for more information**

---

## GraphQL CodeGen

First step is change the schema url to your development server at `./packages/common-graphql/.codegen.yml`

```yml
schema: 'http://localhost:3000/graphql'
```

Second step find the operations file at `./packages/common-graphql/src/operations/index.graphql` and modify it, for example

```GraphQL
fragment UserInfo on User {
  id
  email
  firstName
  lastName
  phoneCode
  phoneNumber
  referralCode
}

query getAuthProfile {
  getAuthProfile {
    ...UserInfo
  }
}
```

Third Step is to generate the GraphQL Types, Documents, Hooks by running the command `yarn gql:generate`
![GraphQL Codegen](./docs/gql-generate.gif)

Fourth Step is to import any of Types, Documents, Hooks to your components or the places you wants to use it

```js
// example from src/config/getAuthProfile.ts
import get from 'lodash/get';
import { GetAuthProfileDocument } from '@common/graphql';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export default (
  apolloClient: ApolloClient<NormalizedCacheObject>
): Promise<{ authUser: any }> => {
  return apolloClient
    .query({
      query: GetAuthProfileDocument,
    })
    .then(({ data }) => {
      const authUser = get(data, 'getAuthProfile', null);
      return { authUser };
    })
    .catch(() => {
      // Fail gracefully
      return { authUser: null };
    });
};
```

---

# Deploy

1. Install vercel cli.
2. Authenticate your vercel account (tools@lavax.co)

```bash
# to deploy cms to vercel
yarn deploy:cms

# deploy cms to production
yarn deploy:cms --prod

# or deploy web
yarn deploy:web

# deploy web to production
yarn deploy:web --prod
```

## Setup vercel deployment (first time only)

note: change the `xxx` according to your project folder structure.

1. run `vercel` then setup the project. After that copy the .vercel folder into the respective `projects/xxx` folder.
2. change the 'scripts' in package.json to allow shortcut such as `"deploy:xxx": "cp -rf ./projects/xxx/.vercel ./ && vercel"`.
3. note: make sure you commit the code into the git repo. so the next person can just quickly run the command to deploy.

---

# Learn

### NX

Visit the [Nx Documentation](https://nx.dev) to learn more.

### React Native

A framework for building native apps using React. For more information please checkout [official documentation](https://reactnative.dev/)

### Ant Design

An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises. For more infomation please checkout the [official documentation](https://ant.design/components/overview/).

### Tailwind Css

A utility-first CSS framework for rapid UI development. For more infomation & details please checkout the [official documentation](https://tailwindcss.com/docs).

Oh Wait! There are some awesome references for UI components as well

1. https://tailwindui.com/components
2. https://tailblocks.cc/
3. https://tailwindtemplates.io/
4. https://component.tailwindow.com/
5. https://www.tailwindtoolbox.com/
6. https://tailwindcomponents.com/

### Styled Component

1. Official Docs - https://styled-components.com/
2. Github - https://github.com/styled-components/styled-components

---

# About US

Check out our company profile [LavaX Technologies Sdn Bhd](https://lavax.co), and welcome to reach out for inquires.
