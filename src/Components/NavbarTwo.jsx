import Link from "next/link";
import React from "react";

const NavbarTwo = () => {
  return (
    <div className="bg-yellow-500">
      <nav className="container mx-auto flex justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="flex gap-4 text-lg ">
          <Link href="#">Home</Link>
          <Link href="#">Profile</Link>
          <Link href="#">Sign in</Link>
          <Link href="#">Register</Link>
          <Link href="#">Sigin out</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTwo;
