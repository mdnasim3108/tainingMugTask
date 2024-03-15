import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";
import userImg from "../public/profileImg.avif";
interface componentProps {
  children?: React.ReactNode;
  change?:(e:Object)=>void
}
const Dashboard: React.FC<componentProps> = (props) => {
  const router = useRouter();
  const currentMenu = router.asPath.slice(1);
  const sideMenu = ["Posts",  "LikedPosts",];
  return (
    <div className="w-full h-screen flex ">
      <div className="flex-[1.5] h-full border-r border-gray-400 p-5">
        <p className="text-4xl font-bold font-sans mb-4">Dashboard</p>
        {sideMenu.map((item) => (
          <p
            key={item}
            className={`text-2xl  font-sans mb-4  pl-4 cursor-pointer hover:text-violet-600 ${
              currentMenu === item && "text-violet-500"
            } transition-all duration-100 ease-linear`}
            onClick={() => router.push("/" + item)}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex-[8.5]">
        <div className="w-full h-full">
          <div className="border-b border-gray-400 h-[7%] py-2 px-4 flex justify-between items-center">
            <p className="text-2xl font-sans tracking-wide">{currentMenu}</p>

            <div>
              <CiSearch className="inline mr-3 text-xl mb-1" />
              <input
                placeholder={"Search " + currentMenu}
                className="border-none outline-none inline"
                onChange={props.change}
              />
            </div>

            <div className="flex w-[6rem] justify-between items-center">
              <FiEdit2 className="text-xl text-gray-500" />
              <CiSettings className="text-2xl text-gray-500" />
              <Image
                src={userImg}
                alt="userImg"
                className="w-[2rem] rounded-full"
              />
            </div>
          </div>

          <div className="h-[93%]">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
