var AccountFields = require('login')

var Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	render: function() {
		switch (this.state.step) {
			case 1:
				return <AccountFields />
		}
	}

module.exports = Registration

var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

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
    step : this.state.step + 1
  })
},

// Same as nextStep, but decrementing
previousStep: function() {
  this.setState({
    step : this.state.step - 1
  })
},

render: function() {
  switch (this.state.step) {
    case 1:
      return <AccountFields fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
  }
}

});


ReactDOM.render( < Hello name = " " / > ,
  document.getElementById('container')
);

