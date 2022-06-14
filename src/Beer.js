import React from 'react';
import axios from 'axios';

import { withRouter } from './index';



class Beer extends React.Component{
   constructor(props) {
       super(props)
       this.state = {
           beer:[],
        }
    }


    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers/' + this.props.router.params.id ).then(response => {
            this.setState({beer: response.data})
        })
    }
    
    render() {
        return (
            <div>
                {console.log(this.state.beer)}
                <ul>
                    {this.state.beer.map((UneBiere, id) =>

                        <li key = {id}>
                            <div>
                                <img src={UneBiere.image_url} />
                                <div>
                                    <h1>{UneBiere.name}</h1>
                                    <div>{UneBiere.description}</div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>Alc. {UneBiere.abv}</div>
                                </div>
                                <ul> <h1>Food Pairing :</h1>
                                    {UneBiere.food_pairing.map((food, index) =>
                                        <li key={index} >
                                            {food}
                                        </li>

                                    )}
                                </ul>
                                <h1>Ibu {UneBiere.ibu}</h1>
                            </div>
                            <div>
                                <img src="glass-1.jpg"/>
                                <h3>EBC {UneBiere.ebc}</h3>
                            </div>


                            <button>Commander</button>
                            
                            
                            
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default withRouter(Beer);