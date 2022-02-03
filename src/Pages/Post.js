import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Post = ({loggedIn}) => {

    const {id} = useParams();
    const query = new URLSearchParams(useLocation().search);

  return (
      <>
        <h2>
            Id is = {id}
        </h2>
        {loggedIn && <h1>Hello {query.get('name')}!</h1>}

      </>
  );
};

export default Post;
