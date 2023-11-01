import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      {/* left side */}

      <div className="flex items-center justify-between max-w-6xl">
        <div className="hidden cursor-pointer lg:inline-grid h-24 w-24 relative">
          <Image
            className="object-contain"
            layout="fill"
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
          ></Image>
        </div>
        <div className="cursor-pointer lg:hidden h-24 w-10 relative">
          <Image
            className="object-contain"
            layout="fill"
            src="https://logos-world.net/wp-content/uploads/2020/06/Instagram-Logo.png"
          ></Image>
        </div>
        <h1>Right Side</h1>
      </div>
      {/* middle side */}

      {/* right side */}
    </div>
  );
};

export default Header;
