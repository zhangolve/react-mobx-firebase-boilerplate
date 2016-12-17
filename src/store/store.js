import {todos} from './todos/todos';

const store = {
  todos
};

window.store = store;


//可以自己定义这个window事件 所以在控制台上就可以通过执行 store.todos.add() 这个方法了。
export {store};