import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
interface postDataProps {
  userId?: Number;
  id?: Number;
  title?: String;
  body?: String;
  className?: String;
  like?: Function;
  index?: Number;
  liked?: boolean;
  favourites?:boolean;
  remove?:Function
}

const PostData: React.FC<postDataProps> = (props: postDataProps) => {
  return (
    <div className={" border-b grid grid-cols-9 " + props.className}>
      <p className="pl-5 col-span-1">{props.userId?.toString()}</p>
      <p className="col-span-1">{props.id?.toString()}</p>
      <p className="col-span-3">{props.title}</p>
      <p className="col-span-3">{props.body}</p>
      <div className="cols-span-1">
        {!props.favourites?(!props.liked ? (
          <CiHeart
            className="text-3xl cursor-pointer hover:text-red-600 ml-4 mt-3"
            onClick={()=>props.like(props.index)}
          />
        ) : (
          <FaHeart className="text-red-500 text-2xl ml-5 mt-4 bounce cursor-pointer" onClick={()=>props.like(props.index,true)} />
        )):<p className="underline cursor-pointer" onClick={()=>props.remove(props.index)}>remove</p>}
      </div>
    </div>
  );
};

export default PostData;
