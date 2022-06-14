import React from 'react';
import axios from 'axios';
import { withRouter } from './index';
import { Link, Outlet } from 'react-router-dom';


class ListBiere extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bieres:[],
        }
    }


    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers').then(response => {
            this.setState({bieres: response.data})
            {console.log(this.state.bieres)}
        })

    }


    render() {



        return (
            <div>

                <ul class="ulbiere">

                    {this.state.bieres.map((biere, id) =>
                       <Link to={"/biere/" + biere.id + "/" + biere.name } class="lienB">
                            <li class="cardbiere" key={id}>
                                
                                <div>{biere.name}</div>
                                <img class="imgbiere" src={biere.image_url} />
                                
                            </li>
                        </Link>
                                

                    )}

                </ul>
               

            </div>
        )

    }
}


export default withRouter(ListBiere);