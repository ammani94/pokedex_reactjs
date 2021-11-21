import './MyComponent.css';
import React from 'react';
import Details from './../Details/Details';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
//import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';
const GridWrapper = styled.div`
  display: inline-block,;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 6em;
  grid-template-columns: repeat(22, 1fr);
  grid-auto-rows: minmax(50px, auto);
`;


class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            items : []
        };
    }

    componentDidMount() {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    items : result.results
                });
            },
            (error) => {
                this.setState({
                    isLoaded : true,
                    error
                });
            }
        )
    }

    render() {
        const { error,isLoaded,items} = this.state;
        //console.log(items);

        for (var i = 0; i < items.length; i++) {
            items[i]['id_pic'] = i+1;
        }
        console.log(items);
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement</div>;
        } else {
            return (
                <div class="grid">
                    {items.map((item,index) => (
                        // <Link to="/details/$(item.url)" params={{ url: item.url }}><li key={item.name}>
                        //     {item.name}
                        // </li></Link>
                        <Link to={{pathname: '/details', aboutProps: {
                            url:item.url
                        }}} ><div class="item" key={item.name}>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+item.id_pic+".png"} alt={index+1} />
                             {item.name}
                         </div></Link>

                    ))}
                </div>
            );
        }
    }


}

export default MyComponent;

