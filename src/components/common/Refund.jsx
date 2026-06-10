import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const faqData = {
  "GIFT CARD FAQ": [
    {
      q: "What denominations are gift cards available in?",
      a: "Gift cards are currently available in denominations of INR 2000",
    },
    {
      q: "How do I use my gift card balance?",
      a: "There is a scratch code at the bottom right of your gift card. Scratch it to reveal a 16 digit code. You can use the code at any of our retail stores or online to redeem the voucher amount against one order only.For online: Head to your cart page and enter the code in the Gift Voucher section and apply For retail: Ask the store staff to use your gift code at the time of billing. The store staff will ask for your number to generate otp. This otp is compulsory for us to validate the usage of your gift card. Please provide the otp for redemption.",
    },
    {
      q: "How are returns processed against gift card purchases?",
      a: "Whenever you return a product purchased by our gift card the order amount up to INR 2000(gift card value) will be credited back to the gift card. Please retain your gift cards in case of return so that you can reuse the card after the return has been processed. Any balance order amount over and above the gift card value will be credited back to the original purchase method or TSS Money according to your choice.",
    },
    {
      q: "How long are my gift cards valid for?",
      a: "All Gift cards are valid till October 2026",
    },
  ],

  

  "SALE TERMS & CONDITIONS": [
    {
      q: "Sale starts on 00:00 on 29th November and ends on 2nd December, 23:59",
      a: "                                                                     ",
    },

    {
      q: "COD will not be applicable on certain pincodes*",
      a: "                                                                     ",
    },

    {
      q: "Sale active both online and offline for the defined period",
      a: "                                                                     ",
    },
  ],

  MISCELLANEOUS: [
    {
      q: "Contest",
      a: "What are the standard terms and conditions applicable to contests run by The Souled Store? You can find the standard terms and conditions for our contests here. Here is the link- https://www.thesouledstore.com/contest-terms-and-conditions",
    },
    {
      q: "Sale price",
      a: "The product I want to return was bought at discount. Will I get refunded the full amount? No. You will only receive the exact amount paid for the product.",
    },
    {
      q: "Try the product",
      a: "There is no try-and-buy option available for the website/app purchases. However, to make sure you pick the right size, we have a size chart with measurements on our product pages. You can also visit any of our retail stores if they are present in your city. For any queries, please write to us at connect@thesouledstore.com.",
    },
    {
      q: "Will I automatically receive marketing emails from you after registration?",
      a: "You will automatically get subscribed to our marketing emails and SMSs after registering with us. In case you do not want to receive these, you can click on the unsubscribe link in the email.",
    },
    {
      q: "Are gift certificates refundable?",
      a: "Gift certificates are non-refundable.",
    },
    {
      q: "Price Variations",
      a: "Prices may vary due to offers or availability.",
    },
    {
      q: "No Refund Policy",
      a: "All purchases made during festival sales, promotional events, or pop-up stalls are strictly non-refundable.",
    },

    {
      q: "Exchange Policy (Case-by-Case Basis)",
      a: "Exchanges may be allowed only in exceptional cases and at the sole discretion of The Souled Store.",
    },
  ],


  "EXCLUSIVE MEMBERSHIP": [
    {
      q: "Is the fee all inclusive?",
      a: "The annual/monthly introductory offer of Rs. 299/199 is excl. GST. The Souled Store may revise this annual/monthly fee at any time, without prior intimation. However, such a price change will not affect anyone who has already purchased the membership.",
    },
    {
      q: "How long do these benefits last? Are there any benefts other than the ones mentioned?",
      a: "It depends on the plan you have purchased, you can check the validity under My Profile section under membership tab.",
    },
      {
      q: "I have created a exchange request. When will the product be picked up?",
      a: "Once we receive this request, someone from the courier partner's team will arrive at the address for a pickup within 2 business days. Please ensure the product(s) and the tags are intact on the product(s) for it to be accepted by the courier company.",
    },
    {
      q: "When will I get my exchanged product delivered?",
      a: "Your exchange product will be shipped from our warehouse after the returned product has been picked from your end. Orders in India, once shipped, are typically delivered in 1-4 business days in metros, and 4-7 business days for the rest of India. Delivery time may vary depending upon the shipping address and other factors (public holidays, extreme weather conditions, etc.).",
    },
  ],



  "RETURNS, EXCHANGE & REFUND": [
    {
      q: "What are the terms of the exchange policy?",
      a: "You can apply for an exchange for your order within 30 days after an order has been delivered. We have a reverse pick-up facility for most pin codes.",
    },
    {
      q: "How do I create a exchange request?",
      a: "Click on the exchange button next to the product you want to send us back. Select the reason for exchange from the dropdown and select the replacement size you wish to receive in exchange. Stock will be subject to availability.",
    },
      {
      q: "I have created a exchange request. When will the product be picked up?",
      a: "Once we receive this request, someone from the courier partner's team will arrive at the address for a pickup within 2 business days. Please ensure the product(s) and the tags are intact on the product(s) for it to be accepted by the courier company.",
    },
    {
      q: "When will I get my exchanged product delivered?",
      a: "Your exchange product will be shipped from our warehouse after the returned product has been picked from your end. Orders in India, once shipped, are typically delivered in 1-4 business days in metros, and 4-7 business days for the rest of India. Delivery time may vary depending upon the shipping address and other factors (public holidays, extreme weather conditions, etc.).",
    },
  ],


    "SHIPPING & TRACKING": [
    {
      q: "Can I modify the shipping address of my order before it has been shipped?",
      a: "Sorry, that is not possible at the moment as the system would have already passed the mobile number and address to our warehouse to pack and ship your product. That said, we never say never! You can always cancel the order before it has been packed and can place a new order. Don't worry, there are no cancellation charges..",
    },
    {
      q: "How long will it take for my order to be delivered?",
      a: "Orders in India, once shipped, are typically delivered in 1-4 business days in metros, and 4-7 business days for the rest of India. Delivery time may vary depending upon the shipping address and other factors (public holidays, extreme weather conditions, etc.).",
    },
      {
      q: "When will my products on pre-order be shipped?",
      a: "We ship pre-order products on the date given in the product description, as far as possible. However, there may be a slight delay in shipping in case of an unforeseen surge in demand or any similar issue. Rest assured, our customer experience team will keep you updated on the status of your order.",
    },
    {
      q: "Are there any additional shipping charges?",
      a: "The Souled Store provides FREE shipping for all orders above ₹499 in India. A shipping charge of ₹50 is payable only on orders below ₹499. The minimum order value should be ₹199 (excluding GST).",
    },
    {
      q: "How do I track my order?",
      a: " You can track your order once it has been dispatched from our warehouse. An email, SMS, and Whatsapp notification will be sent with a link. You can also track it from your account on the website by Selecting ‘Orders’ from the top right corner and then clicking on 'Track Order' for the respective Order ID.",
    },
    
     {
      q: "What if my order is undelivered?",
      a: "For prepaid orders, if our courier partners are unable to deliver the product and they send it back to us, we will initiate a refund as TSS Money to your The Souled Store account which will reflect within 24-48 hours of initiation.",
    },
     {
      q: "Does TSS have any physical stores?",
      a: "Yes, we are present offline as well, check the stores available around you- https://www.thesouledstore.com/stores-near-me",
    },

  ],


  
  "ORDERS & PAYMENT": [
    {
      q: "How to place an order?",
      a: "Browse through our wide range of products until you find something you like. After you’ve chosen what you want, select the relevant size, if applicable. You can check out our size chart for reference.",
    },
    {
      q: "How do I use my TSS Money?",
      a: "You can check how much TSS Money you have in your account once you login. Select My Account and click on ‘TSS Money’ from the list. You will be able to see Available Balance, Total Purchases and Usage History.",
    },
      {
      q: "Can I place an order on Cash On Delivery?",
      a: "Yes, you can place an order using Cash On Delivery. Maximum COD amount allowed is 4k.",
    },
    {
      q: "Do I have to have an account to place an order at The Souled Store?",
      a: "Yes, you need to sign up on our website/app to place an orders.",
    },
      {
      q: "Can I ship the products to an address that is different from my billing address?",
      a: "Yes, you can do that. Please check the address while placing an order.",
    },
      {
      q: "Can I order a product that is Out of Stock?",
      a: "No, that won't be possible. However, you can add your email address in the Notify me section. As soon as the product is back in stock you will receive the communication.",
    },
      {
      q: "Can I buy multiple products in a single order?",
      a: "Yes, you can buy multiple products in a single order.",
    },
      {
      q: "Why is my order not showing?",
      a: "This could be because of a technical error. Please share this with us over email - connect@thesouledstore.com.",
    },
      {
      q: "What do I do in cases of failed delivery?",
      a: "Incases of delivery attempt failed by courier partners, you will receive communications for next steps basis which we'll reattempt the delivery",
    },
      {
      q: "How do I use my TSS Points?",
      a: "You can check how many TSS Points you have in your account once you login. Select My Account and click on ‘TSS Points’ from the list. You will be able to see Current Active Points, Total Purchases, Usage History and Expired Points.",
    },
    {
      q: "How do I know if my order was placed successfully?",
      a: "Once you successfully place your order, you will receive a confirmation email & SMS/Whatsapp with details of your order and your order ID.",
    },
    {
      q: "Is there any additional charge for Cash On Delivery (COD) orders?",
      a: "We have a COD charge of Rs. 29/-. This is subject to change.",
    },
    {
      q: "Why can’t I see the Cash On Delivery (COD) option?",
      a: "If the Cash On Delivery (COD) option is not showing, it’s because this facility is unavailable for your postal code. You can either pay by Debit Card, Credit Card, or Net Banking, or you can get the products delivered to an alternate address (where COD is available).",
    },
    {
      q: "How do I cancel the order I have placed? ",
      a: "Please confirm if the information you’ve provided is correct i.e. account details, billing address, and password (for Net Banking); and that your internet connection wasn’t disrupted during the process.",
    },

  ],





  
};

const Refund = () => {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* ================= LEFT MENU ================= */}
        <div className="w-full lg:w-1/4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible text-xs sm:text-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`flex items-center justify-between whitespace-nowrap w-full text-left
                  ${
                    activeCategory === cat
                      ? "text-teal-600 font-semibold"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {cat}
                {activeCategory === cat && (
                  <IoIosArrowForward className="hidden lg:block text-teal-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ACCORDION ================= */}
        <div className="w-full lg:w-3/4">
          {faqData[activeCategory].map((item, index) => (
            <div key={index} className="border-b">
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-3 sm:py-4 text-left"
              >
                <span className="text-xs sm:text-sm font-medium text-gray-800">
                  {item.q}
                </span>

                <IoIosArrowDown
                  className={`text-base sm:text-lg text-gray-500 transition-transform duration-300
                    ${openIndex === index ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="pb-4 pr-6 text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Refund;
