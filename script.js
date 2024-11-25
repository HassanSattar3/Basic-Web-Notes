const notesList = document.getElementById('notes-list');
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');

addNoteBtn.addEventListener('click', function() {
    const noteText = noteInput.value;
    if (noteText.trim() !== '') {
        const newNote = document.createElement('div');
        newNote.classList.add('note');
        newNote.textContent = noteText;
        notesList.appendChild(newNote);
        noteInput.value = '';
    }
});

addNoteBtn.addEventListener('click', function() {
    const noteText = noteInput.value;
    if (noteText.trim() !== '') {
        const newNote = document.createElement('div');
        newNote.classList.add('note');

        const noteTextElement = document.createElement('p');
        noteTextElement.classList.add('note-text');
        noteTextElement.textContent = noteText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            newNote.remove();
        });

        newNote.appendChild(noteTextElement);
        newNote.appendChild(deleteBtn);

        notesList.appendChild(newNote);
        noteInput.value = '';
    }
});
