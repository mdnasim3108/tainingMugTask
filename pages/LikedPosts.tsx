import Dashboard from "@/Layout/Dashboard";
import PostData from "@/Components/PostData";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addPost, removePost } from "@/GlobalRedux/postSlice/postSlice";
import { RootState } from "@/GlobalRedux/store";
const LikedPosts: React.FC = () => {
  const [search, setSearch] = useState("");
  const likedPosts = useSelector((state: RootState) => state.post.likedPosts);
  const dispatch = useDispatch();
  return (
    <Dashboard change={(e: Object) => setSearch(e.target.value)}>
      <div className="w-full h-full p-5">
        <div className=" border  rounded-t h-[90%] overflow-scroll relative">
          <div className="grid grid-cols-9 border-b bg-[#f9fafb] fixed w-[80%] mb-4 z-10">
            <p className="pl-5 col-span-1">User Id</p>
            <p className="col-span-1">id</p>
            <p className="col-span-3">title</p>
            <p className="col-span-3">body</p>
            <p className="col-span-1">Action</p>
          </div>
          {likedPosts.length ? (
            
              likedPosts.filter((post: Object) => post.title.includes(search))
              .map((post: Object, index: number) =>
                index === 0 ? (
                  <PostData
                    {...post}
                    className="mt-7"
                    index={index}
                    favourites={true}
                    remove={(index:number)=>dispatch(removePost(index))}
                  />
                ) : (
                  <PostData
                    {...post}
                    className="mt-4"
                    index={index}
                    favourites={true}
                    remove={(index:number)=>dispatch(removePost(index))}
                  />
                )
              )
          ) : (
            <p className="text-center text-xl mt-[10rem]">No liked posts</p>
          )}
        </div>
      </div>
    </Dashboard>
  );
};
export default LikedPosts;
