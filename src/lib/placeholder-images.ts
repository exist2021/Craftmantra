import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrls: string[];
  imageHint: string;
  category: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
