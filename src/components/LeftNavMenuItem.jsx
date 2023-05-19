import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return ( //! .................↴↴↴ It is necessary to put space just before the end of inverted commas ↴↴↴ matlab neechy ↴↴ yaha
    <div className={"text-white text-[14px] cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
    className
}
     onClick={action}>
      <span className='text-[18px] mr-5'>{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem