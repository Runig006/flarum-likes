import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import CommentPost from 'flarum/forum/components/CommentPost';
import icon from 'flarum/common/helpers/icon';

import PostLikesModal from './components/PostLikesModal';

export default function () {
  extend(CommentPost.prototype, 'footerItems', function (items) {
    const post = this.attrs.post;
    const likes = post.likes();

    if (likes && likes.length) {
      items.add(
        'liked',
        <a href="#" onclick={(e) => { e.preventDefault(); app.modal.show(PostLikesModal,{ post });}}>
          <div className="FooterItem Post-likedBy">
            {icon('far fa-thumbs-up')}
            {likes.length}
          </div>
        </a>
      );
    }
  });
}
