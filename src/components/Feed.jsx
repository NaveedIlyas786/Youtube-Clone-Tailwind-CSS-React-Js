import React, {useContext, useEffect} from 'react';
import { Context } from '../context/ContextApi';
import LeftNav from "./Left_Nav";
import VideoCard from './VideoCard';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
      console.log(searchResults);
      document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
      <div className="flex flex-row h-[calc(100%-56px)]">
          <LeftNav />
          <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
                  {!loading && searchResults && //! Means When ( loading && searchResults ) have become falsed then 'searchResults.map' should be loaded
                      searchResults.map((item,index) => {
                          if (item.type !== "video") return false;
                          return (
                              <VideoCard
                                  key={index}
                                  video={item?.video}
                              />
                          );
                      })}
              </div>
          </div>
      </div>
  );
};

export default Feed;