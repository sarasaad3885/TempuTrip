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
    it("should be an object", function () {
        console.log("inside it()");
    });

    });
