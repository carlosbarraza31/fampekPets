import React from 'react';

export default function Header(props) {
    let handleContactClick = props.handleContactClick;
    let handleShowPage = props.handleShowPage;
    const [togglePetList, setTogglePetList] = React.useState(false);

    function handleRefresh() {
        window.location.reload(false);
    }

    function handleTogglePetList() {
        setTogglePetList(!togglePetList);
    }

    return (
        <header>
            <img className="nav_logo" src="img/nav_logo.svg" alt="logo" onClick={handleRefresh} data-js-refresh ></img>
            <div className="page_title" onClick={handleRefresh} data-js-refresh>Fampek Pets</div>
            <nav>
                <ul className="nav_links">
                    <li><div className="m-link pet_generator_link" data-js-to-page="dog-generator-page" onClick={handleShowPage}>Dog Image Generator</div></li>
                    <li className={`pet_list ${togglePetList ? 'm-active' : ''}`} onClick={handleTogglePetList}>
                        <div className="dropdown_link">Pets
                            <img className="dropdown_icon" src="img/dropdown_icon.svg" alt="dropdown_icon"></img>
                            <ul className={`dropdown_content ${togglePetList ? 'm-active' : ''}`}>
                                <li className="pet_item pet_nav_button" data-js-pet="franky" data-js-to-page="pet-page" onClick={handleShowPage}>
                                    <img src="img/dog_head.svg" alt="dog_head"></img>
                                    Franky
                                </li>
                                <li className="pet_item pet_nav_button" data-js-pet="petunia" data-js-to-page="pet-page" onClick={handleShowPage}>
                                    <img src="img/dog_head.svg" alt="dog_head"></img>
                                    Petunia
                                </li>
                                <li className="pet_item pet_nav_button" data-js-pet="rayo" data-js-to-page="pet-page" onClick={handleShowPage}>
                                    <img src="img/dog_head.svg" alt="dog_head"></img>
                                    Rayo
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><div className="m-link" data-js-to-page="about" onClick={handleShowPage}>About</div></li>
                </ul>
            </nav>
            <div className="cta" onClick={handleContactClick} data-js-contact-button>Contact</div>
        </header>
    );
}