import React from 'react';
import axios from 'axios';



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

                <ul className='ulbiere'>

                    {this.state.bieres.map((biere, id) =>
    
                        <li className='cardbeer' key={id}>
                            <div className="foam">{biere.name}</div>
                            <img className="glouglou" src={biere.image_url} />
                            
                        </li>

                    )}

                </ul>
               

            </div>
        )

    }
}


export default ListBiere;