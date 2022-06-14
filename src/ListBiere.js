import React from 'react';
import axios from 'axios';
import { withRouter } from './index';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';


class ListBiere extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bieres:[],
            text: '',
            page: false,
            Button: <button disabled >RECHERCHE</button>,
        }
    }


    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {
            this.setState({bieres: response.data})
           
        })

    }

    componentDidUpdate() {
        if (this.state.page == true) {
            axios.get('https://api.punkapi.com/v2/beers').then(response => {
            this.setState({bieres: response.data, page: false})
            console.log(this.state.bieres)
        })
        }
        
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
        if(event.target.value != '' ) {
            this.setState({Button: <button enabled onClick={this.rechercher} >RECHERCHE</button>})
        } else {
            this.setState({Button: <button disabled >RECHERCHE</button>})
        }

    }

    rechercher = (event) => {
        axios.get('https://api.punkapi.com/v2/beers?beer_name=' + this.state.text).then(response => {
            this.setState({bieres: response.data})
            
        })
    }

    accueil = (event) => {
        this.setState({page: true})
    }
  

    render() {



        return (
            <div>
                <div onClick={this.accueil}>
                    <Header />
                </div>
                

                <input type="text" placeholder='Hoppy, Malte, Angry...' name="text" value={this.state.text} onChange={this.handleChange}/>
                <Link to={"/recherche/" + this.state.text }>{this.state.Button}</Link>

                <ul className="ulbiere">

                    {this.state.bieres.map((biere, id) =>
                       <Link to={"/biere/" + biere.id + "/" + biere.name } className="lienB">
                            <li className="cardbeer" key={id}>
                                
                                <div className="foam">{biere.name}</div>
                                <img className="glouglou" src={biere.image_url} />
                                
                            </li>
                        </Link>
                                

                    )}

                </ul>
               

            </div>
        )

    }
}


export default withRouter(ListBiere);