import { INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUEST_POSTS } from "../actions";
import posts from "./posts";

export default (
  state = {},
  action
) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      });
    default:
      return state;
  }
}
