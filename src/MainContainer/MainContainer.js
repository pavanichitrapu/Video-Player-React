import React, { Component } from 'react';
import classes from './MainContainer.module.css';
import WatchVideoWrapper from '../WatchVideoWrapper/WatchVideoWrapper';
import Playlist from '../Playlist/Playlist';
import {Link} from 'react-router-dom';

class MainContainer extends Component{
    render()
    {
        return(
                <div className={classes.MainContainerWrapper}>
                    <Link to='/' className={classes.Back }>Back to Home</Link>
                    <div className={classes.Title}>The Video Player</div> 
                        <div className={classes.MainContainer}>
                            <WatchVideoWrapper videoId={this.props.match.params.vId}/>
                            <Playlist videoId={this.props.match.params.vId}/>   
                        </div>  
                </div>
             
        );
    }

}
export default MainContainer;
