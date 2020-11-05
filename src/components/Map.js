import React,{Component} from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import Pin from './Pin';

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
            coords:[
                {latitude: 53.5225, longitude: -113.6242},
                {latitude: 53.5337, longitude: -113.4947},
                {latitude: 53.5439, longitude: -113.4914},
            ],
        }
    }

    render(){
        const {coords}=this.state;
        return(
            <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport)=>this.setState({viewport})}
            {...this.state.viewport} > 

            {coords.map(coord=>(
                <Marker latitude={coord.latitude} longitude={coord.longitude}>
                    <Pin/>
                </Marker>
            ))}
            
            </ReactMapGL>
        );
    }
}