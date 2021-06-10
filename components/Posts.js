import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ posts }) {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamps", "desc")
  );
  return (
    <div className="pb-10">
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamps}
              image={post.data().image}
              postImage={post.data().postImage}
            ></Post>
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamps}
              image={post.image}
              postImage={post.postImage}
            ></Post>
          ))}
    </div>
  );
}

export default Posts;
