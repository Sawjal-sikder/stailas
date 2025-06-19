import React from "react";
import Header from "../../../component/Header";
import Image from "../../../component/Image";
import CartImage from "../../../assets/image/service/cart.png";
import Button from "../../../component/Button";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div className="px-4 lg:px-40 py-2">
      <Header
        className="pr-20 lg:pb-20"
        text={`For Women Who Want to Feel More “Put Together” Without the Effort`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10">
        {/* On small screens, reverse order using flex-col-reverse */}
        <div className="order-2 md:order-1">
          <Image src={CartImage} alt={"Cart Image"} className="pt-5" />
          <NavLink to={"/outfit"}>
            <Button
              text="Start With One Outfit"
              className="lg:hidden my-4 text-center block mx-auto"
            />
          </NavLink>
        </div>
        <div className="font-inter text-primary order-1 md:order-2">
          <p className="text-[12px] lg:text-[20px] py-4 pr-0 md:pr-14">
            Whether you’re back in the office, starting over, chasing a toddler,
            or just tired of second-guessing your look—Stailas is here to help
            you glow up quietly.
          </p>
          <p className="text-[12px] lg:text-[20px] lg:pt-5">
            No pressure. Just practical, beautiful style—your way.
          </p>
          <div className="flex">
            <NavLink to={"/outfit"}>
              <Button
                text="Start With One Outfit"
                className="hidden lg:block lg:w-[345px] mt-10 p-5 rounded-lg"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
