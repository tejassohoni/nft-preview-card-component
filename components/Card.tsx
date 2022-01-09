import Image from "next/image";
import equilibriumImage from "../images/image-equilibrium.jpg";
import ethereumIcon from "../images/icon-ethereum.svg";
import clockIcon from "../images/icon-clock.svg";
import avatarImage from "../images/image-avatar.png";
import eyeIcon from "../images/icon-view.svg";

export default function Card() {
  return (
    <div className="bg-cardbg flex flex-col border-0 rounded-xl shadow-xl py-6 px-6 mx-2 my-2 ">
      <div className=" relative h-80 w-80 opacity-cyan bg-cyan rounded-2xl group cursor-pointer">
        <Image
          src={equilibriumImage}
          layout="fill"
          objectFit="contain"
          className=" rounded-xl group-hover:opacity-40 transition duration-500"
        />
        <div className="opacity-0 h-12 w-12 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition duration-700 ease-out ">
          <Image
            src={eyeIcon}
            layout="fill"
            objectFit="contain"
            className=" rounded-lg"
          />
        </div>
      </div>

      <div>
        <p className=" flex flex-col text-white font-outfit text-2xl font-semibold pt-5 cursor-pointer hover:text-cyan transition duration-500">
          Equilibrium #3429
        </p>
        <h1 className="text-softblue text-lg font-outfit w-80 py-4 font-thin">
          Our Equilibrium collection promotes balance and calm.
        </h1>
      </div>
      <div className="flex flex-row items-center border-b border-line pb-5 justify-between">
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5">
            <Image src={ethereumIcon} layout="fill" objectFit="contain" />
          </div>
          <p className="text-cyan font-outfit font-semibold ">0.041 ETH</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="relative h-5 w-5">
            <Image src={clockIcon} layout="fill" objectFit="contain" />
          </div>
          <p className="text-softblue text-sm font-outfit font-normal ml-1">
            3 days left
          </p>
        </div>
      </div>
      <div className="flex flex-row pt-6 items-center">
        <div className="relative h-8 w-8 rounded-full border-solid border border-white">
          <Image
            src={avatarImage}
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="flex flex-row ml-4">
          <h4 className="text-softblue font-medium text-sm">
            Creation of&nbsp;
          </h4>
          <h4 className="text-white font-medium text-sm cursor-pointer hover:text-cyan transition duration-500 ">
            Jules Wyvern
          </h4>
        </div>
      </div>
    </div>
  );
}
