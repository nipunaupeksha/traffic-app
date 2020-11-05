import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
export default class Map extends Component{
    constructor(props){
        super(props);
        this.state={
            viewport:{
                width:1000,
                height:600,
                zoom:10,
                latitude:53.5444,
                longitude:-113.4909,
            },
            token:'pk.eyJ1IjoibmlwdW5hdXBla3NoYSIsImEiOiJja2g0YmI0dHUwMjFwMzFybm95d3FscmJ0In0.3DFNTaJ3_4fln1k4ZINt-A'
        }
    }

    render(){
        return(
            <ReactMapGL mapboxApiAccessToken={this.state.token}
            onViewportChange={(viewport)=>this.setState({viewport})}
            {...this.state.viewport} > 
            </ReactMapGL>
        );
    }
}