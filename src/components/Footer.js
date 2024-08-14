import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/sosmed/Facebook.png";
import twitter from "../assets/sosmed/Twitter.png";
import Instagram from "../assets/sosmed/Instagram.png";

export default function Footer() {
  return (
    <div className=" container mx-auto max-w-6xl flex flex-row space-x-24">
      <div className="flex-1 space-y-5">
        <img alt="icon-lasLesVpn" src={logo} className="w-36" />
        <div>
          LaslesVPN is a private virtual network that <br />
          has unique features and has high security.
        </div>
        <div className="flex flex-row">
          <img alt="facebook" src={facebook} className="h-16 w-16" />
          <img alt="twitter" src={twitter} className="h-16 w-16" />
          <img alt="instagram" src={Instagram} className="h-16 w-16" />
        </div>
        <div>©2020LaslesVPN</div>
      </div>
      <div>
        <div className="text-lg font-semibold mb-6">Product</div>
        <ul className="space-y-6 text-sm text-gray-500">
          <li>Pricing</li>
          <li>Locations</li>
          <li>Server</li>
          <li>Countries</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
      <div className="text-lg font-semibold mb-6 ">Engange</div>
      <ul className="space-y-6  text-sm text-gray-500">
        <li>LaslesVPN ?</li>
        <li>FAQ</li>
        <li>Tutorials</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
      </div>
      
      <div>
        <div className="text-lg font-semibold mb-6">Earn Money</div>
        <ul className="space-y-6  text-sm text-gray-500">
          <li>Affiliate</li>
          <li>Become Partner</li>
        </ul>
      </div>
    </div>
  );
}
