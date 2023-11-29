# Rocket Academy Notes App Testing

You and your partner are tasked with testing Rocket Academy's Notes app from Workshop 1. This branch contains Rocket Academy's app implementation for you to write tests for.

### App Features

1. A place to save title, date and content of each note
2. A list of note titles that allows users to select which note to view
3. Add or delete notes to/from the list
4. Editing and saving of notes after initial creation
5. Persist notes through different sessions utilising local storage
6. Rich text editor with https://quilljs.com/

### App Components

1. Main Page to hold all components
2. Note List to display summary of saved notes
3. Note Detail to deplay details of notes in list or editing tool

### Suggested Tests to Write

- Add New Note opens editor in right column
- Enter Note Title input saves note title
- Note body input saves note body
- Save button renders new note on right column
- Saving saves today’s date with note and renders date with note
- Saving without title triggers alert
- Saving without body triggers alert
- Clicking on existing note renders that note in right column
- Clicking on existing note exits note editor if note editor is open
- Delete button removes note and shows placeholder text in right column
- Edit button opens editor and shows current note title and body
- Editor formatting buttons work as expected
- When editing, Add New Note button makes the note being edited a new note

### Deployed App for Reference

https://rocket-notetaking-comf.netlify.app/
