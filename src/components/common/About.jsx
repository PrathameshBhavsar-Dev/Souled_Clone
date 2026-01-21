const About = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ===== TOP MESSAGE BAR ===== */}
      <div className="bg-[#278a8f] mx-3 px-4 py-10">
        <p className="text-white text-center text-sm max-w-5xl mx-auto hover:underline decoration-white">
          Our About Us page would like to thank you from the bottom of its heart
          for visiting. It does not get a lot of attention usually, as people are
          busy surfing other, cooler pages. The fact that you voluntarily decided
          to come here means a lot. Honestly. *sniff sniff*
        </p>
      </div>

      {/* ===== SECTION 1 ===== */}
      <div className="px-4 py-12 mx-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start">
          <img
            src="/About_img/img1.png"
            className="w-64 md:w-80 object-contain"
            alt=""
          />

          <div className="max-w-xl text-center md:text-left mx-5">
            <h2 className="text-lg font-bold mb-4">
              We are your favourite, online store.
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed">
              We create and curate stunning designs and print them on all sorts
              of equally stunning products—from t-shirts to phone covers,
              backpacks to boxers to mugs to socks to badges to pins to hoodies
              and many more! Our funky products are designed to spread happiness
              right down to the bottom of your soul.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2 (GRAY) ===== */}
      <div className="bg-[#f0f0f0] px-4 py-12 mx-3">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center md:items-start">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-lg font-bold mb-4">
              Putting the ‘pop’ in pop culture
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed">
              We’re the sock to your Dobby, the gin to your John Ham, the
              people’s elbow to your The Rock. We create designs that speak pop
              culture with humour and originality.
            </p>
          </div>

          <img
            src="/About_img/img2.png"
            className="w-60 md:w-72 object-contain"
            alt=""
          />
        </div>
      </div>

      {/* ===== WHY SOULED STORE ===== */}
      <div className="bg-[#278a8f] mx-3 px-4 py-14">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-lg font-bold mb-4">
            Why we’re called ‘The Souled Store’
          </h2>

          <p className="text-sm leading-relaxed">
            For starters, it makes for a great pun on the word ‘sold’. But more
            importantly, The Souled Store was born out of the idea of following
            your soul. Life is short—don’t spend it doing something you don’t
            like.
          </p>
        </div>
      </div>

      {/* ===== ILLUSTRATION ===== */}
      <div className="px-4 py-12 flex justify-center mx-3">
        <img
          src="/About_img/img3.png"
          className="max-w-full md:max-w-4xl object-contain"
          alt=""
        />
      </div>

      {/* ===== TEAM ===== */}
      <div className="bg-[#278a8f] mx-3 px-4 py-14">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-lg font-bold mb-4">The Team</h2>

          <p className="text-sm leading-relaxed">
            We’re a bunch of comic-book-loving, joke-cracking people who love
            what we do and don’t take ourselves too seriously. Started by four
            people with a cupboard full of clothes, we’ve now grown to 150+
            people while keeping the same spirit alive.
          </p>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="w-full px-4 md:px-10 py-12">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-xl font-semibold text-gray-800">
      Testimonials By Our Products
    </h2>
  </div>

  {/* ===== T-SHIRTS ===== */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-10 border-t">
    {/* Image */}
    <div className="md:w-1/4 flex justify-center">
      <img
        src="/About_img/img4.png"
        alt="T-Shirts"
        className="w-28 md:w-32"
      />
    </div>

    {/* Content */}
    <div className="md:w-3/4 text-center md:text-left">
      <h3 className="text-teal-600 font-semibold mb-2">T-Shirts</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        “The Souled Store and us go back a long way, and they’ve been great buddies throughout. They’ve constantly given us these amazing designer makeovers- adding pockets, using glow-in-the-dark inks, playing around with our colours, increasing sleeves, etc. We’ve now become so popular that we’re regularly mobbed in public, and even celebrities can’t seem to get enough of us. Our population is growing at a frantic pace, and we’ll soon accomplish our goal of being present in every house on this planet. If you’re lazy and prefer online shopping for your clothes, you know where to find us!”
      </p>
      <p className="mt-2 text-sm text-gray-500">– Tim the T-shirt</p>
    </div>
  </div>

  {/* ===== BOXERS ===== */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-10 border-t">
    {/* Image */}
    <div className="md:w-1/4 flex justify-center">
      <img
        src="/About_img/img4.png"
        alt="Boxers"
        className="w-28 md:w-32"
      />
    </div>

    {/* Content */}
    <div className="md:w-3/4 text-center md:text-left">
      <h3 className="text-teal-600 font-semibold mb-2">Boxers</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        “We’ve had a love-hate relationship with the world. We always felt terrible that we were never really seen because we were always in someone’s pants (no, it isn’t that much fun). Then, a few years ago, a bunch of kids started wearing their pants really low and we suddenly started getting noticed again. Life was good. Unfortunately, that was just a fad, and died pretty soon. The Souled Store finally helped put us on the map again, by making us fun, quirky, and adding cool pattern prints! Now, most people don’t even bother wearing pants, they casually lounge around in us. We’re finally independent and self-sufficient loungewear, and have The Souled Store’s design team to thank!”
      </p>
      <p className="mt-2 text-sm text-gray-500">– Bob the Boxer</p>
    </div>
  </div>

  {/* ===== PHONE COVERS ===== */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 py-10 border-t">
    {/* Image */}
    <div className="md:w-1/4 flex justify-center">
      <img
        src="/About_img/img5.png"
        alt="Phone Covers"
        className="w-28 md:w-32"
      />
    </div>

    {/* Content */}
    <div className="md:w-3/4 text-center md:text-left">
      <h3 className="text-teal-600 font-semibold mb-2">Phone Covers</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
       “You’re probably reading this on your mobile right now. Everyone seems to be on their phones all the time, yet cares little about them. Throw us on the bed, forget us in taxis- it’s like you guys never cared about us. If things got really bad, you probably put a screen guard or complained about how expensive screen replacements are.

It’s about time things changed, and thanks to The Souled Store, they have. They’ve done a fantastic job of giving us a complete makeover with their kickass designs. We’re now fashionable and functional. We know we’re growing at a frantic pace, adding new models every day. But the team at The Souled Store somehow manages to keep up, and ensure our entire family is well represented. Kudos and much love!”
      </p>
      <p className="mt-2 text-sm text-gray-500">– Paul the Phone Cover</p>
    </div>
  </div>

</div>

      
    </div>
  );
};

export default About;
