import React, { useState } from 'react';
import { state } from '../../state';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ProjectsSlider.css'

const ProjectsSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {state.map((slide, index) => {
        return (
          <div>
            <div className='slider'>
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current &&
                  (<h3 className='name'>{slide.description}</h3>)
                }
                {index === current &&
                  (<img src={slide.image} alt='image' className='image' />)
                }
              </div>
            </div>
            <div className='link-wrapper'>
              {index === current && (
                <button className='button'>
                  <a href={slide.linkDeploy}>Посмотреть сайт</a>
                </button>)}
              {index === current && (
                <button className="button">
                  <a href={slide.linkCode}>Исходный код</a>
                </button>)}
            </div>

          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSlider;