import React from "react";
import { TbBulb } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { FaHandshake, FaMoneyBillWave, FaUsers, FaRocket, FaBalanceScale } from "react-icons/fa";
import { RiRocketLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";

const Careers = () => {
  const coreValues = [
    { title: "Think Different", desc: "Random ideas, new suggestions, and challenging the norm are always welcome.", icon: <TbBulb className="text-2xl text-teal-700" /> },
    { title: "Stay Weird, Be Yourself", desc: "The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.", icon: <GiBrain className="text-2xl text-teal-700" /> },
    { title: "Respect Everyone", desc: "Treat others how you'd like to be treated, and you have a happy family.", icon: <FaHandshake className="text-2xl text-teal-700" /> },
    { title: "Ownership Of Work", desc: "Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.", icon: <MdOutlineSelfImprovement className="text-2xl text-teal-700" /> },
    { title: "Take Initiative", desc: "Want to change something? Change it. See something that needs fixing? Fix it.", icon: <RiRocketLine className="text-2xl text-teal-700" /> },
    { title: "Growth & Learning", desc: "Work with various teams and departments and learn something new every day.", icon: <AiOutlineBarChart className="text-2xl text-teal-700" /> },
  ];

  const whyWork = [
    { title: "Competitive Salary", icon: <FaMoneyBillWave className="text-xl text-teal-700" /> },
    { title: "Open Office Culture", icon: <FaUsers className="text-xl text-teal-700" /> },
    { title: "Fast Growing Startup", icon: <FaRocket className="text-xl text-teal-700" /> },
    { title: "Equal Opportunities", icon: <FaBalanceScale className="text-xl text-teal-700" /> },
  ];

  return (
    <div className="w-full font-sans  px-3">
     
      <div className="bg-teal-700 text-white text-center py-12 px-4">
        <p className="max-w-2xl mx-auto mb-6">
          We're a bunch of nerdy, like-minded people who do what they love and love what they do. 
          We believe that Mondays should be as fun as Fridays. We're always on the lookout for souls 
          to join our ranks and add to the fun and creativity! If you think you will fit just right in, apply right away!
        </p>
        <button className="bg-white text-teal-700 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          View Jobs
        </button>
      </div>

     
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <p className="text-center mb-12 text-gray-600">
          One thing that we've tried to keep consistent through all these years is our core set of values and beliefs. 
          They have helped us get to where we are today, and they guide us as we grow. 
          We inculcate these values in everything we do - from the littlest of things to the biggest of decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coreValues.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-4 p-6 border rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">WHY WORK WITH US ?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {whyWork.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 p-4 border rounded-lg hover:shadow-md transition">
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">WE ARE GREAT PLACE TO WORK - CERTIFIED™</h3>
        <p className="text-gray-600 mb-6">
          Building and sustaining High-Trust, High-Performance Culture™
        </p>
        <div className="mx-auto w-32 h-32 bg-gray-200 flex items-center justify-center">
        
          <span className="text-gray-400 text-sm"><img src="careers.png"></img></span>
        </div>
      </div>
    </div>
  );
};

export default Careers;
