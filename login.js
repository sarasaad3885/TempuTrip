var React = require('react')

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
    } > Save and Continue < /button></div >
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
  }
  
 });

 
module.exports = AccountFields

ReactDOM.render( < Hello name = " " / > ,
  document.getElementById('container')
);
