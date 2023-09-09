import React from 'react'

import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs"

const HeaderTop = () => {
  return <div className="border-b border-gray-200 hidden sm:block">
    <div className="containter py4">
        <div className="flex justify-between items-center my-5 mx-16">
            <div className="hidden lg:flex gap-1">
                <div className="header_top__icon_wrapper">
                    <BsFacebook />
                </div>
                <div className="header_top__icon_wrapper">
                    <BsTwitter />
                </div>
                <div className="header_top__icon_wrapper">
                    <BsInstagram />
                </div>
                <div className="header_top__icon_wrapper">
                    <BsLinkedin />
                </div>
            </div>



<div className="text-gray-500 text-[12px]">
    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - 100NOK
</div>

<div className="flex gap-4">
    <select
        className="text-gray-500 text-[12px] w-[70px]"
        name="currency"
        id="currency"
>
    <option value="USD $">USD $</option>
    <option value="EUR €">EUR €</option>
    <option value="NOK">NOK</option>
    </select>

    <select 
    className="text-gray-500 text-[12px] w-[80px]"
    name="language"
    id="language"
    >
        <option value="English">English</option>
        <option value="Norwegian">Norwegian</option>
    </select>
</div>

        </div>
    </div>
  </div>
};

export default HeaderTop