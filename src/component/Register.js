
////////USING FUNCTION CONSTRUCTOR

// import React from 'react';

// const Register = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };


// export default Register;


////////USING CLASS CONSTRUCTOR
import React, { Component } from 'react';
import axios from 'axios';

export default class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onRegister = this.onRegister.bind(this);

    this.state = {
      username: '',
      password: '',
      email: new Email(),
      users: []
    }
  }

//   componentDidMount() {
//     axios.get('http://localhost:5000/register/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

 onChangeEmail(email) {
    this.setState({
      email: email
    })
  }

  onRegister(e) {
    e.preventDefault();

    const register = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    console.log(register);

    axios.post('http://localhost:5000/users/register', register)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Registered User </h3>
      <form onRegister={this.onRegister}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
          {/* <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select> */}
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
        </div>
       
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
          
        </div>

        <div className="form-group">
          <input type="submit" value="Create Register Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}