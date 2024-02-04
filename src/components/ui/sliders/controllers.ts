import { MutableRefObject, SetStateAction } from 'react';

type SwiperRef = MutableRefObject<any>;
type SetNavigationIndex = SetStateAction<any>;

interface Swiper {
  activeIndex: number;
  slideTo: (index: number) => void;
  slidePrev: () => void;
  slideNext: () => void;
}

class SwiperHandler {
  constructor(
    private swiperRef: SwiperRef,
    private dataLength: number,
    private setNavigationIndex: SetNavigationIndex
  ) {}

  private get swiper(): Swiper {
    return this.swiperRef.current.swiper;
  }

  slideTo(index: number): void {
    this.swiper.slideTo(index);
    this.setNavigationIndex(index);
  }

  slidePrev(): void {
    const { swiper, dataLength, setNavigationIndex } = this;
    if (swiper.activeIndex === 0 && dataLength) {
      this.slideTo(dataLength - 1);
    } else {
      swiper.slidePrev();
      setNavigationIndex(swiper.activeIndex);
    }
  }

  slideNext(): void {
    const { swiper, dataLength, setNavigationIndex } = this;
    if (swiper.activeIndex + 1 === dataLength) {
      this.slideTo(0);
    } else {
      swiper.slideNext();
      setNavigationIndex(swiper.activeIndex);
    }
  }

  slideToNav(nav: number): void {
    this.setNavigationIndex(nav);
    this.slideTo(nav);
  }
}

export type HandleSlidesProps = {
  ev?: 'prev' | 'next';
  navigationIndex: number;
  swiperRef: SwiperRef;
  dataLength: number;
  setNavigationIndex: SetNavigationIndex;
};

export const handleSlides = ({
  ev,
  navigationIndex,
  swiperRef,
  dataLength,
  setNavigationIndex,
}: HandleSlidesProps): void => {
  const swiperHandler = new SwiperHandler(
    swiperRef,
    dataLength,
    setNavigationIndex
  );

  if (ev === 'prev') {
    swiperHandler.slidePrev();
  } else if (ev === 'next') {
    swiperHandler.slideNext();
  } else if (navigationIndex || navigationIndex === 0) {
    swiperHandler.slideToNav(navigationIndex);
  }
};
