# Before coding

---

## Run project

-   **Working directory**

```
/mojProfesor/frontend
```

-   **Install dependencies**

```
npm i
npm install

```

-   **Run project**

```
npm start
yarn start
```

-   **Create production build**

```
npm run build
yarn run build
```

-   **Lint**

```
npm run lint
yarn run lint

npm run lint -- --fix
yarn run lint --fix
```

-   **Test**

```
npm run test
yarn run test
```

## Libraries

-   **Antd**
-   **styled-components**
-   **node-sass**
-   **Axios**
-   Eslint
-   Prettier
-   ...

## Prettier

Create folder **.vscode** inside **frontend** folder.
Inside **.vscode** create **settings.json**.

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false
}

```

###### Warning

This custom settngs will only work when **frontend** folder is a root folder

## Eslint

Eslint will seek to enforce good coding practices. To make it easier:

-   Try to code better
-   Run `npm run lint` to detect errors and warnings
-   Run `npm run lint -- --fix` to fix errors and warning
-   Install the vscode eslint plugin. The plugin will highlight errors. A blue light bulb may appear and when you press it, you will be able to repair the highlighted code snippet

## Project structure

```
- /src

- - /assets
- - - /img
- - - /scss
- - - /css
- - - /fonts

- - /views
- - /hooks
- - /dal

- - /utils
- - - /constants

- - /components
- - - /common
- - - /feature1
- - - /feature2
```

## Env variables

In our project we will use two types of **.env** files.

1. **.env.development** (Used during development)
2. **.env.production** (Injected during building)

In order to create these files run

```
cp .env.development.dist .env.development
cp .env.production.dist .env.production
```

**dist** files contain **.env** skeleton without vulnerable data

**_Warning_**
Make sure that **.env.development** and **.env.production** are included in your **.gitignore** file. Do not push those file to remote repository

3. Env variables names should start with **REACT*APP***
   for example **_REACT_APP_SECRET_KEY_**

## Do's

-   Install packages only using **npm** ~~yarn install~~ ~~yarn add~~
-   You can run project using yarn
-   Make sure your code is error free before creating a pull request

## Don'ts

-   Do not use npm run eject

## Branch naming convention

1. All github contain #xx id. For ex. #5
2. For features **feature-#id** **_(for ex. feature-3)_**
3. For bugs **fix-#id** **_(for ex. fix-3)_**

## Pull request convention

1. Pull request name **(Fix/ Feature)-#numer short_description**
2. In pull request body include some screenshots documenting the changes
3. Make share that in options you linked issue
4. Remember to assing reviewer
5. **Do not** merge your pull request by yourself

#### FAQ (for new coders)

> Difference between dependencies and devDependencies

Dev dependencies are not included in production build

##### This will file will be
