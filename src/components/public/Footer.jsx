// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaMobileAlt,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  const [showArtistDetails, setShowArtistDetails] = useState(false);
  return (
    <footer className="bg-[#e6e7e8] text-gray-700 text-sm">
      {/* Top Red Banner */}
     <div className=" bg-red-600 h-20 text-center text-38 font-sans">
      <div className="  text-white text-center py-2 pt-5 font-semibold text-2xl">
        HOMEGROWN INDIAN BRAND
      </div>
      </div>

      <div className="bg-white h-26">
      <div className=" text-black text-center py-4 text-4xl font-semibold pt-8 h-full" >
        Over <span className="font-bold">6 Million</span> Happy Customers
      </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* NEED HELP */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">NEED HELP</h3>
          <ul className="space-y-1 text-sm">
            {[
              <Link to="/contact">Contact</Link>,
              <Link to="/track">Track</Link>,
             <Link to="/refund">Refund</Link>, 
            
              <Link to="/faq">FAQs</Link>,
              <Link to="/account">My Account</Link>,
            ].map((item) => (
              <li
                key={item}
                className="hover:underline cursor-pointer hover:text-red-500"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <span
                  className="w-5 h-5 flex items-center justify-center 
                   border border-black rounded-full text-xs"
                >
                  ₹
                </span>
                COD Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <span
                  className="w-5 h-5 flex items-center justify-center 
                   border border-black rounded-full text-xs"
                >
                  ⟳
                </span>
                30 Days Easy Returns & Exchanges
              </span>
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {[
            <Link to="/about">About</Link>, 
            <Link to="/investor">Investor Relation</Link>,
             <Link to="/careers">Careers</Link>,
             <Link to="/gift">Gift Vouchers</Link>,
              
              
             
              "Community Initiatives",
            ].map((item) => (
              <li
                key={item}
                className="hover:underline cursor-pointer  hover:text-red-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MORE INFO */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">MORE INFO</h3>
          <ul className="space-y-2">
            {["T&C", "Privacy Policy", "Sitemap", "Get Notified", "Blogs"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:underline cursor-pointer hover:text-red-500"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* STORE NEAR ME */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">STORE NEAR ME</h3>
          <ul className="space-y-2">
            {["Mumbai", "Pune", "Bangalore", "Hubballi"].map((item) => (
              <li
                key={item}
                className="hover:underline cursor-pointer hover:text-red-500"
              >
                {item}
              </li>
            ))}
            <li className="text-blue-700 font-semibold cursor-pointer">
              View More
            </li>
          </ul>
        </div>
      </div>

      {/* App Download */}
      <div className="text-center mt-6">
        <p className="flex items-center justify-center gap-2 font-semibold text-sm mb-2">
          <FaMobileAlt />
          EXPERIENCE THE SOULED STORE APP
        </p>

        <div className="flex justify-center gap-3 mt-1">
          <img src="/footer_img/googleplay.png" className="h-18 " />
          <img src="/footer_img/app.png" className="h-9 mt-4" />
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-end items-center gap-3 max-w-6xl mx-auto px-6 mt-4">
        <span className="text-sm">Follow Us:</span>

        {/* Facebook */}
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer hover:translate-1">
          <a href="https://www.facebook.com/souledstore/">
            <FaFacebookF className="text-white text-lg" />
          </a>
        </div>

        {/* Instagram */}
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-400 cursor-pointer hover:translate-1">
          <a href="https://www.instagram.com/TheSouledStore/">
            <FaInstagram className="text-white text-lg" />
          </a>
        </div>

        {/* Snapchat */}
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400 cursor-pointer hover:translate-1">
          <a href="https://www.snapchat.com/@thesouledstore">
            <FaSnapchatGhost className="text-white text-lg" />
          </a>
        </div>

        {/* Twitter */}
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black cursor-pointer hover:translate-1">
          <a href="https://x.com/TheSouledStore">
            <FaTwitter className="text-white text-lg" />
          </a>
        </div>
      </div>

      <div className="bg-[#e6e7e8] py-4 ">
        <div className="max-w-6xl mx-auto px-2 py-4">
          {/* Artist Details Header */}
          <div
            onClick={() => setShowArtistDetails(!showArtistDetails)}
            className="bg-[#e6e7e8] border px-4 py-3 flex justify-between items-center text-sm cursor-pointer"
          >
            <h2 className="text-red-600 font-semibold tracking-wide uppercase">
              WHO WE ARE
            </h2>

            <span className="text-red-600 text-xl font-bold">
              {showArtistDetails ? "−" : "+"}
            </span>
          </div>

          {/* Artist Details Content */}
          {showArtistDetails && (
            <div className="border border-t-0 bg-[#e6e7e8] px-4 py-2 text-xs text-gray-700 leading-relaxed space-y-3">
              <p>Marvel Merchandise: Unleash Your Inner Superhero:</p>
              <p>
                Alright, folks! If you've ever dreamed of swinging through New
                York City or defending the galaxy, then you, my friend, are in
                for a treat! Our Marvel merchandise isn't just a collection;
                it's your new superhero uniform. We've got everything from
                Spiderman merchandise to Loki merchandise-because who doesn't
                want to dress like a god of mischief, right? And, of course, our
                Avengers merchandise is perfect for assembling your own team (of
                outfits).
              </p>
              <p>
                Marvel merchandise isn't just clothes; it's a lifestyle. Whether
                you're after Marvel official merchandise or just a bit of Iron
                Man merch to brighten your day, we've got you covered faster
                than Quicksilver running a marathon. And let's not forget our
                Black Panther merchandise; it's so cool, even the Wakandans are
                jealous.
              </p>
              <p>Marvel Official Merchandise: From Head to Toe in Hero Mode</p>
              <p>
                Step into a wardrobe where Captain America merchandise is the
                uniform of choice, and Groot merchandise makes you the tallest
                one in the room-literally. Swing into action with style in our
                Spiderman merchandise, or if you're feeling magical, wrap
                yourself up in some spell-binding Doctor Strange merchandise.
                Get ready to accessorise your superhero landing!
              </p>
              <p>All Weather Hoodies</p>
              <p>
                No matter if it's raining like a scene from Thor or as chilly as
                Captain America's ice bath, our All Weather Hoodies are here to
                save the day! Featuring Marvel merchandise that keeps you warm
                and dry, it's like having an invisible force field against the
                elements.
              </p>
              <p>Backpacks</p>
              <p>
                Carry your gear like a true member of the Avengers with our
                heroic Backpacks. These aren't just any backpacks; they're
                equipped with special compartments for your Marvel comics
                merchandise, gadgets, and even a secret pocket for your
                superhero snacks!
              </p>
              <p>Beach Shorts</p>
              <p>
                Hit the beach with style in our Beach Shorts that scream Marvel
                merchandise. Whether you're lounging like Loki or playing
                volleyball like Vision, these shorts are your best bet for sun,
                sand, and surf.
              </p>
              <p>Boxer Shorts</p>
              <p>
                Our Boxer Shorts featuring cheeky Marvel merchandise prints are
                perfect for those who prefer their heroics a bit more...
                undercover. Comfortable enough to wear all day and all night,
                because you never know when you'll need to jump into action!
              </p>
              <p>Boyfriend T-Shirts</p>
              <p>
                Loose, comfy, and stylish, these Boyfriend T-Shirts are perfect
                for a casual day out or a Netflix Marvel marathon at home. Pair
                it with Black Panther sneakers for that extra kick!
              </p>
              <p>Men's Collection: Everything from Jeans to Joggers</p>
              <p>
                Gentlemen, enhance your wardrobe with our Men's Collection,
                featuring everything from Men Jeans for your casual days to Men
                Joggers for those heroic night-outs. Don't forget to slip into
                Men High Top Sneakers to elevate your hero status.
              </p>
              <p>Women's Wear: High Tops to Oversized Tees</p>
              <p>
                Ladies, whether you're scaling buildings or scaling up your
                fashion game, our Women High Top Sneakers and Women Oversized
                T-Shirts are just what every super-heroine needs. Mix and match
                with Women Shirts for a look that's both powerful and chic.
              </p>
              <p>Boys Cotton Range</p>
              <p>
                For the little heroes in training, our Boys Cotton range from
                Cargo Joggers to Co-Ord Sets and Full Sleeve T-Shirts, ensures
                they're always adventure-ready. Durable, stylish, and stamped
                with their favourite Marvel merchandise, they're perfect for
                conquering playground villains.
              </p>
              <p>Heroic Genders: Fashion for Every Avenger</p>
              <p>
                Whether you identify more with Iron Man or Black Widow, our
                Marvel merchandise transcends all gender norms. With offerings
                like unisex Hoodies and T-Shirts, plus gender-specific items
                like Men's Utility Shorts and Women's Zipper Polos, there's
                something for every hero in your family.
              </p>
              <p>
                We celebrate diversity with styles that fit every body type and
                every gender, empowering all to express their fandom in comfort
                and style.
              </p>
              <p>Sizing: A Fit for Every Hero</p>
              <p>
                Our Marvel merchandise doesn't just come in all styles; it comes
                in all sizes too! From petite heroes at XXS to our more
                Thor-sized fans at XXXL, everyone gets to celebrate their
                favourite universe.
              </p>
              <p>
                Our kids' sizes range from 2-3Y to 11-12Y, ensuring that even
                the littlest heroes can join in the fun. And with adult sizes
                stretching up to UK size 11, no one is left out. Remember, it's
                not just about the size; it's about how you wear your hero on
                your sleeve!
              </p>
              <p>Why Just Wear When You Can Marvel?</p>
              <p>
                With our Marvel merchandise, you're not just wearing a brand;
                you're embracing a legacy of heroics and adventure. From
                Deadpool Merchandise to Captain America merchandise, and let's
                not forget our fellow geeky goods like Naruto merchandise, Harry
                Potter merchandise, and even Friends merchandise, there's
                something for every kind of hero in our store.
              </p>
              <p>
                Why blend in when you were born to stand out? With Marvel
                merchandise, you bring the pages of your favourite comics to
                life, and who knows? Maybe even save the world. Or at least,
                look incredibly cool while trying. Join us at The Souled Store,
                and let's make every day epic!
              </p>
              <p>More Than Just Fandom Merch at The Souled Store</p>
              <p>
                The Souled Store takes immense pride in crafting unique products
                under our own brand that reflect our love for creativity and all
                things pop culture. Besides popular fandom merch, we also offer
                TSS Originals, a wide array of products that feature witty puns,
                creative designs, and vibrant prints inspired by various
                cultural trends. From apparel to accessories, we've got it all!
              </p>
              <p>How to Shop and Score at The Souled Store?</p>
              <p>
                Want your shopping spree to be as smooth as your last swipe? Zip
                over to The Souled Store. Use our seamless app or drop into one
                of our physical stores in select cities. Easy-peasy, right?
              </p>
              <p>
                But what if something doesn't quite fit your vibe? No worries!
                With our 30 days easy returns, you've got plenty of time to
                decide whether your new threads are keepers or not. So go ahead,
                shop stress-free!
              </p>
              <p>Shop Heartily with The Souled Store Membership!</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Payment & Shipping */}
      <div className="border-t border-gray-300 pt-3 pb-5 text-xs text-gray-600 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-5 flex-wrap mx-12">
          <span>100% Secure Payment:</span>
          <img src="/footer_img/phonepay.png" className="h-8" />
          <img src="/footer_img/gpay1.png" className="h-8" />
          <img src="/footer_img/pay.png" className="h-8" />

          <img src="/footer_img/Amazon.png" className="h-8" />
          <img src="/footer_img/master.png" className="h-4" />
          <img src="/footer_img/cash.png" className="h-8" />
          <img src="/footer_img/mobi.png" className="h-8" />
        </div>

        <div className="flex items-center gap-2 flex-wrap mx-12">
          <span>Shipping Partners:</span>
          <img src="/footer_img/ecom.png" className="h-8" />
          <img src="/footer_img/dtdc.png" className="h-5 w-10" />
          <img src="/footer_img/del.png" className="h-8" />
          <img src="/footer_img/xpress.png" className="h-8" />
        </div>
      </div>
      <div>
        <p className="justify-center text-center">
          <FaRegCopyright />{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
