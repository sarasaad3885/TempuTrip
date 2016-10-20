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
    });
});
