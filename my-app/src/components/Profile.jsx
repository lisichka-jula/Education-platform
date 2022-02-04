import React from 'react';

const Profile = () => {
    return (
        <div className='profile'>
        <div >
          <img src="https://avatars.mds.yandex.net/get-altay/1981910/2a0000016b31da0f6230cba21c67d3ad3fa9/XXL"></img>
        </div>
        <div className='name'>
          Ava + name
        </div>
        <div className='my-posts'>
          My posts
          <div className='new-post'>
            New post
          </div>
          <div>
            post1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    )
}

export default Profile;