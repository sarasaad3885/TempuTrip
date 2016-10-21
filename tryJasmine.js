describe("Test the main banner element", function () {
    beforeEach(function () {
        ReactDOM.render(React.createElement(Subscribe, {
            text: paragraph,
            disabled: false,
            label: 'Submit'
        }), document.getElementById('main-banner'));
    });

    afterEach(function (){
        $('#main-banner').empty();
    });
    
    it("Defaults correctly", function () {
        expect($('#main-banner p').text()).toEqual(paragraph);
        expect($('#main-banner button').text()).toEqual('Submit');
        expect($('#main-banner button').attr('disabled')).not.toBeDefined();
    });
});

var paragraph = "Sorry for inconvenience, but the image is unavailable.";

var thankYou = "Thank you for visiting our webiste.";

var Subscribe = React.createClass({
    displayName: "Subscribe",
    onClick: function () {
    	this.setState({
            text: thankYou,
            label: 'Thank You',
            disabled: true
        });
    },
    console.log("fml");
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
