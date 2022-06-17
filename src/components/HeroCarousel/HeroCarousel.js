import { useState } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import sampleImage1 from "../../assets/images/sampleImage1.jpg";
import sampleImage2 from "../../assets/images/sampleImage2.jpg";
import sampleImage3 from "../../assets/images/sampleImage3.jpg";
const featuredImages = [sampleImage1, sampleImage2, sampleImage3];

let count = 0;

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };


  return (
    <>
      <div className="max-w-screen-xl m-auto ">
        <div className="w-full relative select-none">
          <div className="aspect-w-16 aspect-h-9">
            <img src={ featuredImages[currentIndex] } alt="" />
          </div>``

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={ handleOnPrevClick }>
              { " " }
              <AiOutlineVerticalRight size={ 35 } />
            </button>
            <button onClick={ handleOnNextClick }>
              { " " }
              <AiOutlineVerticalLeft size={ 35 } />
            </button>
          </div>
        </div>

        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  );
};

export default HeroCarousel;
