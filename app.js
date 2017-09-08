var App = () => (
    <div>
      <GroceryList items={['Apple', 'Cinammon']} />
    </div>
  )

var GroceryList = (props) => (
    // make our unordered list
    <ul>
      <GroceryListItems item={props.items[0]} />
      <GroceryListItems item={props.items[1]} />
    </ul>
  )


// make a class that will render our grocery list items

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // have to return a JSX bc have {} here
    return (
      <li> {this.props.item} </li>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));