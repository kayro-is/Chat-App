import { auth } from '../../lib/firebase';
import './detail.css'

const Detail = () => {
    return (
        <div className="detail">
            <div className='user' >
                <img src="./avatar.png" alt="" />
                <h2>Lyes Dre</h2>
                <p>Lorem, ipsum dolor sit amet .</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Paramétre du Chat</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Confidentialité & d’aide</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>photos partagées</span>
                        <img src="./arrowDown.png" alt="" />
                        </div>
                        <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt="" className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt="" className='icon'/>
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt=""className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                            <img src="violet.jpg" alt="" />
                   <span>photo_2024_2.png</span>
                   </div>
                   <img src="./download.png" alt="" className='icon'/>
                        </div>
                        
                    </div>
                </div>

                <div className='option'>
                    <div className='title'>
                        <span>Fichiers partagés</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Bloquer l’utilisateur</button>
                <button className='logout' 
                onClick={() => auth.signOut()}>se déconnecter</button>
            </div>
        </div>
    )
}



export default Detail;