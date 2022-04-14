import app from 'flarum/forum/app';
import Modal from 'flarum/common/components/Modal';
import PostPreview from 'flarum/forum/components/PostPreview';

export default class PostMentionsModal extends Modal {
  className() {
    return 'PostLikesModal Modal--small';
  }

  title() {
    return "Menciones a este comentario";
  }

  content() {
    return (
      <div className="Modal-body">
        <ul className="PostMentionsModal-list">
          {this.attrs.post.mentionedBy().map((post) => (
            <li>
              <a href="#" onclick={(e) => { e.preventDefault(); app.modal.close();}}>
                {PostPreview.component({ post })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
