import React from 'react'
class App extends React.Component {
  state = {
    name: "Armen",
    books: ["JS", "React/Angular", "Vue", "Node"]
  }
  updateName() {
    this.setState(current => {
      current.name = "Tigran"
      return current
    })
  }
  removeLast() {
    this.setState(curr => {
      curr.books.pop()
      return curr
    })
  }
  render() {
    return <div>
      <h1>Hello, my name is {this.state.name}</h1>
      <p>These are the titles of my books</p>
      <ul>
        {
          this.state.books.map((elm, index) => {
            return <li key={index}> {elm} </li>
          })
        }
      </ul>
      <button onClick={() => this.updateName()}>
        change name
      </button>
      <button onClick={() => this.removeLast()}>
        remove last
      </button>
    </div>
  }
}
export default App