import PetInfo from './PetInfo.js';

export default function PetGrid({pet, onClick, isExpanded, handleShowGallery}) {
    return (
        <div className="pet" onClick={onClick} pet={pet.name}>
            <div className={`pet_name ${isExpanded ? 'm-expanded' : ''}`}>
                {pet.name}
            </div>
            <div className={`pet_image ${isExpanded? 'm-expanded' : ''}`}>
                <img src={pet.imgSrc} alt={pet.name}></img>
            </div>
            <PetInfo pet={pet} isExpanded={isExpanded} handleShowGallery={handleShowGallery}/>
        </div>
    );
}