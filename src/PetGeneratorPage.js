import React from 'react';

export default function PetGeneratorPage(props) {
    let shownPage = props.shownPage;
    let pageName = 'dog-generator-page';

    const [data, setData] = React.useState([]);
    const dogBreedsUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageRef = React.useRef(null);
    const errorNotifRef = React.useRef(null);
    const errorNotifTextRef = React.useRef(null);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function handleNotificacionClose() {
        errorNotifRef.current.classList.add('h-hidden');
    }

    const showBreedImage = async(event) => {
        const selectedBreed = event.currentTarget.getAttribute('data-js-breed');
        const breedUrl = `https://dog.ceo/api/breed/${selectedBreed}/images`;
        console.log()

        try {
            const response = await fetch(breedUrl);
            const result = await response.json();
            const breedUrls = result.message;

            const breedSample = breedUrls[getRandomIntInclusive(0, breedUrls.length)];
            if (!breedSample) {
                throw new Error('Connection error. Please try again. ');
            }
            dogImageRef.current.setAttribute('src', breedSample);
            dogImageRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

        } catch (e) {
            errorNotifRef.current.classList.remove('h-hidden');
            errorNotifTextRef.current.innerText = e;
            errorNotifRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(dogBreedsUrl);
            const result = await response.json();
            let randomResult = [];

            Object.keys(result.message).forEach(breed => {
                let randNum = Math.random();
                if (randNum > 0.8) {
                    randomResult.push(breed);
                }
            })
            setData(randomResult);
        } catch (e) {
            errorNotifRef.current.classList.remove('h-hidden');
            errorNotifTextRef.current.innerText = e.name + ':' + e.message;
        }
    }

    return (
        <div className={`b-pet-generator-page b-page ${shownPage === pageName ? '' : 'h-invisible'}`} data-js-page-name="dog-generator-page">
            <section className="section">
                <div className="b-pet-generator-page_title">
                    Dog Image Generator
                </div>
                <div className='error_notification h-hidden' ref={errorNotifRef}>
                    <img className='error_icon' src='img/error_icon.svg' alt='error icon'></img>
                    <div className='error_text'><span ref={errorNotifTextRef}></span></div>
                    <img className='close_icon' src='img/notification_close.svg' onClick={handleNotificacionClose} alt=""></img>
                </div>
                <div className="breed_grid">
                    <div className="breed_image">
                        <img className="dog_image" src ="img/dog_placeholder.svg" alt="dog_placeholder" ref={dogImageRef}></img>
                    </div>
                    <div className="breeds_container">
                        <div className="b-pet-generator-page_subtitle breeds_subtitle">
                            Choose a breed!
                        </div>
                        <div className="breeds_list">
                            {data ? data.map(breed => <button className="breed_item" data-js-breed={breed} key={breed} onClick={showBreedImage}>{breed}</button>) : null}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}