// import { Component } from 'react';
// import { Loader } from 'components/Loader/Loader';
// import { getPictures } from 'servises/getPictures';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import axios from 'axios';
import css from './ImageGallery.module.css'

export const ImageGallery = ({children, onClick}) => {
  return <ul className={css.ImageGallery} onClick={onClick}>{children}</ul>;
}
