window.onload= function() {
    loadNotes();
}

function saveNoteToStorage(note){
    var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    existingNotes.push(note);
    localStorage.setItem("notes", JSON.stringify(existingNotes));
}

function addNotet() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value.trim();

    if (noteText !== "") {
        saveNoteToStorage(noteText);
        loadNotes();
        noteInput.value = "";
    }
}

function loadNotes() {
    var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    var noteList = document.getElementById("noteList");

    noteList.innerHTML = "";

    existingNotes.forEach(function(note, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
        ${note}
        <button onclick = "editNote(${index})">Edit<button>
        <button onclick = "deleteNote(${index})">Delete<button>
        `;
        noteList.appendChild(listItem);
    });
}


function editNote(index) {
    var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    var updateNote = promp("Update you' re note:",existingNotes[index]);

    if (updateNote !== null) {
        existingNotes[index] = updatedNote;
        localStorage.setItem("notes",JSON.stringify(existingNotes));
        loadNotes();
    }
}

function deleteNote(index) {
    var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    existingNotes.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(existingNotes));
    loadNotes();
}