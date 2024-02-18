import React from 'react';

export default function AboutPage(props) {
    let shownPage = props.shownPage;
    let pageName = "about";

    return (
        <div className={`b-about b-page ${pageName === shownPage ? '' : 'h-invisible'}`} data-js-page-name="about">
            <div className="section m-overflow">
                <img className="info_icon" src="img/info_icon.svg" alt="info_icon"></img>
                <div className="b-about_title">
                    About
                </div>
                <div className="b-about_description">
                    Hey there, I am Carlos, the creator of this website. <br></br> <br></br>

                    The idea of creating it came up to me one fateful Sunday evening.. one of those dreadful times when I started
                    feeling my weekly existential crisis coming in, which usually happened the day before having to go back to work to
                    endure another week. I was feeling anxious and decided to start working on a personal project to
                    entertain my mind and this website is what came up. <br></br><br></br>

                    I chose to center the topic of this website around my three furry friends: <strong>Franky, Petunia and Rayo</strong>, so that people who
                    visit this website can get to know them a little. They are my three dogs and I love spending my time taking care of them. <br></br><br></br>

                    I am currently working as a software engineer and most of my experience is centered in the back-end. As of late I
                    have grown more curious about front-end tools, so I wanted to use this website as training grounds, for practicing CSS
                    and styles. <br></br><br></br>

                    Enjoy!
                </div>
                <img className="react_image" src="img/react.png" alt="react icon"></img>
                <div className="react_description">Made with React</div>
            </div>
        </div>
    );
}