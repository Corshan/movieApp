import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({images}) => {
    console.log(images)
    const slideImages = images.map((image)=>(
        {
            url:`https://image.tmdb.org/t/p/w500${image.file_path}`
        }
    ))
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((image, index)=> (
            <div className="each-slide" key={index}>
              <div>
                <img src={image.url} alt="sample" height={400}/>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;