describe("jasmineReact", function(){

  describe("render", function(){
    var Home;

    beforeEach(function(){
      Home = React.createClass({
        render: function(){
          return React.DOM.div({});
        }
      });

      spyOn(React, "render").andCallThrough();
    });

    expect(h1.getDOMNode().textContent)
   .toEqual("A title");
    
    
    it("should call React.render with the passed in component", function(){
      jasmineReact.render(button, document.getElementById("Home"));

      var renderArgs = React.render.mostRecentCall.args[0];

      expect(renderArgs.props.foo).toBe("bar");
    });
});
  
});
