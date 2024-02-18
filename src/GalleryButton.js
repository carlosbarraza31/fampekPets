export default function GalleryButton(props) {
    let pet = props.pet;
    let handleShowGallery = props.handleShowGallery;

    return (
        <div className="button">
            <button className="gallery_button" data-js-pet={pet.name.toLowerCase()} onClick={handleShowGallery}>View gallery</button>
        </div>
    );
}