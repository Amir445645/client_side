import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.action";

export default function DeleteCard({ id }) {
  const dispatch = useDispatch();
  const deleteQuote = () => {
    dispatch(deletePost(id));
  };
  return (
    <div
      onClick={() => {
        if (window.confirm("voulez-vous supprimer cet article?")) {
          deleteQuote();
        }
      }}
    >
      <img src="./img/icons/trash.svg" alt="trash" />
    </div>
  );
}
