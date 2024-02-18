import PetDescription from './PetDescription.js';

export default function PetPage(props) {
    let pet = props.pagePet;
    let pageName = 'pet-page';
    let shownPage = props.shownPage;
    let petImage;

    if (pet !== 'none') {
        petImage = <img src={`img/${pet}_card_image.jpg`} alt="pet"></img>;
    }

    return (
        <div className={`b-pet-page b-page ${shownPage === pageName ? '' : 'h-invisible'}`} data-js-page-name="pet-page">
            <div className="subpage" data-js-pet={pet}>
                <section className="section">
                    <div className="b-pet-page_title">
                        {pet}
                    </div>
                    <div className="b-pet-page_card-grid">
                        <div className="pet_card_image">
                            {petImage}
                        </div>
                        <div className="pet_card_info">
                            <PetDescription pet={pet}/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}