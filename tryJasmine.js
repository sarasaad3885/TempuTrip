describe('Home', function () {
        var TestUtils = React.addons.TestUtils;
        var todoAppComponent, element, renderedDOM;
        beforeEach(function (done) {
            element = React.createElement(Home);
            HomeComponent = TestUtils.renderIntoDocument(element);
            HomeComponent.setState({items: [{text: "testItem"}]}, done);
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
        it("Has a TodoList component", function () {
            expect(function () {
                TestUtils.findRenderedComponentWithType(HomeComponent, TodoList);
            }).not.toThrow();
        });
        describe("New item button", function () {
            beforeEach(function () {
                spyOn(HomeComponent.fireRef, "push");
            });
            it("Causes fireBase push to be called", function () {
                let button = TestUtils.scryRenderedDOMComponentsWithTag(HomeComponent, "button")[1];
                TestUtils.Simulate.click(button);
                expect(HomeComponent.fireRef.push).toHaveBeenCalledWith({"text": ""});
            });
        });
  

    });
