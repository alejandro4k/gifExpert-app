import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  const [selected, setSelected] = useState('')
  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  const onSelect = key => {
    setSelected(key)
  }
  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' })
 
  const giftSections = images.map((img) => (
    <GifGridItem key={img.id} {...img} selected={selected} />
  ))
  return (
    <>
      <h3 className="animate__animated animate__slideInLeft">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
      <ScrollMenu
          data={giftSections}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
        
        />
    </>
  );
};

export default GifGrid;
