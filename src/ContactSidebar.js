export default function ContactSidebar(props) {
    let isContactExpanded = props.isContactExpanded;
    let handleClickOverlay = props.handleClickOverlay;

    return (
        <dialog className={`contact_sidebar ${isContactExpanded ? 'm-expanded' : ''}`}open>
            <div className="close_icon" onClick={handleClickOverlay}>
                <img className="close_icon_svg" src="img/close_icon.svg" alt="close_icon"></img>
            </div>
            <div className="title">
                Contact Information
            </div>
            <ul>
                <li>
                    <div className="contact_grid">
                        <img className="contact_image" src="img/person_icon.svg" alt="person icon"></img>
                        <div className="contact_data">Carlos Barraza</div>
                    </div>
                </li>
                <li>
                    <div className="contact_grid">
                        <img className="contact_image"  src="img/mail_icon.svg" alt="email icon"></img>
                        <div className="contact_data">cbarrazaestrada@gmail.com</div>
                    </div>
                </li>
                <li>
                    <div className="contact_grid">
                        <img className="contact_image"  src="img/location_icon.svg" alt="location icon"></img>
                        <div className="contact_data">Mexico</div>
                    </div>
                </li>

                <div className="social_grid">
                    <a href="https://www.instagram.com/carlosbarrazaes" target="_blank" rel="noreferrer">
                        <img className="social_icon" src="img/insta_icon.svg" alt="insta_icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/carlos-barraza-estrada-8246bb132" target="_blank" rel="noreferrer">
                        <img className="social_icon" src="img/linkedin_icon.svg" alt="linkedin_icon"></img>
                    </a>
                    <a href="https://www.threads.net/@carlosbarrazaes" target="_blank" rel="noreferrer">
                        <img className="social_icon" src="img/threads_icon.svg" alt="threads_icon"></img>
                    </a>
                </div>
            </ul>
        </dialog>
    );
}