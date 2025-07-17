// import { auth } from "@/auth";
import CartProducts from "@/components/cart/CartProducts";
import Container from "@/components/Container";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Cart | Amazon online shopping",
};

const CartPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  const { user } = session;

  return <Container>{session && <CartProducts user={user} />}</Container>;
};

export default CartPage;
