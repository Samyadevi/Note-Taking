// script.js

// Function to generate a unique ID (simple timestamp based for this example)
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

// Initial data for books and notes
let initialBooks = [
    {
        id: 'book1',
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        link: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
    {
        id: 'book2',
        title: '1984',
        author: 'George Orwell',
        link: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four'
    },
    {
        id: 'book3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice'
    },
    {
        id: 'book4',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        link: 'https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind'
    },
    {
        id: 'book5',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        link: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings'
    },
    {
        id: 'book6',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        link: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird'
    },
    {
        id: 'book7',
        title: 'Dune',
        author: 'Frank Herbert',
        link: 'https://en.wikipedia.org/wiki/Dune_(novel)'
    },
    {
        id: 'book8',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        link: 'https://en.wikipedia.org/wiki/The_Great_Gatsby'
    },
    // --- Added more books below ---
    {
        id: 'book9',
        title: 'Atomic Habits',
        author: 'James Clear',
        link: 'https://jamesclear.com/atomic-habits'
    },
    {
        id: 'book10',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        link: 'https://en.wikipedia.org/wiki/The_Alchemist_(novel)'
    },
    {
        id: 'book11',
        title: 'Becoming',
        author: 'Michelle Obama',
        link: 'https://en.wikipedia.org/wiki/Becoming_(book)'
    },
    {
        id: 'book12',
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        link: 'https://en.wikipedia.org/wiki/Where_the_Crawdads_Sing'
    },
    {
        id: 'book13',
        title: 'The Martian',
        author: 'Andy Weir',
        link: 'https://en.wikipedia.org/wiki/The_Martian_(Weir_novel)'
    },
    {
        id: 'book14',
        title: 'Educated',
        author: 'Tara Westover',
        link: 'https://en.wikipedia.org/wiki/Educated_(book)'
    }
];

let initialNotes = [
    {
        id: generateId(),
        bookId: 'book1',
        title: 'About the Babel Fish',
        content: 'The Babel Fish is a small, yellow, leech-like fish that feeds on brainwave energy, absorbing all unconscious mental frequencies from the speech centres of the brain and then excreting into the mind of its host a telepathic matrix derived from the conscious thought frequencies of the speech. It also makes you taste delicious.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        bookId: 'book1',
        title: 'Don\'t Panic!',
        content: 'The famous advice on the cover of The Hitchhiker\'s Guide to the Galaxy. A truly universal mantra for life\'s absurdities.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        bookId: 'book2',
        title: 'Big Brother is Watching You',
        content: 'The omnipresent surveillance by the Party in Oceania. A chilling concept that highlights themes of totalitarianism and loss of privacy.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        bookId: 'book3',
        title: 'First Impressions',
        content: 'The initial misunderstandings between Elizabeth Bennet and Mr. Darcy, largely based on pride and prejudice, form the core conflict and eventual resolution of the novel.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        bookId: 'book4',
        title: 'Cognitive Revolution',
        content: 'Harari argues that the cognitive revolution, occurring about 70,000 years ago, was when Sapiens developed new ways of thinking and communicating, enabling complex language and the ability to create shared fictions.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    // --- Added more notes for the new books ---
    {
        id: generateId(),
        bookId: 'book9',
        title: 'The Four Laws of Behavior Change',
        content: 'James Clear outlines four simple laws for building good habits and breaking bad ones: Make it obvious, make it attractive, make it easy, and make it satisfying.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        bookId: 'book10',
        title: 'Personal Legend',
        content: 'The core theme of The Alchemist is the "Personal Legend," which is one\'s destiny or purpose in life. The book encourages following one\'s dreams and listening to one\'s heart.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        bookId: 'book7',
        title: 'Spice and Arrakis',
        content: 'The planet Arrakis, also known as Dune, is the only source of "melange" or "the spice," a drug that extends life, provides prescience, and is essential for interstellar travel. This makes Arrakis the most valuable planet in the universe.',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];

// --- DOM Elements ---
const searchInput = document.getElementById('search-input');
const addBookBtn = document.getElementById('add-book-btn');
const bookList = document.getElementById('book-list');
const createNoteBtn = document.getElementById('create-note-btn');
const newNoteForm = document.getElementById('new-note-form');
const noteTitleInput = document.getElementById('note-title-input');
const noteContentInput = document.getElementById('note-content-input');
const noteBookSelect = document.getElementById('note-book-select');
const saveNoteBtn = document.getElementById('save-note-btn');
const deleteNoteBtn = document.getElementById('delete-note-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const noteViewer = document.getElementById('note-viewer');
const viewerTitle = document.getElementById('viewer-title');
const viewerContent = document.getElementById('viewer-content');
const viewerBookInfo = document.getElementById('viewer-book-info');
const viewerMeta = document.getElementById('note-meta');
const editNoteViewerBtn = document.getElementById('edit-note-viewer-btn');
const deleteNoteViewerBtn = document.getElementById('delete-note-viewer-btn');
const welcomeMessage = document.getElementById('welcome-message');
const noteEditor = document.getElementById('note-editor');
const noteTitlesList = document.getElementById('note-titles-list');
const bookDetailViewer = document.getElementById('book-detail-viewer');
const detailBookTitle = document.getElementById('detail-book-title');
const detailBookAuthor = document.getElementById('detail-book-author');
const detailBookLink = document.getElementById('detail-book-link');
const createNoteForBookBtn = document.getElementById('create-note-for-book-btn');
const notesForBookList = document.getElementById('notes-for-book-list');
const emptyBookNotesMessage = document.getElementById('empty-book-notes-message');

const markdownEditBtn = document.getElementById('markdown-edit-btn');
const markdownPreviewBtn = document.getElementById('markdown-preview-btn');
const notePreviewOutput = document.getElementById('note-preview-output');

// --- Global State ---
let books = [];
let notes = [];
let currentBookId = null; // The book currently selected in the sidebar
let currentNoteId = null; // The note currently being edited or viewed
let isEditing = false; // Flag to indicate if we are in edit mode

// --- Local Storage Keys ---
const BOOKS_STORAGE_KEY = 'myReadingNotes_books';
const NOTES_STORAGE_KEY = 'myReadingNotes_notes';

// --- Functions ---

/**
 * Initializes data from local storage or uses initial data.
 */
function loadData() {
    const storedBooks = localStorage.getItem(BOOKS_STORAGE_KEY);
    const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);

    // If no data in local storage, use initial data. Otherwise, parse stored data.
    books = storedBooks ? JSON.parse(storedBooks) : initialBooks;
    notes = storedNotes ? JSON.parse(storedNotes) : initialNotes;

    // Ensure notes have created_at and updated_at for older data
    notes.forEach(note => {
        if (!note.created_at) note.created_at = new Date().toISOString();
        if (!note.updated_at) note.updated_at = new Date().toISOString();
    });

    renderBookList();
    showWelcomeMessage();
    populateBookSelect(noteBookSelect);
}

/**
 * Saves current books and notes data to local storage.
 */
function saveData() {
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

/**
 * Renders the list of books in the sidebar.
 */
function renderBookList() {
    bookList.innerHTML = '';
    if (books.length === 0) {
        bookList.innerHTML = '<li class="empty-state-list">No books added yet.</li>';
        return;
    }
    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button data-book-id="${book.id}">
                ${book.title}
            </button>
            <button class="delete-book-btn" data-book-id="${book.id}" aria-label="Delete book">
                <span class="material-symbols-outlined">delete</span>
            </button>
        `;
        bookList.appendChild(li);
    });
    // Add active class to the currently selected book
    if (currentBookId) {
        const activeBookButton = bookList.querySelector(`button[data-book-id="${currentBookId}"]`);
        if (activeBookButton) {
            activeBookButton.classList.add('active');
        }
    }
}

/**
 * Populates a select dropdown with book titles.
 * @param {HTMLSelectElement} selectElement The select element to populate.
 * @param {string} selectedBookId The ID of the book to pre-select.
 */
function populateBookSelect(selectElement, selectedBookId = null) {
    selectElement.innerHTML = '<option value="">Select a Book</option>'; // Default option
    books.forEach(book => {
        const option = document.createElement('option');
        option.value = book.id;
        option.textContent = book.title;
        if (book.id === selectedBookId) {
            option.selected = true;
        }
        selectElement.appendChild(option);
    });
}

/**
 * Handles adding a new book.
 */
function handleAddBook() {
    const title = prompt('Enter book title:');
    if (title === null || title.trim() === '') {
        return; // User cancelled or entered empty title
    }
    const author = prompt('Enter book author (optional):');
    const link = prompt('Enter book link (optional):');

    const newBook = {
        id: generateId(),
        title: title.trim(),
        author: author ? author.trim() : 'Unknown Author',
        link: link ? link.trim() : ''
    };
    books.push(newBook);
    saveData();
    renderBookList();
    populateBookSelect(noteBookSelect); // Update book select dropdowns
    displayBookDetails(newBook.id); // Show details of the newly added book
}

/**
 * Handles deleting a book.
 * @param {string} bookId The ID of the book to delete.
 */
function handleDeleteBook(bookId) {
    if (!confirm('Are you sure you want to delete this book and all its associated notes?')) {
        return;
    }
    // Remove notes associated with the book
    notes = notes.filter(note => note.bookId !== bookId);
    // Remove the book
    books = books.filter(book => book.id !== bookId);
    saveData();
    renderBookList();
    populateBookSelect(noteBookSelect);
    showWelcomeMessage(); // Go back to welcome message after deletion
}

/**
 * Displays the welcome message and hides other views.
 */
function showWelcomeMessage() {
    hideAllViews();
    welcomeMessage.classList.add('active');
    currentBookId = null;
    currentNoteId = null;
    isEditing = false;
    renderBookList(); // Ensure no book is active in the list
}

/**
 * Hides all main content views.
 */
function hideAllViews() {
    document.querySelectorAll('.content-area > div').forEach(view => {
        view.classList.remove('active');
    });
}

/**
 * Shows the note editor for creating a new note or editing an existing one.
 * @param {object} note The note object if editing, null if creating new.
 */
function showNoteEditor(note = null) {
    hideAllViews();
    noteEditor.classList.add('active');
    isEditing = !!note; // Set isEditing flag

    noteTitleInput.value = note ? note.title : '';
    noteContentInput.value = note ? note.content : '';
    populateBookSelect(noteBookSelect, note ? note.bookId : currentBookId);

    // Show/hide delete button based on whether we are editing an existing note
    deleteNoteBtn.style.display = isEditing ? 'inline-block' : 'none';
    
    // Set currentNoteId if editing
    currentNoteId = note ? note.id : null;

    // Set editor mode to Edit (text input)
    markdownEditBtn.classList.add('active');
    markdownPreviewBtn.classList.remove('active');
    noteContentInput.style.display = 'block';
    notePreviewOutput.classList.remove('active');
    notePreviewOutput.innerHTML = ''; // Clear preview content
}

/**
 * Handles saving a note (new or edited).
 */
function handleSaveNote() {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();
    const bookId = noteBookSelect.value;

    if (!title || !content || !bookId) {
        alert('Please fill in note title, content, and select a book.');
        return;
    }

    if (isEditing && currentNoteId) {
        // Update existing note
        const noteIndex = notes.findIndex(n => n.id === currentNoteId);
        if (noteIndex > -1) {
            notes[noteIndex] = {
                ...notes[noteIndex],
                title,
                content,
                bookId,
                updated_at: new Date().toISOString()
            };
        }
    } else {
        // Create new note
        const newNote = {
            id: generateId(),
            bookId,
            title,
            content,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        notes.push(newNote);
        currentNoteId = newNote.id; // Set current note to the newly created one
    }

    saveData();
    displayNote(currentNoteId); // Show the saved/new note in viewer mode
    isEditing = false; // Exit edit mode
}

/**
 * Handles deleting the currently viewed/edited note.
 */
function handleDeleteNote() {
    if (!currentNoteId || !confirm('Are you sure you want to delete this note?')) {
        return;
    }
    notes = notes.filter(note => note.id !== currentNoteId);
    saveData();
    displayBookDetails(currentBookId); // Go back to book details or welcome
}

/**
 * Displays a specific note in the viewer.
 * @param {string} noteId The ID of the note to display.
 */
function displayNote(noteId) {
    const note = notes.find(n => n.id === noteId);
    if (!note) {
        showWelcomeMessage(); // Note not found, go to welcome
        return;
    }

    hideAllViews();
    noteViewer.classList.add('active');

    viewerTitle.textContent = note.title;
    viewerContent.innerHTML = marked.parse(note.content); // Render Markdown content

    const book = books.find(b => b.id === note.bookId);
    viewerBookInfo.innerHTML = `From: <a href="#" data-book-id="${book ? book.id : ''}">${book ? book.title : 'Unknown Book'}</a>`;

    viewerMeta.textContent = `Created: ${new Date(note.created_at).toLocaleString()} | Last Updated: ${new Date(note.updated_at).toLocaleString()}`;

    currentNoteId = note.id;
    currentBookId = note.bookId; // Set current book ID based on the note
    renderBookList(); // Update active class in book list
    updateNotesForBookList(currentBookId); // Update notes in sidebar
}

/**
 * Displays details for a specific book and its notes.
 * @param {string} bookId The ID of the book to display.
 */
function displayBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) {
        showWelcomeMessage();
        return;
    }

    hideAllViews();
    bookDetailViewer.classList.add('active');

    detailBookTitle.textContent = book.title;
    detailBookAuthor.textContent = book.author;

    if (book.link) {
        detailBookLink.innerHTML = `<a href="${book.link}" target="_blank" rel="noopener noreferrer" class="read-online-btn">
                                        <span class="material-symbols-outlined">auto_stories</span> Read Online
                                    </a>`;
    } else {
        detailBookLink.innerHTML = '';
    }

    currentBookId = bookId;
    currentNoteId = null; // No note selected when viewing book details
    renderBookList(); // Update active class in book list
    updateNotesForBookList(bookId); // Render notes for this book in sidebar
}

/**
 * Renders notes associated with a specific book in the sidebar.
 * @param {string} bookId The ID of the book.
 */
function updateNotesForBookList(bookId) {
    const notesInBook = notes.filter(note => note.bookId === bookId);
    notesForBookList.innerHTML = '';

    if (notesInBook.length === 0) {
        emptyBookNotesMessage.classList.remove('hidden');
        return;
    } else {
        emptyBookNotesMessage.classList.add('hidden');
    }

    notesInBook.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Sort by most recent

    notesInBook.forEach(note => {
        const li = document.createElement('li');
        const noteBtn = document.createElement('button');
        noteBtn.textContent = note.title;
        noteBtn.dataset.noteId = note.id;
        if (currentNoteId === note.id) {
            noteBtn.classList.add('active');
        }
        li.appendChild(noteBtn);
        notesForBookList.appendChild(li);
    });
}

/**
 * Filters and re-renders the book list based on search input.
 */
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Always filter from the original initialBooks array
    const filteredBooks = initialBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    
    books = filteredBooks; // Update the 'books' array which is used for rendering
    renderBookList(); // Re-render the book list with filtered results

    // If search term is empty, reload all data from storage to ensure custom additions are shown
    if (searchTerm === '') {
        loadData(); // This will reload from storage, effectively resetting the filter and showing all books (including user-added ones)
    }
}

// --- Event Listeners ---

// Initial data load on page load
document.addEventListener('DOMContentLoaded', loadData);

// Header Buttons
addBookBtn.addEventListener('click', handleAddBook);
searchInput.addEventListener('input', filterBooks);

// Book List clicks (delegated)
bookList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const bookId = event.target.dataset.bookId;
        if (event.target.classList.contains('delete-book-btn')) {
            event.stopPropagation(); // Prevent opening book details when deleting
            handleDeleteBook(bookId);
        } else {
            // Remove active class from all book buttons
            bookList.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            event.target.classList.add('active');
            displayBookDetails(bookId);
        }
    }
});

// Create Note Button
createNoteBtn.addEventListener('click', () => showNoteEditor());

// Note Editor Buttons
saveNoteBtn.addEventListener('click', handleSaveNote);
deleteNoteBtn.addEventListener('click', handleDeleteNote);
cancelEditBtn.addEventListener('click', () => {
    if (currentNoteId) {
        displayNote(currentNoteId); // Go back to viewing the note
    } else if (currentBookId) {
        displayBookDetails(currentBookId); // Go back to viewing the book details
    } else {
        showWelcomeMessage(); // If neither, back to welcome
    }
});

// Note Viewer Buttons
editNoteViewerBtn.addEventListener('click', () => {
    const note = notes.find(n => n.id === currentNoteId);
    if (note) {
        showNoteEditor(note);
    }
});
deleteNoteViewerBtn.addEventListener('click', handleDeleteNote);

// Notes for Current Book List clicks (delegated)
notesForBookList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const noteId = event.target.dataset.noteId;
        if (noteId) {
            // Remove active class from all note buttons
            notesForBookList.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            event.target.classList.add('active');
            displayNote(noteId);
        }
    }
});

// Create Note from Book Details
createNoteForBookBtn.addEventListener('click', () => {
    if (currentBookId) {
        showNoteEditor({ bookId: currentBookId, title: '', content: '' });
    } else {
        showNoteEditor(); // Fallback if no book is selected
    }
});

// Click listener for the book link in the viewer
viewerBookInfo.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.dataset.bookId) {
        event.preventDefault(); // Prevent default link behavior
        displayBookDetails(event.target.dataset.bookId);
    }
});

// Markdown editor/preview toggle
markdownEditBtn.addEventListener('click', () => {
    markdownEditBtn.classList.add('active');
    markdownPreviewBtn.classList.remove('active');
    noteContentInput.style.display = 'block';
    notePreviewOutput.classList.remove('active');
});

markdownPreviewBtn.addEventListener('click', () => {
    markdownPreviewBtn.classList.add('active');
    markdownEditBtn.classList.remove('active');
    noteContentInput.style.display = 'none';
    notePreviewOutput.classList.add('active');
    notePreviewOutput.innerHTML = marked.parse(noteContentInput.value); // Render markdown
});

// --- Initial Call ---
loadData(); // Ensure data is loaded and rendered on first run
