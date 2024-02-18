import React from 'react';
import TwinklingStar from './TwinklingStar.js';
import HomepageSection1 from './HomepageSection1.js';
import HomepageSection2 from './HomepageSection2.js';
import PetGallery from './PetGallery.js';

export default function Homepage(props) {
    const [isGridVisible, setGridVisible] = React.useState(false);
    const [showGallery, setShowGallery] = React.useState(false);
    const [selectedPet, setSelectedPet] = React.useState('franky');
    const [isScrolling, setScrolling] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
    const homepageRef = React.useRef(null);

    let shownPage = props.shownPage;
    let pageName = 'home';

    let twinklingStarsObj = [
        {
            alt: false,
            yFactor: '-1',
            xFactor: '0.5',
            rotate3dFactor: '1, 2, 3'
        },
        {
            alt: false,
            yFactor: '-1.3',
            xFactor: '0.4',
            rotate3dFactor: '3, 2, 2'
        },
        {
            alt: false,
            yFactor: '-1.5',
            xFactor: '-0.6',
            rotate3dFactor: '3, 2, 1'
        },
        {
            alt: true,
            yFactor: '0.1',
            xFactor: '-0.5',
            rotate3dFactor: '1, 2, 3'
        },
        {
            alt: true,
            yFactor: '0.6',
            xFactor: '0.4',
            rotate3dFactor: '5, 1, 2'
        },
        {
            alt: true,
            yFactor: '0.3',
            xFactor: '0.5',
            rotate3dFactor: '3, 2, 1'
        }
    ]

    let twinklingStarsElements = twinklingStarsObj.map((star, index) => {
        return <TwinklingStar star={star} key={index} index={index} isHomePageScrolling={isScrolling} scrollTop={scrollTop} showStars={shownPage === pageName}/>
    })

    function handleScroll(event) {
        let petGrid = event.currentTarget.querySelector('.b-main_pet_grid');

        setScrollTop(event.currentTarget.scrollTop);
        setScrolling(scrollTop > 1);
        setGridVisible(isElementVisible(petGrid));
    }

    function handleClick(event) {
        let section2 = event.currentTarget.parentElement.parentElement.querySelector('.section_2');
        section2.scrollIntoView(
            { behavior: "smooth", block: "start", inline: "nearest" }
        );
    }

    function handleUpClick(event){
        let section1 = event.currentTarget.parentElement.parentElement.querySelector('.section_1');
        section1.scrollIntoView(
            { behavior: "smooth", block: "start", inline: "nearest" }
        );
    }

    function handleShowGallery(event) {
        let petGallery = document.querySelector('.pet_gallery');
        setSelectedPet(event.currentTarget.getAttribute('data-js-pet'));
        petGallery.showModal();
        setShowGallery(true);
    }

    return (
        <div className={`b-main b-page ${pageName === shownPage ? '' : 'h-invisible'}`} data-js-page-name="home" onScroll={handleScroll} ref={homepageRef}>
            <HomepageSection1 handleClick={handleClick}/>
            <HomepageSection2 isGridVisible={isGridVisible} handleUpClick={handleUpClick} handleShowGallery={handleShowGallery}/>
            {twinklingStarsElements}
            <PetGallery selectedPet={selectedPet} showGallery={showGallery}/>
        </div>
    );
}

function isElementVisible(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}