import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryLists } from "../utils/constants";
import { fetchAllArticles } from "../utils/fetchAllArticles";
import { saveArticle } from "../utils/articleSlice";

const ButtonList = () => {
  const [category, setCategory] = useState(0);
  const dispatch = useDispatch();
  const filteredDate = useSelector((store) => store.date.filterDate);

  const selectCategory = (listId, index) => {
    setCategory(index);
    fetchAllArticles(listId, 'category', filteredDate).then(res => dispatch(saveArticle(res)));
  }

  return (
    <>
      {categoryLists.map((list, index) => {
        return (
          <button
            onClick={() => selectCategory(list.id, index)}
            className={`px-4 py-1 m-3 rounded-md ${index === category ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
          >
            {list.name}
          </button>
        )
      })}
    </>
  )
}

export default ButtonList;