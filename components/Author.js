import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="text-center mt-5 mb-8 p-4 flex flex-col justify-center items-center rounded-lg bg-black bg-opacity-20">
      <div className="">
        {' '}
        <img
          height="100px"
          width="100px"
          alt={author.name}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
