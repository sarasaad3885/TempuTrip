/**
 * Created by sarab on 10/3/2016.
 */
var TodoList = React.createClass({
    render: function () {
        var _this = this; //In the subcomponent, "this" will refer to window, so need to save "this" here
        var createItem = function (item, key) {
            return (<div key={key}><input type="text" onChange={_this.props.onChange.bind(null, item['.key'])}
            value={item.text}/>
            <button onClick={_this.props.removeItem.bind(null, item['.key'])}>&#x2716;</button>
            </div>);
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
var TodoApp = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function () {
        return {items: []};
    },
    componentWillMount: function () {
        this.fireRef = firebase.database().ref('todos');

        this.bindAsArray(this.fireRef, "items");
    },
    onChange: function (fireKey, event) {
        this.fireRef.child(fireKey).set({"text": event.target.value});
    },
    removeItem: function (key) {
        this.fireRef.child(key).remove();
    },

    handleAdd: function (e) {
        //this.fireRef.push({"text": ""});
        e.preventDefault(); // This is, by default, submit button by form. Make sure it isn't submitted.
        var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function () {
        return (
            <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} removeItem={this.removeItem} onChange={this.onChange}/>
        <button onClick={this.handleAdd}>New</button>
        </div>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('container_todo'));


