// @ts-check
const { test, expect } = require("@playwright/test");

test("saving new note causes new note to appear in notes list", async ({
  page,
}) => {
  // Given blank Notes app
  await page.goto("/");

  // When we click Add New Note, enter details and save the note
  // Click Add New Note
  const addNewNoteButton = page.getByText("Add New Note");
  await addNewNoteButton.click();

  // Retrieve title input, body input and save button
  const titleInput = page.getByTestId("titleInput");
  const bodyInput = page.locator(".ql-editor");
  const saveButton = page.getByText("Save");

  // Enter text into title and body fields
  await titleInput.fill("Foo");
  await bodyInput.fill("Bar");

  // Click Save
  await saveButton.click();

  // Then new note becomes visible in notes list
  // Retrieve new note list item
  const noteListItem = page.getByText("Foo");
  // Use year instead of date string to avoid issues with / in dates and regex parsing
  const noteListItemDate = page.getByText(new Date().getFullYear().toString());

  // Assert new note is visible in list
  await expect(noteListItem).toBeVisible();
  await expect(noteListItemDate).toBeVisible();
});
