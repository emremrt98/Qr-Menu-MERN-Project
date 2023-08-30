import React from 'react'

export default function Price() {
  return (
    <div className='price'>
      <div>
        <div className='price__details'>
          <div>
            <div>Fiyat:</div>
            <div>KDV:</div>
          </div>
          <div>
            <div>420 ₺</div>
            <div>24 ₺</div>
          </div>
        </div>
      </div>
      <div className='price__total-amount'>
        <div><span>Toplam:</span> <span>444 ₺</span></div>
      </div>

    </div>
  )
}
