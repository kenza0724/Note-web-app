function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }

function searchNotes() {
  var input, filter, ul, notes, note, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("notes");
  notes = ul.getElementsByTagName('li');
  for (i = 0; i < notes.length; i++) {
    note = notes[i].textContent || notes[i].innerText;
    if (note.toUpperCase().indexOf(filter) > -1) {
      notes[i].style.display = "";
    } else {
      notes[i].style.display = "none";
    }
  }
}
