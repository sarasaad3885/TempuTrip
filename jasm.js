describe('box-stub-h3', function () {
        var TestUtils = React.addons.TestUtils;
        var todoAppComponent, element, renderedDOM;
        beforeEach(function (done) {
            element = React.createElement(box-stub-h3);
            todoAppComponent = TestUtils.renderIntoDocument(element);
            todoAppComponent.setState({items: [{text: "testItem"}]}, done);
        });
        it("Has a new button", function () {
            let buttons = TestUtils.scryRenderedDOMComponentsWithTag(todoAppComponent, "button");
            /*
            Warning: Anti-pattern: should *not* have this hard-coded index into the button array
            Better: Add an ID to that button, and then find it
            Same applies everywhere else below that we use the same anti-pattern
             */
            expect(buttons[1]).not.toBeUndefined();
            expect(buttons[1].innerHTML).toBe("New");
        });
        it("Has a box-stub-h3 component", function () {
            expect(function () {
                TestUtils.findRenderedComponentWithType(todoAppComponent, box-stub);
            }).not.toThrow();
        });
        
        });


