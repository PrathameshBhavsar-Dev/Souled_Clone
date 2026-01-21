import React, { useState } from "react";
import { IoIosArrowForward,IoIosArrowDown  } from "react-icons/io";


const faqData = {
  gift: [
    {
      question: "What denominations are gift cards available in?",
      answer:
        "Gift cards are currently available in denominations of INR 2000.",
    },
    {
      question: "How do I use my gift card balance?",
      answer:
        "Scratch the code on your gift card to reveal a 16-digit code. Use it online in the Gift Voucher section at checkout or at retail stores by sharing the OTP generated at billing.",
    },
    {
      question: "How are returns processed against gift card purchases?",
      answer:
        "Returned amounts up to INR 2000 are credited back to the gift card. Any extra amount is refunded to the original payment method or TSS Money.",
    },
    {
      question: "How long are my gift cards valid for?",
      answer: "All gift cards are valid till October 2026.",
    },
  ],

  sale: [
    {
      question: "Are sale items returnable?",
      answer: "Sale items are eligible for return as per store policy.",
    },
  ],

  misc: [
    {
      question: "How can I contact customer support?",
      answer: "You can reach us via email or the Contact Us page.",
    },
  ],
};

const Refund = () => {
  const [activeCategory, setActiveCategory] = useState("gift");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* ================= LEFT MENU ================= */}
        <div className="w-full lg:w-1/4 space-y-2 text-sm">
          {Object.keys(faqData).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key);
                setOpenIndex(null);
              }}
              className={`block w-full text-left py-2 ${
                activeCategory === key
                  ? "text-teal-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full lg:w-3/4">
          {faqData[activeCategory].map((item, index) => (
            <div key={index} className="border-b">
              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
              >
                {item.question}
                <span className="text-xl">
                  {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="pb-4 text-sm text-gray-600">
                  {item.answer}
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
