const postId = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];
const newCommentContainer = document.getElementById('newCommentContainer');
const newCommentBtn = document.getElementById('newCommentBtn');
const submitNewComment = document.getElementById('submitNewCommentBtn');

const commentFormHandler = async function (event) {
  const commentBody = document.getElementById('newCommentBody').value;
  console.log('in the function');
  event.preventDefault();
  console.log(commentBody);
  if (commentBody) {
    console.log('comment body exists');
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id: postId,
        body: commentBody,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('after fetch');
    document.location.reload();
  }
};

const newCommentHandler = () => {
  if (newCommentContainer.getAttribute('data-view') === 'hidden') {
    newCommentContainer.setAttribute('data-view', 'visible');
    newCommentBtn.setAttribute('data-view', 'hidden');
  }
};

document
  .querySelector('#newCommentBtn')
  .addEventListener('click', newCommentHandler);

submitNewComment.addEventListener('click', commentFormHandler);
