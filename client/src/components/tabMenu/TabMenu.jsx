import React from 'react'

export default function TabMenu() {
    return (

        <>
            <input type="radio" name='menu' id="ana-yemek" hidden />
            <input type="radio" name='menu' id="ara-yemek" hidden />
            <input type="radio" name='menu' id="icecek" hidden />
            <input type="radio" name='menu' id="tatli" hidden />
            <div className='tab-menu'>
                <label id='main-food' htmlFor="ana-yemek">Ana Yemek</label>
                <label id='snack' htmlFor="ara-yemek">Ara Yemek</label>
                <label id='drinks' htmlFor="icecek">İçecek</label>
                <label id='dessert' htmlFor="tatli">Tatlı</label>
            </div>

        </>
    )
}
