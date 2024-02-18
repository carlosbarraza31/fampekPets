import React from 'react';

export default function TwinklingStar(props) {
    let star = props.star;
    let index = props.index;
    let isHomePageScrolling = props.isHomePageScrolling;
    let scrollTop = props.scrollTop;
    let showStars = props.showStars;
    const starRef = React.useRef(null);

    if (isHomePageScrolling) {
        starRef.current.style.transform = `translateY(${scrollTop * star.yFactor}px) translateX(${scrollTop * star.xFactor}px) rotate3d(${star.rotate3dFactor}, ${scrollTop/(starRef.current.parentElement.clientHeight)}turn)`;
    }

    return (
        <img alt="" className={`star star-${index + 1} ${isHomePageScrolling ? '' : 'm-static'} ${showStars ? '' : 'h-hidden'}`} src={`img/moving_star${star.alt ? '_alt' : ''}.svg`} ref={starRef}></img>
    );
}