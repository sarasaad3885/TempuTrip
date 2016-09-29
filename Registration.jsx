var React         = require('react')
var AccountFields = require('./AccountFields')
var SurveyFields  = require('./SurveyFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')

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
			case 2:
				return <SurveyFields />
			case 3:
				return <Confirmation />
			case 4:
				return <Success />
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
    case 2:
      return <SurveyFields fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
    case 3:
      return <Confirmation fieldValues={fieldValues}
                           previousStep={this.previousStep}
                           submitRegistration={this.submitRegistration} />
    case 4:
      return <Success fieldValues={fieldValues} />
  }
}

});


ReactDOM.render( < Hello name = " " / > ,
  document.getElementById('container')
);

