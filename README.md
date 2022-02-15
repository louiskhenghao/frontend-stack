# NextJs + React Native Web + React Native with NX

## Table of contents

- [Used of Technologies](#used-of-technologies)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Assets](#assets)
- [Translation](#translation)
- [Theme](#theme)
- [GraphQL CodeGen](#graphQL-codeGen)
- [Learn](#learn)
- [About Us](#about-us)

<!-- - [Reusable Components](#reusable-components) -->
<!-- - [Create Reusable Components](#create-reusable-components) -->
<!-- - [Error Boundaries](#error-boundaries) -->
<!-- - [Testing](#testing) -->
<!-- - [Linting](#linting) -->
<!-- - [Deploy](#deploy) -->

---

# Used of Technologies

1.  Build System - `NX`
2.  Coding styles - `TypeScript`
3.  UI styles - `styled-components`
4.  UI Framework - `AntDesign` (cms), `Tailwind` (cms, web, mobile)
5.  Coding Practice - `Eslint` rules for `(.ts, .tsx)`
6.  API Integration - `GraphQL (with codegen)`

---

# Getting Started

1. Install dependencies `yarn`
2. Run development server
3. Start coding

```bash
# to install dependencies
yarn
# or
yarn install
```

Available commands:

CMS/Web Project

```bash
# to start `cms`/`web` development server
$ yarn cms:dev
$ yarn web:dev

# to run `cms`/`web` end to end test
$ yarn cms:e2e
$ yarn web:e2e
```

Mobile

```bash
# to start metro bundler
$ yarn mobile:dev

# to run project in ios simulator
$ yarn mobile:ios

# to run project in android emulator
$ yarn mobile:android

# to build project for e2e testing
$ yarn mobile:e2e:build
$ yarn mobile:e2e:build:ios
$ yarn mobile:e2e:build:android

# to run project e2e testing
$ yarn mobile:e2e:run
$ yarn mobile:e2e:run:ios
$ yarn mobile:e2e:run:android

# to generate apk (do not use this to send to client, for internal use only)
$ yarn mobile:generate-apk

# to generate icon automatically for project (refer mobile/project.json to check or modify the icon path )
$ yarn mobile:generate-icon

# to rename mobile app (name and identifier is a must, identifier will be used for both platform)
$ yarn mobile:rename --name=YOURNAME --identifier=com.xxx.xxx

# to run test for mobile project
$ yarn mobile:test

```

Miscellaneous

```bash

# to generate GraphQL Types, Docs, Hooks, etc
$ yarn generate:graphql

# generate shared ui components (React Native)
$ yarn generate:component [componentName]

# to view theme configuration (tailwind)
$ yarn theme:viewer

# to fix translation locale files
$ yarn locale:fix

# to run prettier
$ yarn format

# to commit
$ yarn cz

# to connect to services such as reactotron, android device remotely
$ yarn adb


# ======== Linting - to run eslint rules check
$ yarn lint:cms
$ yarn lint:web
$ yarn lint:mobile


# ======== Production Build

# execute production build for `cms` / `web` project
$ yarn build:cms
$ yarn build:web

# start production server for `cms` / `web` project
$ yarn run:cms
$ yarn run:web

```

If you wish to install/remove dependencies into projects, you can use command below

```bash
# to install dependencies
# for mobile, after package installed, please modify mobile/package.json example : "mobx": "*"
yarn add <DEPENDENCIES>

# to remove dependencies
yarn remove <DEPENDENCIES>
```

---

## Folder Structure

```
├── apps
│    ├── cms # cms panel
│    ├── mobile # end user mobile application
│    └── web # end user web application
└── libs
    ├── data-access # GraphQL Types, Documents, Hooks, etc
    ├── shared # Translation locale files
    │     ├── assets # Shared assets (images, locales)
    │     └── components # Shared React Native UI Components
    └── ui-theme # theme configuration accross projects
```

---

## Assets

If you have common assets that want to shared across projects & packages, please add assets under folder `libs/shared/assets`. Then you can import your preferred assets with below example

```TypeScript
// In web & cms project
import logo from "frontend-stack/shared/assets/images/logo-brand.png";

<img src={logo.src} />

// In react native project
import { Image } from "react-native";

const logo = require("frontend-stack/shared/assets/images/logo-brand.png");
<Image source={logo} />

```

---

## Translation

This monorepo has come with two language translation by default and translation files are located under folder `libs/shared/assets/src/locales`.
you may refer to the folder structure below & feel free to make changes

You can have multiple locale files (JSON) within a language folder.These files shared among `cms`, `web` & `mobile` projects.

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

**Note**: Please follow the ascending order for the key (A-Z, from top to bottom). You may use `yarn locale:fix` command for the fixes automatically

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

For `mobile` projects, you can refer to the example below

```TypeScript
import { Text, Button } from "react-native";
import { useTranslation } from "i18n"; // <--- always import from "i18n"

export default function SomeComponent() {
  const { t, lang, setLanguage } = useTranslation("common");

  return (
    <>
      <Text>{t("language")}: {t(`language-${lang}`)}</Text>
      <Text>{t("poweredBy")}</Text>
      <Text>{t("some-variable", { message: "Hey" })}</Text>

      {/* Switch Language */}
      <Button onPress={() => setLanguage("en")} title={t("language-en")} />
      <Button onPress={() => setLanguage("cn")} title={t("language-cn")} />
    </>
  );
}
```

If you've noticed, the interface for the translation actually is quite similar for both `react` & `react-native` projects. But there are certains thing you guys have to take note

1. For `react-native` project (mobile) always import from `"i18n"`
2. For `react` projects (web, cms) please refer to [next-translate](https://github.com/vinissimus/next-translate) documentation or example above
3. You can always use `setLanguage` method to switch language, but there is some differences on implementation. Please checkout the example below:

```TypeScript
// in react project (web & cms)
import setLanguage from "next-translate/setLanguage";

const YourComponent = () => {
  const onPressButton = () => {
    setLanguage("en");
  }

  return <button onClick={onPressButton}>ENGLISH</button>
}

// in react-native project (mobile)
import { useTranslation } from "i18n";

const YourComponent = () => {
  const { t, lang, setLanguage } = useTranslation(); // use this hooks within component

  const onPressButton = () => {
    setLanguage("en");
  }

  return <Button onPress={onPressButton} title="ENGLISH" />
}
```

Checkout table below comparison

| Variable/Function        | Description                       | Web & CMS                                                                             | Mobile                                                       |
| ------------------------ | --------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `t` (function)           | A function to get translated text | access via `useTranslation` react hooks (import from `next-translate/useTranslation`) | access via `useTranslation` react hooks (import from `i18n`) |
| `lang` (string)          | Current language                  | Same as above                                                                         | Same as above                                                |
| `setLanguage` (function) | A function for language switching | import from `next-translate/setLanguage`                                              | Same as above                                                |

---

## Theme

This monorepo enabled theme configuration accross packages & projects. There were predefined setting under `libs/ui-theme` folder and below is the folder structure

```
├── src
│   └── index.ts # helper function for get tailwind styles with css name
└── tailwind.config.js # tailwind configuration
```

### Tailwind

For tailwind theme configuration, you may update `tailwind.config.js` under `libs/ui-theme` folder. This configuration will be shared with other project that has enabled tailwind.
If you wish to have advanced configuration, please checkout the [official documentation](https://tailwindcss.com/docs/configuration) for customization.

**Note**:

1. Only put general configuration under `libs/ui-theme/tailwind.config.js` as this configuration shared to ReactNative project as well.
2. If you have configuration specifically for web/cms project, please proceed to project folder. eg: `apps/web/tailwind.config.js`
3. You can always run `yarn theme:viewer` to view theme configuration.

#### Example

To apply tailwind style for `react` or `react-native` project, you can do something like below:

```TypeScript
// in react-native project use `@frontend-stack/ui-theme` for styling
import { View, Text } from "react-native";
import { tw } from "@frontend-stack/ui-theme";

<View style={tw("bg-primary")}>
  <Text>View with primary color background</Text>
</View>

// if you are working on web related project, just do as simple like below
<div className="bg-primary">
  View with primary color background
</div>
```

##### Caveat:

1. Certain css might not supported for `React Native`, please checkout the [repo](https://github.com/jaredh159/tailwind-react-native-classnames) for more information

---

## GraphQL CodeGen

First step is change the schema url to your development server at `./libs/data-access/.codegen.yml`

```yml
schema: 'http://localhost:3000/graphql'
```

Second step find the operations file at `./libs/data-access/src/operations/index.graphql` and modify it, for example

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

Third Step is to generate the GraphQL Types, Documents, Hooks by running the command `yarn generate:graphql`
![GraphQL Codegen](./docs/generate-graphql.gif)

Fourth Step is to import any of Types, Documents, Hooks to your components or the places you wants to use it

```TypeScript
import { useAdminSignInMutation } from '@frontend-stack/data-access';

const ExampleComponent = () => {
  const [signin] = useAdminSignInMutation();

  const onSubmit = ({ email, password }) => {
    signin({
      input: {
        email,
        password
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
      {/* Your view goes here */}
    </form>
  );

}
```

<!-- ---

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
3. note: make sure you commit the code into the git repo. so the next person can just quickly run the command to deploy. -->

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

Check out our company profile [LavaX Technologies Sdn Bhd](https://lavax.co) and welcome to reach out for inquires.
