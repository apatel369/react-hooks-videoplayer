import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';


const PlayList = props => {
    return (
        <React.Fragment>
            <NightMode />
            <PlaylistHeader />
            <PlaylistItems />
        </React.Fragment>
    )  
}

export default PlayList;