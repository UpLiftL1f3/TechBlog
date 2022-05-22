const postId = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];
const updateBtn = document.getElementById('edit-update');
const deleteBtn = document.getElementById('edit-delete');
const cancelBtn = document.getElementById('edit-cancel');

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById('edit-Title').value;
  const body = document.getElementById('edit-Content').value;
  console.log('EDIT POST');
  console.log(body);
  console.log(title);
  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
  });

  document.location.replace('/dashboard');
};

function cancelClickHandler(event) {
  event.preventDefault();
  document.location.replace('/dashboard');
}

updateBtn.addEventListener('click', editFormHandler);
deleteBtn.addEventListener('click', deleteClickHandler);
cancelBtn.addEventListener('click', cancelClickHandler);
