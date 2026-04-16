import { useState, useEffect } from "react";
import style from "./Slider.module.css";

const Slider = ({ images, autoPlayInterval = 3000 }) => {
  // Состояние для отслеживания текущего индекса изображения
  const [currentIndex, setCurrentIndex] = useState(0);

  // Состояние для управления автопрокруткой
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Функция для перехода к конкретному слайду
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Эффект для автопрокрутки
  useEffect(() => {
    // Если автопрокрутка выключена, не создаем интервал
    if (!isAutoPlaying) return;

    // Создаем интервал для автоматического переключения слайдов
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    // Очищаем интервал при размонтировании компонента
    // или при изменении зависимостей
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, autoPlayInterval, currentIndex]);
  // currentIndex в зависимостях нужен, чтобы интервал
  // пересоздавался при изменении слайда (для стабильности)

  return (
    <div className={style.sliderContainer}>
      <div className={style.sliderWrapper}>
        {/* Контейнер слайдов с трансформацией для прокрутки */}
        <div
          className={style.slidesContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={style.slide}>
              <img
                src={image.url}
                alt={image.alt || `Slide ${index + 1}`}
                className={style.slideImage}
              />
              {image.caption && (
                <div className={style.caption}>
                  <h3>{image.caption.title}</h3>
                  <p>{image.caption.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Кнопка предыдущего слайда */}
        <button
          className={`${style.sliderButton} ${style.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        {/* Кнопка следующего слайда */}
        <button
          className={`${style.sliderButton} ${style.nextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      {/* Контейнер для индикаторов (точек) */}
      <div className={style.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${style.dot} ${index === currentIndex ? style.activeDot : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Кнопка управления автопрокруткой */}
      <button
        className={style.autoPlayButton}
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
      >
        {isAutoPlaying ? "⏸" : "▶"}
      </button>
    </div>
  );
};

export default Slider;
