import React, { useRef, useEffect, useState } from 'react';

const CommentsForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSucessMessage, setShowSucessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8" style={{ background: '#0E1422' }}>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">CommentsForm</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && <p className="text-xs text-red-500">All Fields Are Required.</p>}
      <div class="mt-8">
        <button type="button" onClick={handleCommentSubmission}>
          
        </button>
      </div>
    </div>
  );
};

export default CommentsForm;
