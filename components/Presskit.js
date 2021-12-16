

import PresskitImages from "./PresskitImages.js";

const Presskit = () => {
    return (
        <div className="main-container">
            <div className="main presskit">
                <div className="presskit-header">
                    <h2>WELCOME</h2>
                    <h1>RETURN PRESS KIT</h1>
                    <p>A post-apocalyptic adventure set in the rebirth of your home planet</p>
                </div>
                <div className="presskit-banner">
                    <img src={"/presskit-banner.png"} alt="Return cover art"></img>
                </div>
                <div className="presskit-group">
                    <div className="presskit-facts">
                        <div className="title-with-line">
                            <h3>FACT SHEET</h3>
                            <div className="line"/>
                        </div>
                        <ul>
                            <li>
                                <b>Developer</b>
                            </li>
                            <li>
                                Dead Unicorn
                            </li>
                            <li>
                            Solo Developer based in Calgary, Alberta
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Sound Designer & Composer</b>
                            </li>
                            <li>
                                Jabbu
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Planned Platforms</b>
                            </li>
                            <li>
                                PC (Steam / GOG / EGS / itch.io)
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Game Links</b>
                            </li>
                            <li>
                                <a href="https://deadunicorngames.itch.io/return" rel="noreferrer" target="_blank">Jam Version</a>
                            </li>
                            <li>
                                <a href="https://deadunicorngames.itch.io/return-pre-alpha/devlog" rel="noreferrer" target="_blank">Devlog</a>
                            </li>
                            <li>
                                <a href="https://deadunicorngames.itch.io/return-pre-alpha" rel="noreferrer" target="_blank">Pre-Alpha</a>
                            </li>
                        </ul>
                    </div>
                    <div className="presskit-description">
                        <div className="title-with-line">
                            <h3>DESCRIPTION</h3>
                            <div className="line"/>
                        </div>
                        <p>
                            Return is a 2d side-scroller that tells the story of <b>a traveler who finds themselves stranded on their unfamiliar home planet</b>. As the planet collapsed, the traveler left home 200 years ago, seeking refuge on the new colonies. To their dismay, they awake to find the autopilot on the ship returned home for repairs after encountering an error. Stranded in a home they no longer recognize, the traveler searches tirelessly for parts to repair their ship. 
                        </p>
                        <p>
                            The game was originally released as an entry into <b><a href="https://itch.io/jam/albertagamejam2020" rel="noreferrer" target="_blank">Alberta Game Jam 2020</a></b>, after surpassing 1500 downloads and 8300 views, it was determined the game deserved a full release. The development team consists of a a single self-taught, first-time commercial developer. 
                        </p>
                    </div>
                </div>
                <section className="presskit-section">
                    <div className="presskit-header">
                        <h2>2K</h2>
                        <h1>SCREENSHOTS</h1>
                        <div className="btn-download">
                            <a href="https://drive.google.com/drive/folders/1QBn-L1kPNSpYetrH2apI2KH9969l-3IZ?usp=sharing" rel="noreferrer" target="_blank">GOOGLE DRIVE LINK</a>
                        </div>
                    </div>

                    <PresskitImages />
                    {/* <div className="presskit-header">
                        <h2>2K</h2>
                        <h1>SCREENSHOTS</h1>
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={screenshot_forest_entrance} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_forest_entrance})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={screenshot_basecamp} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_basecamp})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={screenshot_city} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_city})`}}/>
                            </a>    
                        </div>     
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={screenshot_golem} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_golem})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={screenshot_den} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_den})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={screenshot_grasslands} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_grasslands})`}}/>
                            </a>    
                        </div>     
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={screenshot_radio} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_radio})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={screenshot_gate} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_gate})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={screenshot_cave} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_cave})`}}/>
                            </a>    
                        </div>     
                    </div> */}

                    
                </section>
                <section className="presskit-section">
                    <div className="presskit-header">
                        <h2>4K</h2>
                        <h1>LOGO AND COVER ART</h1>
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={"/cover1.png"} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"backgroundImage": `url(/cover1.png)`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={"/logo_brown.png"} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail logo" style={{"backgroundImage": `url(/logo_brown.png)`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={"/logo_transparent.png"} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail logo transparent" style={{"backgroundImage": `url(/logo_transparent.png)`}}>
                                    <h3> (transparent) </h3>
                                </div>
                            </a>    
                        </div>     
                    </div>
                </section>
                <section className="presskit-section">
                    <div className="presskit-header">
                        <h2>SAY HELLO</h2>
                        <h1>GET IN TOUCH!</h1>
                    </div>
                    <div className="presskit-contact-container">
                        <ul className="presskit-contact">
                            <li>
                                <h4>Twitter</h4>
                                <a href="" rel="noreferrer" target="_blank">twitter.com/DeadUnicornYYC</a>
                            </li>
                            <li>
                                <h4>Instagram</h4>
                                <a href="" rel="noreferrer" target="_blank">instagram.com/DeadUnicornYYC</a>
                            </li>
                            <li>
                                <h4>E-mail</h4>
                                <a href="" rel="noreferrer" target="_blank">deadunicorn.info@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>                
        </div>
    )
}

export default Presskit
