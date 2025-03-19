# Number Comma Converter

A Visual Studio Code extension that converts a list of numbers to a comma-separated list.  It reads numbers from the clipboard and inserts the converted list into the current editor at the cursor position.

## Features

*   **Convert Numbers to Comma List:** Takes a list of numbers from the clipboard, adds a comma to the end of each number, and inserts the resulting comma-separated list at the cursor's position in the active text editor.
*   **Command Palette Integration:**  The conversion command is accessible through the VS Code Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`).
*   **Non-Numeric Text Handling:** Lines in the clipboard that are not numbers are left untouched.
*   **TypeScript:**  The extension is written in TypeScript for enhanced maintainability and code quality.

## Usage

1.  **Copy Numbers to Clipboard:** Copy the list of numbers you want to convert to your system clipboard.  Make sure each number is on a new line. Example:

    ```
    1234567
    89012
    3456
    ```

2.  **Open a Text Editor:** Open any text file in Visual Studio Code where you want to insert the converted list.

3.  **Run the Command:**
    *   Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux) to open the Command Palette.
    *   Type "Convert Numbers" (or the exact title of your command in `package.json`).
    *   Select "Convert Numbers to Comma List (From Clipboard)" from the list.

4.  **Converted List Inserted:** The comma-separated list will be inserted at your current cursor position in the editor.  Example output (after conversion):

    ```
    1234567,
    89012,
    3456,
    ```

## Extension Settings

There are no configurable settings for this extension.

## Requirements

*   Visual Studio Code
*   Node.js and npm (for building and packaging the extension, if you're modifying it)

## Known Issues

*   Clipboard access might require user permission in some environments. VS Code handles permission prompts automatically.
*   The extension assumes the clipboard contains plain text. Formatted text (e.g., from spreadsheets) might not be parsed correctly.

## Release Notes

### 1.0.0

*   Initial release of the Number Comma Converter extension.
*   Basic functionality: Converts a list of numbers from the clipboard to a comma-separated list and inserts it into the editor.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues for bug reports or feature requests.

## License

[Your License] (e.g., MIT License)

## Credits

[Optional: Add credits to yourself or any contributors]
