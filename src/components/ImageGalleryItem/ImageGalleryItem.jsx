import { ImageGalleryItem, Image } from './ImageGalleryItem.styled';

export const GalleryItem = ({ items, toggleModal }) => {
  return items.map(el => {
    return (
      <ImageGalleryItem
        key={el.id}
        onClick={({ target: { alt, src } }) => {
          toggleModal(alt,src)
        }}
      >
        <Image src={el.largeImageURL} alt={el.tags} />
      </ImageGalleryItem>
    );
  });
};

