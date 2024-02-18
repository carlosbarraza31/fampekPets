import React from 'react';
import PetGrid from './PetGrid.js';

export default function PetGridContainer(props) {
    const [showPet, setShowPet] = React.useState('franky');
    const [hasExpanded, setExpanded] = React.useState(false);
    let handleShowGallery = props.handleShowGallery;

    function handleClick(event, isExpanded) {
        let newPet = event.currentTarget.getAttribute('pet');
        let hasExpandedClass = event.currentTarget.children[0].classList.contains('m-expanded');

        setExpanded(hasExpandedClass);
        setShowPet(newPet);

        let warnParent = event.currentTarget.getAttribute('pet') === newPet && !hasExpandedClass;
        props.warnExpanded(warnParent);
    }

    return (
        <div className="b-main_pet_grid">
            <PetGrid pet={{name:'Franky', imgSrc:"img/Franky.jpg", fullName:"Franky Polo Barraza Estrada", birthDate:"November 17th, 2018", age:"6"}} onClick={handleClick} isExpanded={showPet === 'Franky' && !hasExpanded} handleShowGallery={handleShowGallery}/>
            <PetGrid pet={{name:"Petunia", imgSrc:"img/Petunia.jpg", fullName:"Petunia Ofelia Barraza Estrada", birthDate:"March 21st, 2019", age:"4"}} onClick={handleClick} isExpanded={showPet === 'Petunia' && !hasExpanded} handleShowGallery={handleShowGallery}/>
            <PetGrid pet={{name:"Rayo", imgSrc:"img/Rayo.jpg", fullName:"Rayo Macchiato Barraza Estrada", birthDate:"August 24th, 2020",  age:"3"}} onClick={handleClick} isExpanded={showPet === 'Rayo' && !hasExpanded} handleShowGallery={handleShowGallery}/>
        </div>
    );
}