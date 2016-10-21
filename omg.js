describe("jasmine", function(){

  describe("the test", function(){
    it("should have one high level test called'jasmine'", function(){
      expect(window.jasmine).toBeDefined();
    });
  });

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

    it("should call the renderer", function(){
      jasmine.render(Home, document.getElementById("Home"));

      var renderArgs = React.render.mostRecentCall.args[0];

      expect(renderArgs.props.foo).toBe("home");
    });


  });

});
