import React from "react";

function PostsItem(props) {
  // console.log("post", title);
  const { id, title } = props;

  return (
    <>
      <tr key={id}>
        <th>{id} </th>
        <th>{title} </th>
      </tr>
    </>
  );
}

export default PostsItem;
