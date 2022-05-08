import React from 'react';
import style from './image.module.less';

const ImageTile = (props) => {
  const {
    img, img_desc, alt, width,
  } = props;
  return (
    // <div className={style.imageTile}>
      <div className={style.imageBlock}>
        <img
          src={`${img}`}
          width={width || 64}
          alt={alt || ''}
        />
        <div className={style.tileCaption}>{ img_desc || ''}</div>
      </div>
    // </div>
  );
};

export default ImageTile;
