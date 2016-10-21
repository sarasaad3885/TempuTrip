describe("Test the Subscribe element", function () {
    beforeEach(function () {
        ReactDOM.render(React.createElement(Subscribe, {
            text: paragraph,
            disabled: false,
            label: 'Submit'
        }), document.getElementById('submitEmail'));
    });

    afterEach(function (){
        $('#submitEmail').empty();
    });
    
    it("Defaults correctly", function () {
        expect($('#submitEmail p').text()).toEqual(paragraph);
        expect($('#submitEmail button').text()).toEqual('Submit');
        expect($('#submitEmail button').attr('disabled')).not.toBeDefined();
    });

    it("onClick updates elements", function () {
        $('#submitEmail button').click();
        expect($('#submitEmail p').text()).toEqual(thankYou);
        expect($('#submitEmail button').text()).toEqual('Thank You');
        expect($('#submitEmail button').attr('disabled')).toEqual('disabled');
    });
});

var paragraph = "We appreciate your interest.  Please enter your email in the box below, then submit the form, and you will be subscribed to our newsletter.";

var thankYou = "Thank you for registering.  We are excited to send you your first newsletter shortly.";

var Subscribe = React.createClass({
    displayName: "Subscribe",
    onClick: function () {
    	this.setState({
            text: thankYou,
            label: 'Thank You',
            disabled: true
        });
    },
    
    componentWillMount (){
    	this.setState({
            text: this.props.text,
            label: this.props.label,
            disabled: this.props.disabled
        });
    },

		render: function render() {
        return React.createElement("div", null,
        React.createElement("p", null, this.state.text),
        React.createElement("input", {
            id: "email",
            disabled: this.state.disabled
        }),
        React.createElement("button", {
            onClick: this.onClick,
            disabled: this.state.disabled
        }, this.state.label));
    }
});

(function () {
    var env = jasmine.getEnv();
    env.addReporter(new jasmine.HtmlReporter());
    env.execute();
}());
