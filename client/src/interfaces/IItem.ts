export default interface IItem {
  lid: number,
  title: string,
  description: string,
  img: string[],
  categories: string[],
  price: number,
  sold: boolean,
  username: string
  location: string,
  sellerPicture: string,

  likes: number,
  isLiked: boolean,
};