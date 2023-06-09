export default interface Item {
  lid: number,
  title: string,
  description: string,
  img: string[],
  categories: string[],
  price: number,
  sold: boolean,
  username: string
  location: string,

  likes: number,
  isLiked: boolean,
};