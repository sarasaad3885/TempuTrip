describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});


describe('MyComponent', function() {
  
 
  var Utils = React.addons.TestUtils;

  it('can render without error', function() {
    var component, element;
    // First we create an element, which is a description of the component we
    // would like to render (It has no methods, see:
    // https://facebook.github.io/react/docs/glossary.html so it isn't useful
    // for testing by itself)
    element = React.createElement(
      MyComponent, // component class
      {map} // props go here
      // You can also add children here as the last argument
    );
  
    // Render into a document fragment and return the full component instance.
    // You'll generally be testing `component`'s behavior in the rest of your
    // test.
    expect(function() {
      component = Utils.renderIntoDocument(element);
    }).not.toThrow();
  });
})
