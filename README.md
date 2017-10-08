# ES6(ES2015)

> https://standardjs.com/rules-kokr.html 참고
> Browser support: ES5에 비해 떨어지나, ES6 Coding 후 babel을 통해 ES5로 변환하여 출시 가능
> Scope: 선언시 const를 기본으로 사용한다. 변경 가능한 변수는 let을 사용하고, var는 사용하지 않는다(사용 자제)
>        const를 사용하더라도, 배열과 오브젝트의 값을 변경하는 것은 가능하다.(재할당은 가능)
>        immutable array는 list 원형을 유지하되, 필요시 새 변수를 선언하여 concat등으로 할당할 것
>
> String : startsWith, endsWith, includes가 standard로 들어옴
> Array : from, Spread operator(...array)와 일반 할당의 차이 숙지, 활용법 터득 필요ㅣ
> Obejct : 발전된 Getter, Setter, Function return 문법
>

# My First Vue

> Component 단위 Coding : 원칙적으로 한 Component에는 하나의 div 밖에 사용하지 못한다.(복수 div가 가능케 할 수는 있음)
>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
