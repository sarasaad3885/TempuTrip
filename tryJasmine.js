    describe("render", function(){
    var FooKlass;
    console.log("Hit this line");
    beforeEach(function(){
      FooKlass = React.createClass({
        render: function(){
          return React.DOM.div({});
        }
      });

      spyOn(React, "render").andCallThrough();
    });

    it("should call React.render with the passed in component", function(){
      jasmineReact.render(<FooKlass foo="bar" />, document.getElementById("login"));

      var renderArgs = React.render.mostRecentCall.args[0];

      expect(renderArgs.props.foo).toBe("bar");
    });
