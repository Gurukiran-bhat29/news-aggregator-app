import { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sourceLists } from "../utils/constants";
import { fetchAllArticles, fetchNewsAPI } from "../utils/fetchAllArticles";
import { saveArticle } from "../utils/articleSlice";
import { addFilter } from "../utils/dateSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filteredDate = useSelector((store) => store.date.filterDate);

  const dispatch = useDispatch();

  const onClickSearch = (query) => {
    fetchAllArticles(query, 'search', filteredDate).then(res => dispatch(saveArticle(res)));
  }

  const onSelectSource = (query) => {
    fetchNewsAPI(query, 'source', filteredDate).then(res => dispatch(saveArticle(res)));
    searchQuery && setSearchQuery('');
  }

  return (
    <div className="flex p-2 sm:p-5 shadow-xl sticky top-0 items-center justify-center bg-gray-600 flex-col lg:flex-row">
      <div className="flex lg:mr-12">
        <input
          value={searchQuery}
          placeholder='Search'
          className="py-2.5 px-4 rounded-l-3xl border border-gray-500"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="px-6 text-white text-sm rounded-r-3xl bg-white hover:text-black border border-gray-500"
          onClick={() => onClickSearch(searchQuery)}
        >
          <img
            className="w-6 h-6"
            alt="search-icon"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          />
        </button>
      </div>
      <div className="flex mt-2">
        <div className='group lg:mr-12 lg:ml-12'>
          <button className='p-2 w-40  border border-gray-800 cursor-pointer bg-gray-200'>
            Filter by Source
          </button>
          <div className='hidden w-52 absolute cursor-pointer group-hover:block'>
            {sourceLists.map((source) => {
              return (
                <span
                  key={source.id}
                  className='block p-0.5 pl-3 w-40 bg-gray-600 text-white'
                  onClick={() => onSelectSource(source.id)}
                >
                  {source.name}
                </span>
              )
            })}
          </div>
        </div>
        <div className="ml-3 sm:ml-8 md:ml-12">
          <input onChange={(e) => setFilterDate(e.target.value)} className='p-2 w-40 cursor-pointer border border-gray-500 rounded-lg' type="date" id="date-select" />
          <button
            className="ml-2 p-1.5 bg-black text-white text-sm rounded-r-3x border border-gray-500 rounded-md"
            onClick={() => {
              dispatch(addFilter(filterDate))
              searchQuery && setSearchQuery('');
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div >
  )
}

export default Head;