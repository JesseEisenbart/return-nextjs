import Screenshots from './Screenshots'
import Action from './Action';
import Description from './Description';
import Video from './Video';
import NewsletterSubscribe from './NewsletterSubscribe';


const Main = () => {
    return (
        <div className="main-container">
            <div className="main">
                <Action text="PLAY THE DEMO!" icon="fas fa-play-circle" link="https://deadunicorngames.itch.io/return-alpha" wishlist={true}/>
                {/* <Action text="WISHLIST RETURN ON STEAM!" icon="fab fa-steam" link="https://deadunicorngames.itch.io/return-pre-alpha/devlog" wishlist={true}/> */}
                <Video />
                <Description />
                <NewsletterSubscribe />
                {/* <Action text="JOIN THE MAILING LIST!" icon="far fa-envelope" link="https://discord.gg/3e7hWqUJva"/> */}
                <Screenshots />                 
                <Action text="JOIN OUR DISCORD AND CONNECT WITH THE DEVELOPERS!" icon="fab fa-discord" link="https://discord.gg/3e7hWqUJva"/>
            </div>
        </div>
    )
}

export default Main
