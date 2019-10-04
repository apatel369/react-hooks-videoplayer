import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const PlayList = props => {
    return (
        <StyledPlaylist>
            <NightMode />
            <PlaylistHeader />
            <PlaylistItems />
        </StyledPlaylist>
    )  
}

export default PlayList;