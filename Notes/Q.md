what is React Js ?
=> its basically js library to ui frontend SPA applications ,its created by meta (facebook) 2013,its follow components based architechture

Real DOM vs Virtual DOM

- **Real DOM**:

  - Direct representation of the UI in the browser.
  - Updates are slow because the entire DOM tree may need to be re-rendered.
  - Manipulating the real DOM is costly in terms of performance.

- **Virtual DOM**:

  - Lightweight JavaScript object that represents the UI.
  - React uses the virtual DOM to track changes efficiently.
  - Only the changed parts are updated in the real DOM, improving performance.
  - Faster updates and better user experience.
    Its created the copy of real dom and only update the changeing part not full dom

    => what is JSX ?
    HTML + Javascript, its allow to write html code inside javascript

components same structure same but data diffrent so is called props drilling
event handle by funtion in button
frist you create one button => and create one funtional funtion => and write logic inside funtion => in button add events onClick and add funtion
like that ➡️
<!-- import React from 'react'

const App = () => {
const btnClick=()=>{
alert("Button Clicked")
}
return (
<div>
<h1>Hello, Ayush</h1>
<button onClick={btnClick }>Click to Change</button>
</div>
)
} -->

export default App

➡️➡️HOOKS
special type of funtions
🎯useState=>its manage to stats of code like counter , 0 is state one and click to value is 1 to his state two state will be change is called states ,useing useState.
for changeing element

🎯useEffect=> i am colling any funtion and API so using useEffect ,its working side by side. its working on side stack.
➡️side effect handle karne ke liye (API call, DOM manipulation,event listener)
🎯useRef=>its use to select any DOM element. take the element reference and select element to make changes.
➡️mutable value hold karne ke liye jo re-render trigger na kare, ya dom access karne ke liye.
🎯useContext=>send the data one complonent to other components to using context API with using UseContext. its manage like a common code in all folders. if you make light & dark mode its common in all folder to using useContext.easy to accces and maintain. working on global stats.
➡️global state ko consume karne ke liye without prop drilling.
🎯useReducer=>its manage complex logics, acces to give. like if user login to show couses , buy to show buying courses, localstorage manage.
➡️complex state management ke liye
(Redux jaisa chota version)

🎯useCallback,useMemo=> worked on optimization. its manage the rerenders stops and manage. manage the data optimization.
➡️optimazation ke liye unnecessay re-renders avoid karne ke liye.


2 way binding ✅