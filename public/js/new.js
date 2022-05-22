const createBtn = document.getElementById('createNewPostBtn');

const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById('newPostTitle').value;
  const body = document.getElementById('newPostContent').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

createBtn.addEventListener('click', newFormHandler);
