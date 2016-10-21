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

    expect(main-banner.getDOMNode().textContent)
   .toEqual("A div");
    

  
});
