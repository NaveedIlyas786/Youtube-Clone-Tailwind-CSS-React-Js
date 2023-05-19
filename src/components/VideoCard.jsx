import React from 'react'
import {abbreviateNumber} from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import {BsFillCheckCircleFill} from "react-icons/bs";
import VideoLength from '../shared/VideoLength';

const VideoCard = ({video}) => { //! --> Here ({video}) "video parameter is necessary to distructure otherwise by putting simply "(video)" it will not allow to display data on screen"
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col mb-8">
      <div className="relative h-42 md:h-35 md:rounded-xl overflow-hidden">
        <img className="h-full w-full object-cover" src={video?.thumbnails?.[0]?.url} alt="" />
        {video?.lengthSeconds &&(
          <VideoLength time={video?.lengthSeconds}/>
        )}
      </div>
      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img src={video?.author?.avatar[0]?.url} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-[14px] font-bold line-clamp-2">{video?.title}</span>
            <span className="text-[12px] mt-2 text-white/[0.7 flex items-center">{video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.45] ml-2 text-[12px]"/>
            )}
            </span>
            <div className="flex text-[14px] font-semibold text-white/[0.7] overflow-hidden truncate">
              <span className="text-[12px]">{abbreviateNumber(video?.stats?.views, 0)}</span>
              <span className="text-[12px] ml-2">views</span>
              <span className="text-[24px] relative top-[-10px] leading-none ml-2 text-white/[0.8]">.</span>
              <span className="truncate text-[12px]  ml-1 text-white/[0.7]">{video?.publishedTimeText}</span>
            </div>
          </div>
      </div>
     
    </div>
    </Link>
  )
}

export default VideoCard