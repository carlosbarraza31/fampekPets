import GalleryButton from './GalleryButton.js';

export default function PetInfo(props) {
    let pet = props.pet;
    let isExpanded = props.isExpanded;
    let handleShowGallery = props.handleShowGallery;

    return (
        <div className={`pet_info ${isExpanded ? '' : 'h-hidden'}`}>
            <div>
                <span className="title">Name: </span>
            {pet.fullName}
            </div>
            <div>
                <span className="title">Date of birth: </span>
                {pet.birthDate}
            </div>
            <div>
                <span className="title">Age: </span>
                {pet.age} years
            </div>
            <GalleryButton pet={pet} handleShowGallery={handleShowGallery}/>
        </div>
    );
}