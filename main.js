class Book {
  constructor(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
  }
}

function addBookToLibrary() {
  const addBtnCont = document.querySelector(".addBtnCont");
  const addBtn = document.createElement("button");
  document.body.appendChild(addBtnCont);
  addBtnCont.appendChild(addBtn);
  addBtn.textContent = "Add Book";

  addBtnCont.style.display = "flex";
  addBtnCont.style.justifyContent = "center";

  addBtnCont.style.width = "8%";
  addBtnCont.style.height = "40px";

  addBtn.style.width = "100%";
  addBtn.style.borderRadius = "10px";
  addBtn.style.border = "none";
  addBtn.style.backgroundColor = "white";

  const addBooksCont = document.createElement("div");
  document.body.appendChild(addBooksCont);
  addBooksCont.style.width = "85%";
  addBooksCont.style.display = "grid";
  addBooksCont.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(350px, 350px))";
  addBooksCont.style.gap = "20px";
  addBooksCont.style.fontSize = "1.3rem";
  addBooksCont.style.justifyContent = "center";

  addBtn.addEventListener("click", () => {
    addBtn.disabled = true;

    const cont = document.createElement("div");
    const form = document.createElement("form");
    const title = document.createElement("h2");
    const addTitle = document.createElement("input");

    const addAuthor = document.createElement("input");
    const addPages = document.createElement("input");
    const labelRead = document.createElement("label");
    const read = document.createElement("input");
    const submit = document.createElement("input");

    document.body.appendChild(cont);

    cont.appendChild(title);
    cont.appendChild(form);
    form.appendChild(addTitle);

    form.appendChild(addAuthor);
    form.appendChild(addPages);
    form.appendChild(labelRead);
    form.appendChild(read);
    form.appendChild(submit);

    title.textContent = "ADD YOUR BOOK";

    addTitle.placeholder = "Add Title";

    addAuthor.placeholder = "Add Author";
    addPages.placeholder = "Add Pages";
    addPages.type = "Number";
    labelRead.htmlFor = "tick";
    labelRead.textContent = "Have you read it?";
    read.type = "checkbox";
    read.id = "tick";
    submit.type = "submit";

    cont.style.position = "fixed";

    cont.style.backgroundColor = "gold";
    cont.style.borderRadius = "20px";
    cont.style.top = "50%";
    cont.style.left = "50%";
    cont.style.height = "300px";
    cont.style.width = "300px";
    cont.style.marginTop = "-200px";
    cont.style.marginLeft = "-150px"; // 50% of 300px width is 150px.

    cont.style.display = "flex";
    cont.style.flexDirection = "column";
    cont.style.alignItems = "center";

    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "center";
    form.style.justifyContent = "space-evenly";
    form.style.height = "100%";
    form.style.width = "100%";

    submit.addEventListener("click", (e) => {
      e.preventDefault();

      let checked;

      if (read.checked === true) {
        checked = "Read";
      } else {
        checked = "Not Read";
      }

      const newBook = new Book(
        addTitle.value,
        addAuthor.value,
        addPages.value,
        checked
      );

      myLibrary.push(newBook);

      // cont.style.display = 'none'
      document.body.removeChild(cont);
      addBtn.disabled = false;

      for (let i = 0; i < myLibrary.length; i++) {
        const displayCont = document.createElement("div");

        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("button");
        const remove = document.createElement("button");

        addBooksCont.appendChild(displayCont);
        displayCont.appendChild(title);
        displayCont.appendChild(author);
        displayCont.appendChild(pages);
        displayCont.appendChild(read);
        displayCont.appendChild(remove);

        displayCont.style.height = "200px";
        displayCont.style.display = "flex";
        displayCont.style.flexDirection = "column";
        displayCont.style.alignItems = "center";
        displayCont.style.justifyContent = "space-around";
        displayCont.style.backgroundColor = "white";
        displayCont.style.borderRadius = "20px";

        read.style.width = "30%";
        read.style.height = "15%";
        remove.style.width = "30%";
        remove.style.height = "15%";

        title.textContent = myLibrary[0].title;
        author.textContent = myLibrary[0].author;
        pages.textContent = myLibrary[0].page + " pages";
        read.textContent = myLibrary[0].read;
        remove.textContent = "Remove";

        if (read.textContent === "Read") {
          read.style.backgroundColor = "green";
        } else {
          read.style.backgroundColor = "red";
        }

        myLibrary.shift();

        read.addEventListener("click", (e) => {
          console.log(read.textContent);
          if (read.textContent === "Read") {
            read.textContent = "Not read";
            read.style.backgroundColor = "red";
          } else {
            read.textContent = "Read";
            read.style.backgroundColor = "green";
          }
        });

        remove.addEventListener("click", () => {
          addBooksCont.removeChild(displayCont);
        });
      }
    });
  });
}

addBookToLibrary();

const myLibrary = [];

// ok now you will need to create a remove button to remove the added book.
