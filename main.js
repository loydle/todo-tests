// -- to comment outside node context
const fetch = require('node-fetch');

const {
  log,
} = console;

async function init() {
  const getData = async (urlAsString) => {
    const resp = await fetch(urlAsString);
    return resp.json();
  };

  function Todo(todo) {
    this.title = todo.title;
    this.id = todo.id;
    this.userId = todo.userId;
    this.completed = todo.completed;
  }

  Todo.prototype = {
    isCompleted() {
      return this.completed;
    },
  };

  const getTodos = async (data) => {
    const d = await data;
    return d.map(todo => new Todo(todo));
  };

  const getTodo = async (id, todosArr) => {
    const todos = await todosArr;
    return todos.filter(t => t.id === id)[0];
  };

  const getCompletedTodos = async (todos) => {
    const ts = await todos;
    return ts.filter(t => t.completed === true);
  };
  const getUnCompletedTodos = async (todos) => {
    const ts = await todos;
    return ts.filter(t => t.completed === false);
  };


  // ---------------------------------------------
  // ------------------- LOGIC -------------------
  // ---------------------------------------------

  log('fetching data...');
  const todos = await getTodos(getData('https://jsonplaceholder.typicode.com/todos'));
  log(`${todos.length} entries fetched.`);
  log('-----------------------------------');
  // const completedTodos = todos.filter(t => t.isCompleted() === true);
  // const unCompletedTodos = todos.filter(t => t.isCompleted() === false);

  // log(unCompletedTodos[0]);
  // log(completedTodos[0]);
  return todos;
}

init();
module.exports = init;
