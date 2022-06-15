import React from 'react';
import axios from 'axios';
import Header from './Header';
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
            <div >
                <div onClick={this.accueil}>
                    <Header />
                </div>

                {console.log(this.state.beer)}
                <ul className='Beer-card'>
                    {this.state.beer.map((UneBiere, id) =>

                        <li className='instruction' key = {id}>
                            <div className='ipal'>
                                <img className='indiv-beer' src={UneBiere.image_url} />
                                <div className='AOP'>
                                    <h1>{UneBiere.name}</h1>
                                    <div className='desc'>{UneBiere.description}</div>
                                    <div className='dgre'>Alc. <span className='grass'>{UneBiere.abv}</span></div>
                                </div>
                            </div>
                            <div className='grup'>
                                <div>
                                    
                                    <ul className='foodWars'> 
                                        <h1> Association Nourriture/Bière :</h1>
                                        {UneBiere.food_pairing.map((food, index) =>
                                            <li className='food' key={index} >
                                                {food}
                                            </li>

                                        )}
                                    </ul>
                                    <h1 className="ibu">Ibu {UneBiere.ibu}</h1>
                                </div>
                                <div className='log'>
                                    <img src="/img/glass-3-removebg-preview.png"/>
                                    <h1 className='moove'>EBC {UneBiere.ebc}</h1>
                                </div>

                            </div>
                            <button className='bouton'>Commander</button>
                            
                            
                            
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default withRouter(Beer);