import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainPage from "./MainPage";
import NotesProvider from "../../provider/NotesProvider";

describe("New Note Creation", () => {
  test("Clicking Add New Note button renders note editor", async () => {
    // Given blank Notes App state
    render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    );

    // When we click Add New Note button
    const addNewNoteButton = screen.getByText("Add New Note");
    await act(() => {
      userEvent.click(addNewNoteButton);
    });

    // Then note title input, note body input and save button are visible
    const titleInput = screen.getByPlaceholderText("Enter Note Title Here!");
    const bodyInput = screen.getByTestId("noteContentInput");
    const saveButton = screen.getByText("Save");
    expect(titleInput).toBeVisible();
    expect(bodyInput).toBeVisible();
    expect(saveButton).toBeVisible();
  });

  test("Saving new note causes new note to appear in notes list", async () => {
    // Given blank Notes App state
    const { container } = render(
      <NotesProvider>
        <MainPage />
      </NotesProvider>
    );

    // When we click Add New Note button, enter text and save it
    // Click Add New Note
    const addNewNoteButton = screen.getByText("Add New Note");
    await act(() => {
      userEvent.click(addNewNoteButton);
    });

    // Retrieve title input, body input and save button
    const titleInput = screen.getByTestId("titleInput");
    const bodyInput = container.querySelector(".ql-editor");
    const saveButton = screen.getByText("Save");

    // Enter text into title and body fields
    await act(async () => {
      await userEvent.type(titleInput, "Foo");
      await userEvent.type(bodyInput, "Bar");
    });

    // Click Save
    await act(async () => {
      await userEvent.click(saveButton);
    });

    // Then new note becomes visible in notes list
    // Retrieve new note list item
    const noteListItem = screen.getByText("Foo");
    const noteListItemDate = screen.getByText(
      new Date().toLocaleDateString("en-UK")
    );

    // Assert new note is visible in list
    expect(noteListItem).toBeVisible();
    expect(noteListItemDate).toBeVisible();
  });
});
