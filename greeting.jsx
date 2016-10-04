var Hello = React.createClass({
  render: function() {
    return <div>Welcome {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="Dr. LaToza!" />,
  document.getElementById('container')
);
