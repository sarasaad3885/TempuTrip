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
      jasmineReact.render(<FooKlass foo="bar" />, document.getElementById("Select"));

      var renderArgs = React.render.mostRecentCall.args[0];

      expect(renderArgs.props.foo).toBe("bar");
    });

    it("should call React.render with the passed in container", function(){
      var container = document.getElementById("Select");
      jasmineReact.render(<FooKlass />, container);

      expect(React.render).toHaveBeenCalledWith(jasmine.any(Object), container);
    });

    it("should call React.render with #Select container if no container is passed in", function(){
      jasmineReact.render(<FooKlass />);

      expect(React.render).toHaveBeenCalledWith(jasmine.any(Object), document.getElementById("Select"));
    });

    it("should call React.render with a callback if one is passed in", function(){
      var fakeCallbackSpy = jasmine.createSpy("fakeCallback");

      jasmineReact.render(<FooKlass />, document.getElementById("Select"), fakeCallbackSpy);

      expect(React.render).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object), fakeCallbackSpy);
    });

    it("should return the return value of React.render", function(){
      var returnValue = jasmineReact.render(<FooKlass baz="bat" />, document.getElementById("Select"));

      expect(returnValue.props.baz).toBe("bat");
    });

    it("should alias jasmineReact.renderComponent to jasmineReact.render", function(){
      var returnValue = jasmineReact.renderComponent(<FooKlass baz="bat" />, document.getElementById("Select"));

      expect(returnValue.props.baz).toBe("bat");
    });
  });

  describe("render: test pollution", function(){
    it("should not pollute a rendered component from one test into another test", function(){
      var CoolKlass = React.createClass({
        render: function(){
          return React.DOM.div({
            id: "really-cool"
          });
        }
      });

      // lets pretend this is test #1
      jasmineReact.render(<CoolKlass />);

      expect(document.getElementById("really-cool")).toBeDefined();

      // this is the method in the afterEach which is needed to prevent test pollution for render
      jasmineReact.unmountAllRenderedComponents();

      // lets pretend this is test #1
      expect(document.getElementById("really-cool")).toBeNull();
    });
  });

  
