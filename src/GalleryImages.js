export default function GalleryImages(props) {
    let pet = props.selectedPet;

    return (
        <div className="gallery_images" data-js-pet={pet}>
            <img className="gallery_image" src={`img/${pet}/${pet}_1.jpg`} alt={pet}></img>
            <img className="gallery_image" src={`img/${pet}/${pet}_2.jpg`} alt={pet}></img>
            <img className="gallery_image" src={`img/${pet}/${pet}_3.jpg`} alt={pet}></img>
        </div>
    );
}