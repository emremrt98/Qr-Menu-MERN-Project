import React from 'react'
import TabMenu from '../../components/tabMenu/TabMenu'
export default function Food() {
  return (
    <div className='food'>
      <TabMenu />
      <div className='menus'>
        <div className='main-food'>Ana yemek</div>
        <div className='snack'>Ara Yemek</div>
        <div className='drinks'>İçecek</div>
        <div className='dessert'>Tatlı</div>
      </div>
    </div>
  )
}
