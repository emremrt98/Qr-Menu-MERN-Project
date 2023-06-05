import { BiMenu } from 'react-icons/bi';



export default function Header() {
    return (
        <div className='header'>
            <div className='header__layout flex'>
                <div className='header__layout__icon'>
                    <BiMenu />
                </div>
                <div className='header__layout__info'>
                    <div className='flex gap-20 header__layout__info__clock'>
                        <div>
                            <div>Açılış Saati:</div>
                            <div>Kapanış Saati:</div>
                        </div>
                        <div>
                            <div>09:30</div>
                            <div>23:00</div>
                        </div>
                    </div>
                    <div className='header__layout__info__address'>Kızılay, Atatürk Blv No:96 D:606, 06420 Kızılay - Çankaya/Ankara</div>
                </div>
                <div className='header__layout__lang'>TR</div>
            </div>
           <figure className='header__logo'><img src="assets/image/logo.svg" alt="" /></figure>
        </div>
    )
}
