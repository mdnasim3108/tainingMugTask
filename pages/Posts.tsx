import Dashboard from "@/Layout/Dashboard";
import PostData from "@/Components/PostData";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/Components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { addPost, removePost } from "@/GlobalRedux/postSlice/postSlice";
import { RootState } from "@/GlobalRedux/store";
const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [range, setRange] = useState({ start: 0, end: 20 });
  const [search, setSearch] = useState("");
  const likedPosts = useSelector((state: RootState) => state.post.likedPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(likedPosts);
  }, [likedPosts]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setPosts(
        res.data.map((post) => {
          const likedTitles=likedPosts.map(likedPost =>likedPost.title)
          if(likedTitles.includes(post.title)) return { ...post, liked: true };
          return { ...post, liked: false };
        })
      )
    );
  }, []);
  const likeHandler = (index) => {
    const updated = [...posts];
    if (!updated[index].liked) {
      dispatch(addPost(updated[index]));
    }
    updated[index] = { ...updated[index], liked: true };

    setPosts(updated);
  };
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
          {posts.length ? (
            posts
              .slice(range.start, range.end)
              .filter((post: Object) => post.title.includes(search))
              .map((post: Object, index: number) =>
                index === 0 ? (
                  <PostData
                    {...post}
                    className="mt-7"
                    like={likeHandler}
                    index={index + range.start}
                  />
                ) : (
                  <PostData
                    {...post}
                    className="mt-4"
                    like={likeHandler}
                    index={index + range.start}
                  />
                )
              )
          ) : (
            <p className="text-center text-xl mt-[10rem]">Data loading...</p>
          )}
        </div>
        <Pagination
          next={() =>
            setRange({ start: range.start + 20, end: range.end + 20 })
          }
          back={() =>
            setRange({ start: range.start - 20, end: range.end - 20 })
          }
          range={range}
          data={posts}
        />
      </div>
    </Dashboard>
  );
};
export default Posts;
