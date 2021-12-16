import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer"


const Images = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        "/screenshot_basecamp.png",
        "/screenshot_grasslands.png",
        "/screenshot_cave.png",
        "/screenshot_city.png",
        "/screenshot_forest_entrance.png",
        "/screenshot_gate.png",
        "/screenshot_radio.png",
        "/screenshot_golem.png",
        "/screenshot_den.png",
    ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="feature-container"> 
      {images.map((src, index) => (
        <div className="img-container">
          <Image
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            alt=""
            className={`img-feature ${index % 2 === 0 ? "left" : ""}`}
          />
        </div>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(41,29,43,0.7)"
          }}
        />
      )}
    </div>
  );
}

export default Images
