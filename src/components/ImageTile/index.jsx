import React from 'react';
import style from './image.module.less';

const ImageTile = (props) => {
  const {
    img, img_desc, alt, height, width,
  } = props;
  return (
    // <div className={style.projectTile}>
      <div className={style.imageBlock}>
        <img
          src={`${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
        <div className={style.tileCaption}>{ img_desc || ''}</div>
      </div>
    // </div>
  );
};

export default ImageTile;
