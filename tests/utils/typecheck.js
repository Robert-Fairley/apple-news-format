const ts = require("typescript");

const DefaultOptions = {
  noEmit: true,
  target: ts.ScriptTarget.ES2019,
  module: ts.ModuleKind.CommonJS,
};

function typecheck(filepath, options = DefaultOptions) {
  const program = ts.createProgram([filepath], options);
  const emitResult = program.emit();
  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics);
  return formatDiagnostics(diagnostics);
}

function formatDiagnostics(diagnostics) {
  return diagnostics.map((diagnostic) => {
    const { messageText, file, code, category } = diagnostic;
    const result = {
      code,
      file,
      messageText,
      category,
    };
    if (file) {
      const { line, character } = file.getLineAndCharacterOfPosition(
        diagnostic.start
      );
      result.file = file.fileName;
      result.line = line + 1;
      result.character = character + 1;
    }
    return result;
  });
}

module.exports = { typecheck };
