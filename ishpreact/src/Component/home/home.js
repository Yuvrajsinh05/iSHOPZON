import React,{Component} from 'react';
import Display from './homedisplay';
import './home.css'

const url = "http://localhost:9705/home"

class HomeDisplay extends Component{
    constructor(){
        super()

        this.state={
            product:''
        }
    }

render(){
    return(
        <div>
            <div id="QuickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Discover Restaurants By Meal
                </span>
                <Display homeData={this.state.product}/>
            </div>
        </div>
    )
}

// api calling 
componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({product:data})
    })
}
}

export default HomeDisplay;