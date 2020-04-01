const rowBody = `
  <td class="author__row"><input class="author__input" type="text"></td>
  <td class="title__row"><input class="title__input" type="text"></td>
  <td class="table__item">
    <button class="save__button">Save</button>
    <button class="remove__button">Remove</button>
  </td>
`;

const addButton = document.getElementById ('add__button');
addButton.addEventListener ('click', () => {
  const table = document
    .getElementById ('book__table')
    .getElementsByTagName ('tbody')[0];

  const newRow = table.insertRow ();
  newRow.innerHTML = rowBody;
  newRow
    .getElementsByClassName ('save__button')[0]
    .addEventListener ('click', () => {
      const saveButton = newRow.getElementsByClassName ('save__button')[0];
      if (!saveButton.classList.contains ('edit')) {
        const author = newRow.getElementsByClassName ('author__input')[0].value;
        const title = newRow.getElementsByClassName ('title__input')[0].value;
        newRow.getElementsByClassName (
          'author__row'
        )[0].innerHTML = `<p class="author__p">${author}</p>`;
        newRow.getElementsByClassName (
          'title__row'
        )[0].innerHTML = `<p class="title__p">${title}</p>`;
        saveButton.innerHTML = `Edit`;
        saveButton.classList += ' edit';
      } else {
        const author = newRow.getElementsByClassName ('author__p')[0]
          .textContent;
        const title = newRow.getElementsByClassName ('title__p')[0].textContent;
        console.log (author, title);
        newRow.getElementsByClassName (
          'author__row'
        )[0].innerHTML = `<input class="author__input" type="text">`;
        newRow.getElementsByClassName (
          'title__row'
        )[0].innerHTML = `<input class="title__input" type="text">`;
        newRow.getElementsByClassName ('author__input')[0].value = author;
        newRow.getElementsByClassName ('title__input')[0].value = title;
        saveButton.innerHTML = `Save`;
        saveButton.classList = 'save__button';
      }
    });
  newRow
    .getElementsByClassName ('remove__button')[0]
    .addEventListener ('click', () => {
      table.removeChild (newRow);
    });
});
