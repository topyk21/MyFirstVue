// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// function letTest () {
//   var list = document.querySelectorAll('li')
//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i].innerHTML + '입니다')
//   }
// }
// letTest()

// function constTest () {
//   // const Test
//   const testVal = 'I \'m const value'
//   console.log(testVal)
//   // const Array Test
//   const testList = ['apple', 'orange', 'watermelon']
//   testList.push('pushValue')
//   console.log(testList)
//   // immutable array
//   const tempList = ['apple', 'orange', 'watermelon']
//   const testList2 = [].concat(tempList, 'pushValue')
//   console.log(tempList, testList2)
// }
// constTest()

// function forLoopTest () {
//   const data = [1, 2, undefined, NaN, null, '']
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i])
//   }
//   data.forEach(function (value) {
//     console.log('value is ', value)
//   })
//   // for(let in)은 객체를 순회하며 모든 object를 탐색하기 때문에 array에서 쓰지 말것
//   for (let idx in data) {
//     console.log(data[idx])
//   }
//   // for(let of)를 쓰면 in의 해당 문제점을 막을수 있다.
//   for (let idx of data) {
//     console.log(data[idx])
//   }
// }
// forLoopTest()

// function sum (x, y, z) {
//   return x + y + z
// }
// function arrayTest () {
//   // spread operator와 일반 할당의 차이 예제
//   let temp = ['apple', 'orange', 100]
//   let newData = [...temp]
//   let newData2 = temp
//   console.log(temp, newData)
//   console.log(temp === newData)
//   console.log(temp === newData2)
//   // 활용법 1
//   let newData3 = [300, 200, ...temp]
//   console.log(newData3)
//   // 활용법 2 - function param 할당
//   let sumData = [100, 200, 300]
//   console.log(sum.apply(null, sumData))
//   console.log(sum(...sumData))
//   //
//   // array from method
//   // argument는 가변적인 para에 유용하지만, 권장 패턴은 아님
//   // from으로 array화 해서 사용
//   let temp2 = []
//   let newData4 = Array.from(arguments)
//   for (let i = 0; i < newData4.length; i++) {
//     temp2.push(newData4[i] + '!')
//   }
//   console.log(temp2)
// }
// arrayTest(0, 1)

// function doPratice1 () {
//   // filter, includes, from을 사용해서 문자열 'e가 포함된
//   // 배열을 만들어서 반환하기
//   //
//   // Array화 해야 내부 데이터에 접근 가능
//   const liList = document.querySelectorAll('a')
//   // from을 통해 node list를 array화
//   let listArray = Array.from(liList)
//   let filteredArray = listArray.filter(filterWordsForDoPratice)
//   console.log(liList)
//   console.log(toString.call(liList))
//   console.log(listArray)
//   console.log(filteredArray)
//
//   return filteredArray
// }
// function filterWordsForDoPratice (value) {
//   return value.text.includes('c')
// }
// doPratice1()

// function createObject () {
//   let name = 'YG Hong'
//   const getName = function () {
//     return name
//   }
//   const setName = function (newName) {
//     name = newName
//   }
//   const printName = function () {
//     console.log(name)
//   }
//
//   return {
//     getName, setName, printName
//   }
// }
// let me = createObject()
// me.printName()
// me.setName('Who am i?')
// me.printName()

function destructArray () {
  let data = ['who', 'am', 'I']
  let [temp1, , temp2] = data
}
destructArray()
