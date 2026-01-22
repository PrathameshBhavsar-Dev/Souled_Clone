const Gift = () => {
  return (
    <div className="px-8 pb-8">
    <div className="bg-[#fff3ec] min-h-screen ">

    
      <div className="w-full ">
        <img
          src="Gift.avif"
          alt="Gift Voucher"
          className="w-full h-[320px] object-cover"
        />
      </div>

  
      <div className="px-[15px] flex justify-center">
        <div className="w-full max-w-[600px] bg-[#fde9df] rounded-xl p-6">

         
          <div className="bg-white rounded-lg shadow-md p-5">

            <h3 className="text-sm font-semibold mb-2">
              Choose Occasion
            </h3>

            <div className="flex gap-2 flex-wrap mb-4">
              {["Wedding", "Anniversary", "Festive", "Birthday"].map(item => (
                <button
                  key={item}
                  className="px-4 py-1 text-xs rounded-md border bg-white hover:bg-black hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="rounded-md overflow-hidden mb-2">
              <img
                src="Gift.avif"
                alt="Gift Preview"
                className="w-full h-[180px] object-cover"
              />
            </div>

            <p className="text-center text-xs text-gray-400 mb-4">
              Edit Message
            </p>

            <h4 className="text-sm font-semibold mb-3">
              Choose an amount
            </h4>

            <div className="flex gap-3 mb-4">
              {["500", "1000", "2000"].map(amount => (
                <button
                  key={amount}
                  className="flex-1 py-2 border rounded-md text-xs hover:border-black"
                >
                  {amount}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <input
                placeholder="Recipient Name"
                className="w-full border-b text-xs py-2 outline-none"
              />
              <input
                placeholder="Recipient Email ID"
                className="w-full border-b text-xs py-2 outline-none"
              />
              <input
                placeholder="Mobile Number"
                className="w-full border-b text-xs py-2 outline-none"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full border rounded-md text-xs p-2"
              />
            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-3">
              <input type="checkbox" />
              <span>
                I understand that gift vouchers are non-refundable
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-pink-300 text-white text-xs py-2 rounded-md">
                PREVIEW
              </button>
              <button className="flex-1 bg-red-600 text-white text-xs py-2 rounded-md">
                ADD TO CART
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gift;
