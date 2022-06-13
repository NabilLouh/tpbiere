import React from 'react';
import axios from 'axios';
import { withRouter } from './index';


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

                <ul>

                    {this.state.bieres.map((biere, id) =>
    
                        <li key={id}>
                            <div>{biere.name}</div>
                            <img src={biere.image_url} />
                            
                        </li>

                    )}

                </ul>
               

            </div>
        )

    }
}


export default withRouter(ListBiere);