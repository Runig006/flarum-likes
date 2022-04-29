import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Model from 'flarum/common/Model';
import Post from 'flarum/common/models/Post';
import CommentPost from 'flarum/forum/components/CommentPost';
import icon from 'flarum/common/helpers/icon';
import PostMentionsModal from './components/PostMentionsModal';

export default function addMentionedByList() {
  Post.prototype.mentionedBy = Model.hasMany('mentionedBy');
  extend(CommentPost.prototype, 'footerItems', function (items) {
    const post = this.attrs.post;
    const replies = post.mentionedBy();

    //We change the class to PostMentionedBy so it doesnt open the fucking hover
    if (replies && replies.length) {
      items.add(
        'replies_custom',
        <a href="#" onclick={(e) => { e.preventDefault(); app.modal.show(PostMentionsModal,{ post });}}>
          <div className="FooterItem Post-mentionedBy_custom"> 
            {icon('fas fa-reply')} 
            {replies.length}
          </div>
        </a>
      );
    }
  });
}
