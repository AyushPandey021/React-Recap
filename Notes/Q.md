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