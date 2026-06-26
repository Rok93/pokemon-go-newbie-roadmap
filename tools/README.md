# Feedback Form Setup

Use `create-feedback-form.gs` to create a no-login Google Form for the guide.

## Steps

1. Open <https://script.google.com/>.
2. Create a new project.
3. Replace `Code.gs` with the contents of `create-feedback-form.gs`.
4. Run `createPokemonGoFeedbackForm`.
5. Approve the Google permission prompt.
6. Open `Executions` or `View > Logs`.
7. Copy `Published form URL`.
8. Share that URL so it can be connected to the guide's feedback tab.

## Form Settings

The script configures:

- No email collection
- No one-response-per-user limit
- Optional nickname
- Response spreadsheet creation
- A confirmation message after submission
