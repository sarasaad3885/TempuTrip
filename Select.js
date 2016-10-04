
var ServiceChooser = React.createClass({

    getInitialState: function(){
        return { total: 0 };
    },

    render: function() {

        var self = this;

        var services = this.props.items.map(function(s){

            // Create a new Service component for each item in the items array.
            // Notice that I pass the self.addTotal function to the component.

            return <Service name={s.name} price={s.price} active={s.active}  />;
        });

        return <div>
                    <h1>Weather Options</h1>
                    
                    <div id="services">
                        {services}

                       

                    </div>

                </div>;

    }
});


var Service = React.createClass({

    getInitialState: function(){
        return { active: false };
    },

    clickHandler: function (){

        var active = !this.state.active;

        this.setState({ active: active });
        
    

    },

    render: function(){

        return  <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                    {this.props.name} <b>{this.props.price}</b>
                </p>;

    }

});


var services = [
    { name: 'Temperature', price: 80 },
    { name: 'Distance', price: 60 },
    { name: 'Wind Speed', price: 2 },
    { name: 'Humidity', price: 0 }
];


// Render the ServiceChooser component, and pass the array of services

ReactDOM.render(
    <ServiceChooser items={ services } />,
    document.getElementById('Select')
);
