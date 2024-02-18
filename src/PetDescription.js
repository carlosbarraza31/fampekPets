export default function PetDescription(props) {
    let pet = props.pet;

    switch (pet) {
        case 'franky':
            return (
                <div>
                    Franky is a small-sized, black-haired dog with a white streak on his chest. <br></br><br></br> It is believed he was born in Sinaloa, Mexico, where he was later taken to a local dog shelter and then traveled to Mexico City, which is where my sister adopted him. <br></br><br></br> He has a strong temper. He might seem a bit elusive at first but if he likes you, you will eventually grow on him.',
                </div>
            );
        case 'petunia':
            return (
                <div>
                    Petunia is a small-sized dog with a unique fur; its colors are a mix between gray, black, white and brown streaks. <br></br><br></br> She was found during one of our walks back when we only had Franky. I heard some crying in the middle of a patch of grass and there she was, shaking and full of fear. I decided to carry her in my arms and get her home. <br></br><br></br> She is a playful dog but can be a bit nervous around other dogs sometimes. It takes time for her to be able to trust them and when she does, there is no stopping her from wanting to play all the time!
                </div>
            );
        case 'rayo':
            return (
                <div>
                    Rayo is a big-sized dog with an orange fur and a white streak going from his abdomen all the way to his face and neck, which makes it look like he has a \'lightning\' across his face, hence his name. <br></br><br></br> He was found abandoned in a highway inside a cardboard box. My sister\'s friend took him in but then he was given to our care. He has grown a lot since then! <br></br><br></br> Rayo is a very kind dog who loves meeting other dogs! I would say he is the friendliest of them. he loves running and taking long walks, and is quite playful... I\'m not sure he is aware of how big he is.
                </div>
            );
        default:
            break;
    }
}