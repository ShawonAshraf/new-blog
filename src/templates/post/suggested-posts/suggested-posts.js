/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import PostList from '../../../components/post-list'
import style from './suggested-posts.module.less'

const SuggestedPosts = ({ posts }) => (
  <div>
    <p className={style.title}>Some other posts you may also like...</p>
    <PostList posts={posts} />
  </div>
)

SuggestedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      edge: PropTypes.shape({
        node: PropTypes.object,
      }),
    })
  ).isRequired,
}

export default SuggestedPosts
