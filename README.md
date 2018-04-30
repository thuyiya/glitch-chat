[![GitHub tag](https://img.shields.io/github/tag/thuyiya/glitch-chat.svg?style=flat-square)](https://github.com/thuyiya/glitch-chat/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/thuyiya/glitch-chat.svg?style=flat-square)](https://github.com/thuyiya/glitch-chat/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/thuyiya/glitch-chat/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/thuyiya/glitch-chat.svg?style=flat-square)](https://github.com/thuyiya/glitch-chat/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/thuyiya/glitch-chat.svg?style=flat-square)](https://github.com/thuyiya/glitch-chat/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/thuyiya/glitch-chat.svg?style=flat-square)](https://github.com/thuyiya/glitch-chat/issues-pr)

# glitch Chat

This is example chat that create using [Sample Project](https://github.com/thuyiya/react-native-boilerplate)

![N|Solid](/docs/img/screen_shots.png)

---

## Docs

1. [Features](#third-party-libraries)
1. **Before you start**
   1. [Getting Started with React Native](/docs/react-native.md)
   1. [React Native Quick Tips](/docs/quick-tips.md)
   1. [Code Editor Configaration](#code-editor-configaration)
   1. [Understanding the File Structure](#understanding-the-file-structure)
   1. [Common Components](#common-modules)
   1. [Opinions Guiding this Project](/docs/instruction.md)
1. **Using Template**
   1. [Getting Up and Running with Sample](#getting-started)
   1. [Renaming the App from New](/docs/renaming.md)
   1. [Routing / Navigating](https://reactnavigation.org)
   1. [Using Google Analytics](/docs/google-analytics.md)
   1. [Interacting with the Firebase API](https://firebase.google.com/docs/database/web/start)
   1. [Testing](/docs/testing.md)
1. [Contributing](/docs/poweredBy.png)
1. [Licence](LICENSE)

---

## Third party libraries

| library | Summary |
| --- | --- |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [React Navigation](https://reactnavigation.org) | Routing and navigation for your React Native apps, based on new React Native Navigation API. ['How to' Guide &rarr;](https://reactnavigation.org/docs/getting-started.html)|
| [axios](https://github.com/mzabriskie/axios) | Promise based HTTP client for the browser and node.js | 
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). [Setup Guide &rarr;](/docs/google-analytics.md) |
| [Vector Icons](https://github.com/oblador/react-native-vector-icons) | React Native Vector Icons, Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware) | Redux middleware for resolving and rejecting promises with conditional optimistic updates |
| [Redux Form](http://redux-form.com/6.8.0/) | The best way to manage your form state in Redux | 
| Component Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| Code Linting / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. [Get started with linting for React Native &rarr;](https://medium.com/pvtl/linting-for-react-native-bdbb586ff694) |
| Boilerplate | An example directory/file structure I've found useful for scaling apps Learn more &rarr;](#understanding-the-file-structure) |

---

## Common modules

| Feature | Summary |
| --- | --- |
| Language feature | translate |
| Theme | App theme, color chnages |
| Empty Data Set Image Generator | Add 'No data' images |
| UI Tips  | For help disck for users |

---

## Getting Started

1. Clone the project `https://github.com/thuyiya/glitch-chat.git`
2. Change the name of the project from `app.json`, `package.json` and form `index.js`
3. Delete ios and android folder if its exist in the root of the file by using `rm -rf ios android`
4. Genarate ios and android folder again using `react-native eject`
5. For check run the project in ios or android using run command from the react native Docs

---

For Clear and clean code, we use [EsLint](/project-template/.eslintrc) and Vscode configaration [Editor Configaration](/project-template/.editorconfig)

## Code Editor Configaration

1. Download the [VScode](https://code.visualstudio.com/)
2. Install ESlint Extention for VScode
3. Press CMD + , Then and `"eslint.autoFixOnSave": true,` 


## Understanding the File Structure

```
react-native-template 
│
└───assets
│   │   fonts
│   │   icons
│   
└───constants
│   │   api.js
│   │   Theme.js
│   │   consts.js
│   
└───helpers
│   │   cachedFonts.js
│   │   index.js
│   
└───src
│   │   index.js
│   │   Root.js
│   │ 
│   └───routes
│       │   HomeNavigator.js
│       │   Navigator.js
│       │  
│       commons
│       │   styles
│       │   └───LoadingScreen.js
│       │   index.js
│       │   LoadingScreen.js
│       │   TextInputWithValidations.js
│       │ 
│       redux
│       │   reducer.js
│       │   store.js
│       │ 
│       screens
│          index.js
│          home
│          │  └───components
│          │      │     styles
│          │      │     └───DataList.js
│          │      │     DataList.js
│          │      │
│          │      styles
│          │      │
│          │      HomeScreen.js
│          │      index.js
│          │      
│          addView
│          │  └───components
│          │      │     styles
│          │      │     └───addViewForm.js
│          │      │     addViewForm.js
│          │      │     index.js
│          │      │
│          │      styles
│          │      └───addViewScreen.js
│          │      addViewScreen.js
│          │      index.js
│          │      validations.js
│          │ 
│          Notification
│          │      NotificationScreen.js
│          │      index.js
│          │ 
│          Profile
│          │      ProfileScreen.js
│          │      index.js
│ 
│   .babelrc
│   .eslintrc
│   .editorconfig
│   App.js
│   app.json
│   jsconfig.json
│   package.json
│   README.md   

```
[![N|Solid](https://cldup.com/QHVAB_xBFk.png)](https://cldup.com/QHVAB_xBFk.png  "Powerd by B|Thuyiya")