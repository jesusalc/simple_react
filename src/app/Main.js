import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { orange500, blue500 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
}

class Layout extends React.Component {
  render() {
    return <div className="overlay">
      <div className="box">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
      <footer>By signing up, you are agreeing to our
                <a href="/terms"> Terms of Service </a>
        and to our
                <a href="/privacy"> Privacy Policy </a>
      </footer>
    </div>
  }
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      remmber: true,
      email: "" 
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    console.log(this.state)
    // here sent state to the server by the XMLHttpRequest or By Fetch
    
  }
  render() {
    return <form onSubmit={this.onSubmit} >

      <input 
        type="text" 
        name="email" 
        value={this.state.email} 
        onChange={this.onChange} />

      <p value={this.state.email} 
         onChange={this.onChange} >
      </p>

      <RaisedButton label="Login" type="submit" primary style={style} />
    </form>

  }
}


ReactDOM.render(<MuiThemeProvider>
  <Layout title="Login" >
    <Login></Login>
  </Layout>
</MuiThemeProvider>, document.getElementById('app'))