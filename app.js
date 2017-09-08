var App = () => (
    <div>
      <GroceryList items={['Apple', 'Cinammon','buut']} />
    </div>
  )


// why have to use .map and not forEach, youre not saving to an array?
// this is the error we get (but it still renders): react-with-addons.js:20747 Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `GroceryList`. See https://fb.me/react-warning-keys for more information.
var GroceryList = (props) => (
    // make our unordered list
    <ul>
      {
        props.items.map(item => 
          <GroceryListItems key={item} item={item} />
          )
      }
    </ul>
  )


// make a class that will render our grocery list items

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
    // this.state.done = !this.state.done;
  } 


  render() {

    // var onListItemClick = (event) => {
    //   console.log(event);
    // };

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    // have to return a JSX bc have {} here
    return (
      <li onClick={this.onListItemClick}> {this.props.item} </li>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));