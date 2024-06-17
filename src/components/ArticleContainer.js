import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveArticle } from "../utils/articleSlice";
import { fetchAllArticles } from "../utils/fetchAllArticles";
import ButtonList from "./ButtonList";
import ArticleCard from "./ArticleCard";
import Shimmer from "./Shimmer";

const ArticleContainer = () => {
  const savedArticles = useSelector((store) => store.article.articles);
  const filteredDate = useSelector((store) => store.date.filterDate);

  const dispatch = useDispatch();

  useEffect(() => {
    savedArticles.length === 0 && fetchAllArticles('technology', 'category', filteredDate).then(res => {
      dispatch(saveArticle(res))
    });
  }, []);

  if (savedArticles.length === 0) return <Shimmer />

  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap justify-center">
        {savedArticles.length > 0 && savedArticles.map((article, index) => {
          return (
            <ArticleCard info={article} />
          )
        })}
      </div>
    </div>
  )
}

export default ArticleContainer;