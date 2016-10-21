describe('TodoApp', function () {
        var TestUtils = React.addons.TestUtils;
        var todoAppComponent, element, renderedDOM;
        beforeEach(function (done) {
            element = React.createElement(TodoApp);
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
        it("Has a TodoList component", function () {
            expect(function () {
                TestUtils.findRenderedComponentWithType(todoAppComponent, TodoList);
            }).not.toThrow();
        });
        describe("New item button", function () {
            beforeEach(function () {
                spyOn(todoAppComponent.fireRef, "push");
            });
            it("Causes fireBase push to be called", function () {
                let button = TestUtils.scryRenderedDOMComponentsWithTag(todoAppComponent, "button")[1];
                TestUtils.Simulate.click(button);
                expect(todoAppComponent.fireRef.push).toHaveBeenCalledWith({"text": ""});
            });
        });
        describe("TodoList", function () {
            var todoListComponent;
            beforeEach(function(){
                 todoListComponent = TestUtils.findRenderedComponentWithType(todoAppComponent, TodoList);
            });
            it("Updates firebase when text is changed", function(){
                var setSpy;
                setSpy = jasmine.createSpy("set");
                spyOn(todoAppComponent.fireRef, "child").and.returnValue({set : setSpy});
                var inputs = TestUtils.scryRenderedDOMComponentsWithTag(todoListComponent,"input");
                inputs[0].value = "asdf";
                TestUtils.Simulate.change(inputs[0]);
                expect(todoAppComponent.fireRef.child).toHaveBeenCalled();
                expect(setSpy).toHaveBeenCalledWith({text: "asdf"});
            });
            it("Removes items from firebase when delete is clicked", function(){
                var deleteSpy;
                deleteSpy = jasmine.createSpy("remove");
                spyOn(todoAppComponent.fireRef, "child").and.returnValue({remove : deleteSpy});
                var deleteButtons = TestUtils.scryRenderedDOMComponentsWithTag(todoListComponent,"button");
                TestUtils.Simulate.click(deleteButtons[0]);
                expect(todoAppComponent.fireRef.child).toHaveBeenCalled();
                expect(deleteSpy).toHaveBeenCalled();
            });
        });

    });
