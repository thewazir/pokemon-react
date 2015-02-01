var PokedexTable = React.createClass({displayName: "PokedexTable",
    render:function(){
        var rows = [];
        this.props.pokemon.forEach(function(pokemon){
            rows.push(React.createElement(PokemonRow, {pokemon: pokemon, key: pokemon.name}));
        });

        return (
                React.createElement("ul", null, 
                    React.createElement("li", null, rows)
                ));
    }
});