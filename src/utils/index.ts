import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { store } from "@/store/cartStore";
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "../../public/assets";
import { store } from "@/store/store";

export const bannerImages = [
  { title: "bannerOne", source: bannerImgOne },
  { title: "bannerTwo", source: bannerImgTwo },
  { title: "bannerThree", source: bannerImgThree },
  { title: "bannerFour", source: bannerImgFour },
  { title: "bannerFive", source: bannerImgFive },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateCartTotals = () => {
  const { cartProduct } = store();
  const totalAmt = cartProduct.reduce(
    (sum, product) => {
      sum.regular += product?.price * product?.quantity!;
      sum.discounted +=
        product?.price *
        (product?.discountPercentage / 100) *
        product?.quantity!;
      return sum;
    },
    { regular: 0, discounted: 0 }
  );

  return { totalAmt };
};
