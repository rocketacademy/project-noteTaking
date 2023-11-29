import { act, render, screen } from "@testing-library/react";
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
});
