import Image from "next/image";

const Homepage = () => {
  return (
  <div className="flex flex-col lg:flex-row px-4 sm:px-8 ms:px-12 lg:px-28 xl:px-48 text-xl">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold">Engineer~Devloper</h1>
      {/* DESCRIPTION */}
      <p className="md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam, dicta recusandae in asperiores quasi magni voluptas ratione id illum! Veritatis, maxime fugit ducimus modi incidunt omnis commodi excepturi eligendi.
      </p>
      {/* BUTTON */}
      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
