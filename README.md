# WeTube

Cloning Youtube with VanillaJS and NodeJS

## MVC Pattern (just a structure or pattern)

M : Model - Data
V : View - How does the data look
C : Control - Function that looks for the data

## mixins(pug)

웹사이트에서 자주 반복되는 html 코드

## Pages:

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [x] Upload
- [x] Video Detail
- [x] Edit Video

## EsLint - 오류 체크

$ npm install eslint
$ eslint --init

> To check syntax, find problems, and enforce code style
> Use a popular style guide
> Airbnb: https://github.com/airbnb/javascript

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

\$ npm install eslint-config-prettier // 코딩 스타일 무시
\$ npm install eslint-plugin-prettier
.eslintrc.js -> extends -> "plugin:prettier/recommended" 추가
.eslintrc.js -> rules -> "no-console": "off", "spaced-comment": "off" 추가

\$ npm uninstall eslint -g
-g : global | -D : local
