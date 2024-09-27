// Get the form and thread list elements
const threadForm = document.getElementById('threadForm');
const threadList = document.getElementById('threadList');

// Function to create a new thread
threadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('threadTitle').value;
    const content = document.getElementById('threadContent').value;

    // Create the thread element
    const newThread = document.createElement('li');
    newThread.classList.add('thread');

    const threadTitle = document.createElement('h3');
    threadTitle.classList.add('thread-title');
    threadTitle.textContent = title;

    const threadContent = document.createElement('p');
    threadContent.classList.add('thread-content');
    threadContent.textContent = content;

    // Add a reply form to each thread
    const replyForm = document.createElement('form');
    replyForm.classList.add('reply-form');
    const replyTextarea = document.createElement('textarea');
    replyTextarea.setAttribute('placeholder', 'Write a reply...');
    replyForm.appendChild(replyTextarea);
    const replyButton = document.createElement('button');
    replyButton.classList.add('reply-button');
    replyButton.textContent = 'Post Reply';
    replyForm.appendChild(replyButton);

    const replyList = document.createElement('ul');
    replyList.classList.add('reply-list');

    // Event listener to add replies to the thread
    replyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const replyText = replyTextarea.value;
        const replyItem = document.createElement('li');
        replyItem.classList.add('reply-item');
        replyItem.textContent = replyText;
        replyList.appendChild(replyItem);
        replyTextarea.value = ''; // Reset the textarea after reply
    });

    // Append title, content, reply form, and reply list to the thread
    newThread.appendChild(threadTitle);
    newThread.appendChild(threadContent);
    newThread.appendChild(replyForm);
    newThread.appendChild(replyList);

    // Add the thread to the list
    threadList.appendChild(newThread);

    // Reset the thread form
    threadForm.reset();
});
