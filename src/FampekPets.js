import React from 'react';
import Homepage from './Homepage.js';
import AboutPage from './AboutPage.js';
import PetPage from './PetPage.js';
import PetGeneratorPage from './PetGeneratorPage.js';
import Overlay from './Overlay.js';
import ContactSidebar from './ContactSidebar.js';

export default function FampekPets(props) {
    let isContactExpanded = props.isContactExpanded;
    let handleClickOverlay = props.handleClickOverlay;
    let shownPage = props.shownPage;
    let pagePet = props.pagePet;

    return (
        <main>
            <Homepage shownPage={shownPage}/>
            <AboutPage shownPage={shownPage}/>
            <PetPage shownPage={shownPage} pagePet={pagePet}/>
            <PetGeneratorPage shownPage={shownPage}/>
            <Overlay isContactExpanded={isContactExpanded} handleClickOverlay={handleClickOverlay}/>
            <ContactSidebar isContactExpanded={isContactExpanded} handleClickOverlay={handleClickOverlay}/>
        </main>
    );
}