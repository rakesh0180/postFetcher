import axios from "axios";
import React, { useEffect, useState } from "react";
import PostsItem from "./PostsItem";

const PostsList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const result = response.data;
        // console.log(result);
        setPosts(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [listSearchData, setListSearchData] = useState([]);

  const handleChange = (e) => {
    let str = e.target.value;
    console.log("typeOf", typeof str);

    const res = posts.filter((post) => post.id.toString() === str);
    setSearchInput(str);
    setListSearchData(res);
  };

  useEffect(() => {
    setListSearchData([...posts]);
  }, [posts]);

  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          value={searchInput}
          onChange={handleChange}
          placeholder="search by name or id"
        />
      </div>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {listSearchData.length > 0
              ? listSearchData.map((post) => {
                  return <PostsItem key={post.id} {...post} />;
                })
              : posts.map((post) => {
                  return <PostsItem key={post.id} {...post} />;
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsList;
