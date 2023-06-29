import React, { useState } from 'react'

export default function TabMenu({ setSelectButton, selectButton }) {

    const handleChange = (e) => {
        const dataNum = e.target.getAttribute('data-num');
        setSelectButton(dataNum);
    }

    return (

        <>
            <input onChange={handleChange} type="radio" name='menu' id="ana-yemek" data-num="1" hidden />
            <input onChange={handleChange} type="radio" name='menu' id="ara-yemek" data-num="2" hidden />
            <input onChange={handleChange} type="radio" name='menu' id="icecek" data-num="3" hidden />
            <input onChange={handleChange} type="radio" name='menu' id="tatli" data-num="4" hidden />
            <div className='tab-menu'>
                <label style={selectButton == '1' ? { color: "#FFE066" } : { color: "#FFFFFF" }} id='main-food' htmlFor="ana-yemek">Ana Yemek</label>
                <label style={selectButton == '2' ? { color: "#FFE066" } : { color: "#FFFFFF" }} id='snack' htmlFor="ara-yemek">Ara Yemek</label>
                <label style={selectButton == '3' ? { color: "#FFE066" } : { color: "#FFFFFF" }} id='drinks' htmlFor="icecek">İçecek</label>
                <label style={selectButton == '4' ? { color: "#FFE066" } : { color: "#FFFFFF" }} id='dessert' htmlFor="tatli">Tatlı</label>
            </div>

        </>
    )
}
