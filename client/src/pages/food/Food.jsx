import React, { useState } from 'react'
import TabMenu from '../../components/tabMenu/TabMenu'
import Foods from '../../components/food/Foods';
import { Link } from 'react-router-dom';

export default function Food() {
  const [selectButton, setSelectButton] = useState("1");

  return (
    <div className='food'>
      <TabMenu setSelectButton={setSelectButton} selectButton={selectButton} />
      <div className='menus'>
        <div style={selectButton === '1' ? { display: "block" } : { display: "none" }} className='main-food'>
          <Foods />
        </div>

        <div style={selectButton === '2' ? { display: "block" } : { display: "none" }} className='snack'>Ara Yemek</div>
        <div style={selectButton === '3' ? { display: "block" } : { display: "none" }} className='drinks'>İçecek</div>
        <div style={selectButton === '4' ? { display: "block" } : { display: "none" }} className='dessert'>Tatlı</div>

      </div>
      <div className='food__card'>
        <div><span className='food__card__price-header'>Toplam :</span>  <span className='food__card__price'>360 ₺</span></div>
        <div className='food__card__direct-card'><Link to="/">Sepeti Görüntüle</Link></div>
      </div>
    </div>
  )
}
