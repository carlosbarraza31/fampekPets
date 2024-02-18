import React from 'react';
import UpIndicators from './UpIndicators.js';
import PetGridContainer from './PetGridContainer.js';

export default function HomepageSection2(props) {
    const [hasExpanded, setExpanded] = React.useState(false);
    let handleUpClick = props.handleUpClick;
    let handleShowGallery = props.handleShowGallery;

    function handleClick(isExpanded) {
        setExpanded(isExpanded);
    }

    return (
        <section className="section section_2">
            <UpIndicators isExpanded={hasExpanded} isGridVisible={props.isGridVisible} handleClick={handleUpClick}/>
            <PetGridContainer warnExpanded={handleClick} handleShowGallery={handleShowGallery}/>
        </section>
    );
}