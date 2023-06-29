import React, { useEffect, useState } from 'react'
import TabMenu from '../../components/tabMenu/TabMenu'
export default function Food() {
  const [selectButton, setSelectButton] = useState("1");

  useEffect(() => { console.log(selectButton) }, [selectButton])


  return (
    <div className='food'>
      <TabMenu setSelectButton={setSelectButton} selectButton={selectButton} />
      <div className='menus'>
        <div style={selectButton == '1' ? { display: "block" } : { display: "none" }} className='main-food'>Ana yemek</div>
        <div style={selectButton == '2' ? { display: "block" } : { display: "none" }} className='snack'>Ara Yemek</div>
        <div style={selectButton == '3' ? { display: "block" } : { display: "none" }} className='drinks'>İçecek</div>
        <div style={selectButton == '4' ? { display: "block" } : { display: "none" }} className='dessert'>Tatlı</div>
      </div>
    </div>
  )
}
