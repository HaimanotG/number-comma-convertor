import * as vscode from "vscode";

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "number-comma-converter.convertNumbers",
    async () => {
      // Get the text from the clipboard
      const clipboardText = await vscode.env.clipboard.readText();

      // Split the text into lines
      const lines: string[] = clipboardText.split("\n");

      // Convert each line (number) to comma separated string
      const convertedLines: string[] = lines.map((line) => {
        const trimmedLine: string = line.trim(); // Remove leading/trailing whitespace

        if (trimmedLine === "") {
          return ""; // Keep empty lines empty
        }

        if (!isNaN(Number(trimmedLine))) {
          return trimmedLine + ",";
        } else {
          return trimmedLine; // Return the original line if it's not a number
        }
      });

      // Join the converted lines back into a single string
      const convertedText: string = convertedLines.join("\n");

      // Paste the converted text into the active editor
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.start, convertedText); // Insert at the current cursor position
        });
      } else {
        vscode.window.showInformationMessage("No active text editor found.");
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

export { activate, deactivate };
