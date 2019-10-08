import React from 'react'
import { connect } from 'react-redux'
import { loggingStart } from '../actions'

class Login extends React.Component {
  state = {
    credentials: { username: '', password: '' }
  }

  handleLogin = event => {
    event.preventDefault()
    this.props
      .loggingStart(this.state.credentials)
      .then(() => this.props.history.push('/friends'))
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <input type='hidden' value='hidden' />
        <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          placeholder='Usename'
          autoComplete='off'
        />{' '}
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />{' '}
        <br />
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default connect(
  null,
  { loggingStart }
)(Login)
