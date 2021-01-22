import React from 'react';


export const GifGridItem = ({id,title,url,selected}) => {
    return (
        //card animate__animated animate__fadeIn animate__slow
        <div key={id} className={`card animate__animated animate__backInLeft`}>
            <img src={url} alt={title} />
            <p>{title}</p>
            
        </div>
    )
}
