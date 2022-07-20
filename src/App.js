import React from 'react'
import './App.css'
class App extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch("https://randomuser.me/api?results=20&inc=name,picture,dob")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data.results })
      })
  }
  remove(index) {
    this.setState(curr => {
      curr.users.splice(index, 1)
      return curr
    })
  }
  render() {
    const { users } = this.state
    return <div>
      <h3>Now we have {users.length} users</h3>
      <div id="users">
        {
          users.map((elm, index) => {
            return <div>
              <img src={elm.picture.large} />
              <h5>{elm.name.first} {elm.name.last}</h5>
              <p>{elm.dob.age} years old!</p>
              <button onClick={() => this.remove(index)}>Delete</button>
            </div>
          })
        }
      </div>
    </div >
  }
}
export default App