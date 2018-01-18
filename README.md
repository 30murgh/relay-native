# Relay Native

Relay Native is a project template (aka boilerplate) for create mobile apps with:
* [**React Native**][react-native] framework for building native apps with React.
* [**Expo**][expo] library for better development experience.
* [**Relay**][relay] framework for using GraphQL with React.
* [**TypeScript**][typescript] language for type checking and better code quality.
* [**React Navigation**][react-navigation] library for navigation.
* [**NativeBase**][native-base] for using ready to use generic components of React Native
* [**Jest**][jest] for testing.
* [**TSLint**][tslint], [**ESLint**][eslint] and [**Prettier**][prettier] for checking TypeScript and JavaScript readability, maintainability, and functionality errors.

It also contains these features:
* **Absolute Imports** which is very useful and easier to quickly understand where the import is coming from. For more information checkout [this][absolute-import-article] article.
* **JWT Authentication** for those who wants to see example implementation of join and login mutations with [JWT][jwt].
* **Drawer with Tabbar** for those who wants to see example implementation of tabbar inside drawer with react-navigation and NativeBase together.

This project was bootstrapped with [Create React Native App][crna]. In order to see most recent CRNA readme visit [here][crna-readme].

## Table of Contents

* [Directory Layout](#directory-layout)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running](#running)
  * [with expo](#with-expo)
  * [without expo](#without-expo)
* [Testing and Formatting](#testing-and-formatting)
* [License](#license)

## Directory Layout
```bash
├── node_modules/                  # 3rd-party libraries and utilities
├── coverage/                      # Coverage reports
├── data/                          # Data files such as schema.json that use for graphql
├── modules/                       # Extra declaring for typescript modules
├── src/                           # Application source code
│   ├── components/                # Shared React components + Pages
│   ├── mutations/                 # Relay Mutations
│   ├── navigators/                # Navigators for pages
│   ├── tests/                     # Jest test files
│   ├── App.tsx                    # Root component
│   ├── constants.tsx              # Constants variables of project
│   ├── env.json                   # Environment variables
│   ├── package.json               # Deaclearing package name for absolute path imports
│   └── relay-environment.js       # Relay Modern client
├── package.json                   # The list of project dependencies + NPM scripts
└── App.js                         # <== Application entry point (main) <===
```

## Prerequisites
* [Node Version Manager][nvm] (preferred)
* [Node.js][node] v9.3.0 or higher (preferred installing it with `nvm install node`)
* [Yarn][yarn] v1.3.2 or higher (preferred installing it with `nvm install node`)
* [WebStorm][webstorm] editor (preferred) or [VS Code][vsc]

## Installation
- `npm install -g create-react-native-app`
- `git clone git@github.com:30murgh/relay-native.git`
- `cd relay-native`
- `yarn install`
- `cp src/env.sample.json src/env.json`

## Running
You can run the app with expo or without it.

Before anything run `yarn run relay`

#### with expo
First run `yarn start`

Then scan QR code with your installed expo app.

#### without expo
Plug in your device or make sure you have emulator installed.

For running IOS use `yarn run ios`

For running Android use `yarn run android`

## Testing and Formatting
Relay Native use jest for testing and use tslint, eslint and prettier for linting and formatting. Tests also written in typescript.

In order to test application use on of these commands:
- `yarn test`
- `yarn run coverage`

In order to check project code style run `yarn run lint`

## License
Copyright © 2018-present 30murgh Community. This source code is licensed under the MIT license found in the LICENSE file.


[react-native]: https://github.com/facebook/react-native
[expo]: https://github.com/expo/expo
[relay]: https://github.com/facebook/relay
[typescript]: https://github.com/Microsoft/TypeScript
[react-navigation]: https://github.com/react-navigation/react-navigation
[native-base]: https://github.com/GeekyAnts/NativeBase
[jest]: https://github.com/facebook/jest
[tslint]: https://github.com/palantir/tslint
[eslint]: https://github.com/eslint/eslint
[prettier]: https://github.com/prettier/prettier
[absolute-import-article]: https://medium.com/@davidjwoody/how-to-use-absolute-paths-in-react-native-6b06ae3f65d1
[jwt]: https://jwt.io
[crna]: https://github.com/react-community/create-react-native-app
[crna-readme]: https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md
[nvm]: https://github.com/creationix/nvm
[node]: https://github.com/nodejs/node
[yarn]: https://github.com/yarnpkg/yarn
[webstorm]: https://www.jetbrains.com/webstorm
[vsc]: https://code.visualstudio.com
