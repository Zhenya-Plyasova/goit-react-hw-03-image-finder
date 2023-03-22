import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    state = {

    };

    render() {
    const { pictures, isLoading } = this.props;
    return (
      <>
        {pictures &&
          pictures.map(picture => {
            return (
              <li key={picture.id} className={css.ImageGalleryItem}>
                <img
                  className={css.ImageGalleryItemImage}
                  src={picture.webformatURL}
                  alt={picture.largeImageURL}
                />
              </li>
            );
          })}
        {pictures.length === 0 && this.props.request && isLoading===false &&(
          <p
            className={css.p}
          >{`за запитом "${this.props.request}" нічого не знайдено!`}</p>
        )}
      </>
    );
  }
}
