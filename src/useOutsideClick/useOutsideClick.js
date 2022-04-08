import {useState, useEffect} from 'react'

export const useOutsideClick = (element, initialState)=> {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(()=> {
    const pageClickEvent = (event)=> {
      if(element.current !== null && !element.current.contains(element.target)) {
        setIsActive(!isActive)
      }
    }

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return ()=> {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isActive, element])

  return [isActive, setIsActive]
}