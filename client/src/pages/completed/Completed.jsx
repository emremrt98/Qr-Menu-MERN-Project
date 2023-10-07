import React from 'react'

export default function Completed() {
    return (
        <div className='completed'>
            <div className='completed__container'>
                <div className='completed__container__item'>
                    <div className='table-num-title'>Masa Numarası</div>
                    <div className='table-num'>324</div>
                </div>
                <div className='completed__container__item'>
                    <span className='order-info'>Siparişiniz başarıyla oluşturuldu</span>
                </div>
                <div className='completed__container__item'>
                    <div className='time-duration-title'>Ortalama Bekleme Süresi</div>
                    <div className='time-duration'>15 dakika</div>
                </div>
            </div>
            <div className='completed__info'>
                <div>Siparişiniz Hazırlanıyor</div>
            </div>
        </div>
    )
}
