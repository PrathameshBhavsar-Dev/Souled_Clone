import React, { useState } from 'react';
import mens1 from '../../assets/mens (1).jpg';
import mens2 from '../../assets/mens (2).jpg';
import mens3 from '../../assets/mens (3).jpg';
import mens4 from '../../assets/mens (4).jpg';
import mens5 from '../../assets/mens (5).jpg';
import womens1 from '../../assets/womens (1).jpg';
import womens2 from '../../assets/womens (2).jpg';
import womens3 from '../../assets/womens (3).jpg';
import womens4 from '../../assets/womens (4).jpg';
import womens5 from '../../assets/womens (5).jpg';
import sneakers1 from '../../assets/sneakers1 (1).jpg';
import sneakers2 from '../../assets/sneakers1 (2).jpg';
import sneakers3 from '../../assets/sneakers1 (3).jpg';
import sneakers4 from '../../assets/sneakers1 (4).jpg';
import sneakers5 from '../../assets/sneakers1 (5).jpg'; 
import mainlogo from '../../assets/mainlogo.gif';
import shopbycat1 from '../../assets/shopbycategory (1).jpg';
import shopbycat2 from '../../assets/shopbycategory (2).jpg';
import shopbycat3 from '../../assets/shopbycategory (3).jpg';
import shopbycat4 from '../../assets/shopbycategory (4).jpg';
import shopbyfit1 from '../../assets/shopbyfit (1).jpg';
import shopbyfit2 from '../../assets/shopbyfit (2).jpg';
import shopbyfit3 from '../../assets/shopbyfit (3).jpg';
import shopbyfit4 from '../../assets/shopbyfit (4).jpg';
import shopbystyle1 from '../../assets/shopbystyle (1).jpg';
import shopbystyle2 from '../../assets/shopbystyle (2).jpg';
import shopbystyle3 from '../../assets/shopbystyle (3).jpg';
import shopbystyle4 from '../../assets/shopbystyle (4).jpg';



const SideBar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('MEN');
  const [shopAllOpen, setShopAllOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [shopByCategoryOpen, setShopByCategoryOpen] = useState(false);
  const [shopByCategoryBottomOpen, setShopByCategoryBottomOpen] = useState(false);
  const [shopByFitOpen, setShopByFitOpen] = useState(false);
  const [shopByStyleOpen, setShopByStyleOpen] = useState(false);
  const [topwearOpen, setTopwearOpen] = useState(false);
  const [bottomwearOpen, setBottomwearOpen] = useState(false);
  const [shopByFitBottomOpen, setShopByFitBottomOpen] = useState(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false);

  const categories = {
    MEN: [
      { name: 'New Arrivals', img: mens1 },
      { name: 'Hot Mearch', img: mens2 },
      { name: 'Anime', img: mens3 },
      { name: 'Harry Potter', img: mens4 },
      { name: 'Marvel', img: mens5 },
       { name: 'New Arrivals', img: mens1 },
      { name: 'Hot Mearch', img: mens2 },
      { name: 'Anime', img: mens3 },
      { name: 'Harry Potter', img: mens4 },
      { name: 'Marvel', img: mens5 }
    ],
    WOMEN: [
      { name: 'Harry Potter', img: womens1 },
      { name: 'Kawaii', img: womens2 },
      { name: 'Oversized Tees', img: womens3 },
      { name: 'New Arrivals', img: womens4 },
      { name: 'Bestsellers', img: womens5 },
       { name: 'Harry Potter', img: womens1 },
      { name: 'Kawaii', img: womens2 },
      { name: 'Oversized Tees', img: womens3 },
      { name: 'New Arrivals', img: womens4 },
      { name: 'Bestsellers', img: womens5 }
    ],
    SNEAKERS: [
      { name: 'Nike', img: sneakers1 },
      { name: 'Adidas', img: sneakers2 },
      { name: 'Puma', img: sneakers3 },
      { name: 'New Balance', img: sneakers4 },
      { name: 'Converse', img: sneakers5 },
      { name: 'Nike', img: sneakers1 },
      { name: 'Adidas', img: sneakers2 },
      { name: 'Puma', img: sneakers3 },
      { name: 'New Balance', img: sneakers4 },
      { name: 'Converse', img: sneakers5 }
    ]
  };

  const shopAllCategories = [
    { name: 'Winterwear', img: mens1 },
    { name: 'T-Shirts', img: mens2 },
    { name: 'Shirts', img: mens3 },
    { name: 'Cotton Linen', img: mens4 },
    { name: 'Sneakers', img: sneakers1 },
    { name: 'All Accessories', img: mens5 },
    { name: 'Polos', img: womens1 },
    { name: 'Joggers', img: womens2 },
    { name: 'Jeans', img: womens3 },
    { name: 'Pants', img: womens4 },
    { name: 'Cargos', img: sneakers2 },
    { name: 'Supima™', img: womens5 }
  ];

  const shopByCategoryItems = [
    { name: 'T-Shirts', img: shopbycat1 },
    { name: 'Winterwear', img: shopbycat2 },
    { name: 'Polos', img: shopbycat3 },
    { name: 'Casual Shirts', img: shopbycat4 },
    { name: 'Cotton Linen Shirts', img: shopbycat1 }
  ];

  const shopByCategoryBottom = [
    { name: 'All Bottomwear', img: mens1 },
    { name: 'Cargos', img: mens2 },
    { name: 'Jeans', img: mens3 },
    { name: 'Pants', img: mens4 },
    { name: 'Joggers', img: mens5 }
  ];
   const shopByFitBottom = [
    { name: 'OverSized Fit', img: shopbyfit1 },
    { name: 'Winterwear', img: shopbyfit2 },
    { name: 'Polos', img: shopbyfit3 },
    { name: 'Casual Shirts', img: shopbyfit4 },
    { name: 'Cotton Linen Shirts', img: shopbyfit1 }
  ];
  const shopByFit = [
    { name: 'OverSized Fit', img: shopbyfit1 },
    { name: 'Winterwear', img: shopbyfit2 },
    { name: 'Polos', img: shopbyfit3 },
    { name: 'Casual Shirts', img: shopbyfit4 },
    { name: 'Cotton Linen Shirts', img: shopbyfit1 }
  ];
   const shopByStyle = [
    { name: 'Textured', img: shopbystyle1 },
    { name: 'Winterwear', img: shopbystyle2 },
    { name: 'Polos', img: shopbystyle3 },
    { name: 'Casual Shirts', img: shopbystyle4 },
    { name: 'Cotton Linen Shirts', img: shopbystyle1 }
  ];

  const allAccessories = [
    { name: 'Backpacks', img: mens1 },
    { name: 'Perfumes', img: mens2 },
    { name: 'Socks', img: mens3 },
    { name: 'Collectibles', img: mens4 },
    { name: 'Caps', img: mens5 }
  ];


  const shopCategories = [
    { name: 'All Winterwear', img: '/winterwear.jpg' },
    { name: 'All Topwear', img: '/topwear.jpg' },
    { name: 'All Bottomwear', img: '/bottomwear.jpg' }, 
    { name: 'T-Shirts', img: '/tshirts.jpg' },
    { name: 'Shirts', img: '/shirts.jpg' },
    { name: 'Dresses & Jumpsuits', img: '/dresses.jpg' },
    { name: 'Tops', img: '/tops.jpg' },
    { name: 'Sneakers', img: '/sneakers.jpg' },
    { name: 'All Accessories', img: '/accessories.jpg' }
  ];
  

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />}
      
      <div className={`fixed top-0 left-0 h-full w-[40%] bg-white z-50 transform transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-4 border-b flex h-25">
        <img src={mainlogo} alt="Main Logo"  />
          <button className="self-center border border-b rounded py-2 text-center text-gray-800 h-10 px-4 ml-auto hover:border-teal-500 hover:text-teal-600 transition-all">
            Log In/Register
          </button>
        </div>

       

        {/* Navigation Tabs */}
        <div className="flex border-b">
          <button onClick={() => setActiveTab('MEN')} className={`flex-1 py-3 ${activeTab === 'MEN' ? 'text-teal-600 border-b-2 border-teal-600 font-medium' : 'text-gray-500 hover:text-teal-600'}`}>MEN</button>
          <button onClick={() => setActiveTab('WOMEN')} className={`flex-1 py-3 ${activeTab === 'WOMEN' ? 'text-teal-600 border-b-2 border-teal-600 font-medium' : 'text-gray-500 hover:text-teal-600'}`}>WOMEN</button>
          <button onClick={() => setActiveTab('SNEAKERS')} className={`flex-1 py-3 ${activeTab === 'SNEAKERS' ? 'text-teal-600 border-b-2 border-teal-600 font-medium' : 'text-gray-500 hover:text-teal-600'}`}>SNEAKERS</button>
        </div>

        {/* Categories Carousel */}
        <div className="p-7">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {categories[activeTab].map((cat, idx) => (
              <div key={idx} className="flex-shrink-0 text-center">
                <img src={cat.img} alt={cat.name} className="w-20 h-20 object-cover rounded-lg mb-2" />
                <p className="text-xs">{cat.name}</p>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center gap-1 mt-2">
            <button onClick={() => setCurrentSlide(0)} className={`w-2 h-2 rounded-full ${currentSlide === 0 ? 'bg-black' : 'bg-gray-300'}`} />
            <button onClick={() => setCurrentSlide(1)} className={`w-2 h-2 rounded-full ${currentSlide === 1 ? 'bg-black' : 'bg-gray-300'}`} />
          </div> */}
        </div>

 {/* Shop All Section */}
        <div className="border-t border-gray-300">
          <button 
            onClick={() => setShopAllOpen(!shopAllOpen)}
            className="w-full p-4 flex justify-between items-center font-medium"
          >
            <span>Shop All</span>
            <svg className={`w-5 h-5 transform transition-transform ${shopAllOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {shopAllOpen && (
            <div className="border-t border-gray-300">
              <button 
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="w-full p-4 flex justify-between items-center font-medium pl-8"
              >
                <span>Categories</span>
                <svg className={`w-5 h-5 transform transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {categoriesOpen && (
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-6 gap-3">
                    {shopAllCategories.map((cat, idx) => (
                      <div key={idx} className="text-center">
                        <img src={cat.img} alt={cat.name} className="w-full aspect-square object-cover rounded-lg mb-1" />
                        <p className="text-xs leading-tight">{cat.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Topwear Section */}
        <div className="border-t border-gray-300">
          <button 
            onClick={() => setTopwearOpen(!topwearOpen)}
            className="w-full p-4 flex justify-between items-center font-medium"
          >
            <span>Topwear</span>
            <svg className={`w-5 h-5 transform transition-transform ${topwearOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {topwearOpen && (
          <>
            {/* Shop By Category */}
            <div className="border-t border-gray-300">
              <button 
                onClick={() => setShopByCategoryOpen(!shopByCategoryOpen)}
                className="w-full p-4 flex justify-between items-center pl-8"
              >
                <span>Shop By Category</span>
                <svg className={`w-5 h-5 transform transition-transform ${shopByCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {shopByCategoryOpen && (
                <div className="px-4 pb-4">
                  <div className="flex gap-3 overflow-x-auto">
                    {shopByCategoryItems.map((item, idx) => (
                      <div key={idx} className="flex-shrink-0 text-center">
                        <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-1" />
                        <p className="text-xs leading-tight">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Shop By Fit */}
            <div className="border-t border-gray-300">
              <button 
                onClick={() => setShopByFitOpen(!shopByFitOpen)}
                className="w-full p-4 flex justify-between items-center pl-8"
              >
                <span>Shop By Fit</span>
                <svg className={`w-5 h-5 transform transition-transform ${shopByFitOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
               {shopByFitOpen && (
                <div className="px-4 pb-4">
                  <div className="flex gap-3 overflow-x-auto">
                    {shopByFit.map((item, idx) => (
                      <div key={idx} className="flex-shrink-0 text-center">
                        <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-1" />
                        <p className="text-xs leading-tight">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Shop By Style */}
            <div className="border-t border-gray-300">
              <button 
                onClick={() => setShopByStyleOpen(!shopByStyleOpen)}
                className="w-full p-4 flex justify-between items-center pl-8"
              >
                <span>Shop By Style</span>
                <svg className={`w-5 h-5 transform transition-transform ${shopByStyleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
                 {shopByStyleOpen && (
                <div className="px-4 pb-4">
                  <div className="flex gap-3 overflow-x-auto">
                    {shopByStyle.map((item, idx) => (
                      <div key={idx} className="flex-shrink-0 text-center">
                        <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-1" />
                        <p className="text-xs leading-tight">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Bottomwear Section */}
        <div className="border-t border-gray-300">
          <button 
            onClick={() => setBottomwearOpen(!bottomwearOpen)}
            className="w-full p-4 flex justify-between items-center font-medium"
          >
            <span>Bottomwear</span>
            <svg className={`w-5 h-5 transform transition-transform ${bottomwearOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {bottomwearOpen && (
          <>
            <div className="border-t border-gray-300">
              <button 
                onClick={() => setShopByCategoryBottomOpen(!shopByCategoryBottomOpen)}
                className="w-full p-4 flex justify-between items-center pl-8"
              >
                <span>Shop By Category</span>
                <svg className={`w-5 h-5 transform transition-transform ${shopByCategoryBottomOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {shopByCategoryBottomOpen && (
                <div className="px-4 pb-4">
                  <div className="flex gap-3 overflow-x-auto">
                    {shopByCategoryBottom.map((item, idx) => (
                      <div key={idx} className="flex-shrink-0 text-center">
                        <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-1" />
                        <p className="text-xs leading-tight">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="border-t border-gray-300">
              <button 
                onClick={() => setShopByFitBottomOpen(!shopByFitBottomOpen)}
                className="w-full p-4 flex justify-between items-center pl-8"
              >
                <span>Shop By Fit</span>
                <svg className={`w-5 h-5 transform transition-transform ${shopByFitBottomOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
               {shopByFitBottomOpen && (
                <div className="px-4 pb-4">
                  <div className="flex gap-3 overflow-x-auto">
                    {shopByFitBottom.map((item, idx) => (
                      <div key={idx} className="flex-shrink-0 text-center">
                        <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-1" />
                        <p className="text-xs leading-tight">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* All Accessories Section */}
        <div className="border-t border-gray-300">
          <button 
            onClick={() => setAccessoriesOpen(!accessoriesOpen)}
            className="w-full p-4 flex justify-between items-center font-medium"
          >
            <span>All Accessories</span>
            <svg className={`w-5 h-5 transform transition-transform ${accessoriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {accessoriesOpen && (
            <div className="px-4 pb-4">
              <div className="flex gap-3 overflow-x-auto">
                {allAccessories.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 text-center">
                    <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg mb-1" />
                    <p className="text-xs leading-tight">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
