describe("Investment", function () {
    var stock, investment;

    beforeEach(function () {
        stock = {
            symbol: "AAPL", sharePrice: 4, fetch: function (success) {
                var _t = this;
                window.setTimeout(function(){
                    _t.sharePrice = 23.67;
                    success.success();
                },2000);
            }
        };
        investment = {
            stock: stock,
            shares: 100,
            sharePrice: 20
        };
    });

    it("should be of a stock", function () {
        expect(investment.stock).toBe(stock);
    });

    describe("should be able to update its share price", function () {
        var fetched = false;
        beforeEach(function(done){
            spyOn(stock,"fetch").and.callFake(function(param)
            {
                this.sharePrice = 23.67;
                done();
            });
            stock.fetch({
                success: function () {
                    fetched = true;
                    done();
                }
            });

        });
        it("will get the updated price eventually", function(){
            expect(stock.sharePrice).toEqual(23.67);
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
      jasmineReact.render(<FooKlass foo="bar" />, document.getElementById("jasmine_content"));

      var renderArgs = React.render.mostRecentCall.args[0];

      expect(renderArgs.props.foo).toBe("bar");
    });
    });
});
