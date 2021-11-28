import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
import { comment } from 'postcss';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comment.length > 0 && (
        <div className="shadow-lg rounded-lg pb-12 p-8 mb-8" style={{ background: '#0E1422' }}>
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">{comments.length} Comments</h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4 text-gray-600">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
