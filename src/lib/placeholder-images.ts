import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
