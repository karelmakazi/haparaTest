import React from 'react'
import './VectorDisplay.css'


const VectorDisplay = ({vector, uiState})=> {
  return(
    <div className='vector-wrapper'>
    {/* LOGO */}
      {(vector === 'logo') && <div className='vector-logo'>
        <svg 
          className='logo_inactive'width="20" height="20" 
          viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
          <path d="M5 10C2.243 10 0 7.757 0 5C0 2.24275 2.243 0 5 0C7.758 0 10 2.24275 10 5C10 7.757 7.758 10 5 10Z" fill="white"/>
          <path d="M14.1667 6.69275L17.5 12.4073V2.5H11.176C11.49 3.27325 11.6667 4.11625 11.6667 5C11.6667 8.67675 8.67675 11.6667 5 11.6667C4.11625 11.6667 3.27325 11.4893 2.5 11.175V17.5H7.862L14.1667 6.69275Z" fill="#A1A9B5"/>
          <path d="M14.1668 10L8.33325 20H20L14.1668 10Z" fill="#6C7988"/>
          </g>
        </svg>
        <svg 
          className='logo_active' width="20" height="20" 
          viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10C2.243 10 0 7.757 0 5C0 2.24275 2.243 0 5 0C7.758 0 10 2.24275 10 5C10 7.757 7.758 10 5 10Z" fill="white"/>
          <path d="M14.1667 6.69275L17.5 12.4073V2.5H11.176C11.49 3.27325 11.6667 4.11625 11.6667 5C11.6667 8.67675 8.67675 11.6667 5 11.6667C4.11625 11.6667 3.27325 11.4893 2.5 11.175V17.5H7.862L14.1667 6.69275Z" fill="#A1A9B5"/>
          <path d="M14.1668 10L8.33325 20H20L14.1668 10Z" fill="#6C7988"/>
        </svg>
      </div>}

    {/* MENU */}
      {(vector === 'arrow') && <div className={`vector-arrow`}>
      <svg 
      className={`arrow arrow_${uiState}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.207173 0.208301C-0.329011 0.744485 0.34494 1.29392 0.34494 1.29392C1.56281 2.51179 3.99856 4.94754 3.99856 4.94754C3.99856 4.94754 6.43677 2.50933 7.65588 1.29022C7.65588 1.29392 8.29398 0.712336 7.78995 0.208301C7.28591 -0.295733 6.71083 0.346336 6.71083 0.339568C5.80674 1.24366 3.99856 3.05184 3.99856 3.05184C3.99856 3.05184 2.19489 1.24817 1.29305 0.346336C1.29305 0.339568 0.743356 -0.327882 0.207173 0.208301Z" fill="white"/>
        </svg>
      </div>
      }

    </div>
  )
}

export default VectorDisplay