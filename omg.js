describe("jasmineReact", function(){

  describe("top level environment", function(){
    it("should define one global object called 'jasmineReact'", function(){
      expect(window.jasmineReact).toBeDefined();
    });
  });

  describe("render", function(){
    var FooKlass;

    beforeEach(function(){
      FooKlass = React.createClass({
        render: function(){
          return React.DOM.div({});
        }
      });

      spyOn(React, "render").andCallThrough();
    });

    it("should call React.render with the passed in component", function(){
      jasmineReact.render(Home, document.getElementById("Home"));

      var renderArgs = React.render.mostRecentCall.args[0];

      expect(renderArgs.props.foo).toBe("bar");
    });

    it("should call React.render with the passed in container", function(){
      var container = document.getElementById("Home");
      jasmineReact.render(Home, container);

      expect(React.render).toHaveBeenCalledWith(jasmine.any(Object), container);
    });


  });

});
