import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const NightMode = ({ nightModeCallback, nightmode }) => (
    <StyledNightmode>
    <label className="switch">
        <input type="checkbox" checked={nightmode} onChange={nightModeCallback} />
        <span className="slider round" />
    </label>
    </StyledNightmode>
)

export default NightMode;