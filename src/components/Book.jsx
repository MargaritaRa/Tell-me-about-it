import { useState } from 'react';
import Pages from './Pages'


const Book = () => {
  const [currentLocation, setCurrentLocation] = useState(1);

  const openBook = () => {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
  };

  const closeBook = (isAtBeginning) => {
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(50%)";
    nextBtn.style.transform = "translateX(50%)";
};

  const goNextPage = () => {
    // Implement logic to flip to the next page
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook();
                break;
            default:
                throw new Error("unknown state")
        }
        currentLocation++;
    }
  };

  const goPrevPage = () => {
    // Implement logic to flip to the previous page
    if (currentLocation > 1) {
      setCurrentLocation(currentLocation - 1);
    }
  };

  return (
    <div id="book" className="book">
      {/* Render pages dynamically based on currentLocation */}
      <Pages pageNumber={1} currentLocation={currentLocation} />
      <Pages pageNumber={2} currentLocation={currentLocation} />
      <Pages pageNumber={3} currentLocation={currentLocation} />

      {/* Previous and Next buttons */}
      <button id="prev-btn" onClick={goPrevPage}>
        <span className="material-symbols-outlined">arrow_circle_left</span>
      </button>
      <button id="next-btn" onClick={goNextPage}>
        <span className="material-symbols-outlined">arrow_circle_right</span>
      </button>
    </div>
  );
};

export default Book;
