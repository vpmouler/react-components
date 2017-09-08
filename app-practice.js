// var Banana = () => (
//   <li>Banana</li>
// )

// var Apple = () => (
//   <li>Apple</li>
// )
/*
var GroceryListItem = (props) => (
  // {for (var item of props.items) {
  //   <li>{item}</li>
  // }}
  // what is props?
    <ul>
      <li>{props.items[0]}</li> 
      <li>{props.items[1]}</li>
    </ul>
)*/

//only accespts one parent

class GroceryListItem extends React.component {

  constructor(props) {
    super(props);
  },

  render() {
    return (
      <li>{this.props.item}</li>
    );

  }

}

  // {
  //   props.items.map(item => 
  //     <GroceryListItem item={item} />
  // )}

var GroceryList = (props) => (
  <ul>
    <li>GroceryListItem item={props.items[0]} </li>
  </ul>
);


var App = () => (
  <div>
    <h2>My GROCERY List</h2>
    <GroceryList items={['AppleHi','Banana']}/> 
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));

/*
// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li>{this.props.todo}</li>
    );

  }

}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));


*/