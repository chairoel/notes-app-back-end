/*eslint linebreak-style: ["error", "windows"]*/
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
};

module.exports = { addNoteHandler };
