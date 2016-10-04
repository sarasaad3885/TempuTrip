var Hello = React.createClass({
  render: function() {
    return <div >
      < label > Name < /label>  < input type = "text"
    ref = "name"
    defaultValue = {
      this.props.name
    }
    />

    < label > Password < /label> < input type = "password"
    ref = "password"
    defaultValue = {
      this.props.password
    }
    />

    < label > Email < /label> < input type = "email"
    ref = "email"
    defaultValue = {
      this.props.email
    }
    />

    < button onClick = {
      this.saveAndContinue
    } > Create Account < /button></div >
  },


  saveAndContinue: function(e) {
    e.preventDefault()

    var data = {
      name: this.refs.name.getDOMNode().value,
      password: this.refs.password.getDOMNode().value,
      email: this.refs.email.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  },

  saveValues: function(fields) {
    return function() {
      // Remember, `fieldValues` is set at the top of this file, we are simply appending
      // to and overriding keys in `fieldValues` with the `fields` with Object.assign
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      fieldValues = Object.assign({}, fieldValues, fields)
    }()
  },

  nextStep: function() {
    this.setState({
      step: this.state.step + 1
    })
  },




});

ReactDOM.render( < Hello name = " " / > ,
  document.getElementById('logincontainer')
);
