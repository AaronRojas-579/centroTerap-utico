import React, { useEffect, useRef, useState } from 'react'
import { dataCarrousel } from '../assets/data';

export const CarruselMain = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);

  const scrollToImage =(direction)=>{
    if(direction === 'prev'){
        setCurrentIndex(curr =>{
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr-1;
        })
    }else{
        const isLastSlide = currentIndex === dataCarrousel.length - 1;
        if(!isLastSlide){
            setCurrentIndex(curr=>curr + 1);
        }

    }
  }

  return (
    <div className="main_carrusel ">
      <div className="slider-container">
        <div className='leftArrow' onClick={()=>scrollToImage('prev')}>&#8678;</div>
        <div className='rightArrow'onClick={()=>scrollToImage('next')}>&#8680;</div>
        <div className="container-images">
          <ul ref={listRef}>
            {
              dataCarrousel.map((item) => {
                return <li key={item.id}>
                    <img src={item.imgUrl} className='imgCarrusel'
          />
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div >
  )
}