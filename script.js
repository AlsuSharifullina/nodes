let notesArr = [
  {
    title: 'Заметка 1',
    img: 'https://i.pinimg.com/736x/56/10/e0/5610e03c55c4f5f06d063d10f790f3c1.jpg',
    desc: ' ',
    done: false
  },
    {
    title: 'Заметка 2',
    img: 'https://i.pinimg.com/736x/10/61/2e/10612e16f69c9eb3b99ebc6298a367d4.jpg',
    desc: ' ',
    done: true
  }
];

function getAddBtn(text) {
  let buttonAdd = document.createElement("button");
  buttonAdd.textContent = text;
  buttonAdd.classList.add('btn__add')

  return buttonAdd;
}

function getCard(card, index) {
  let cardElement = document.createElement("li");
  let cardImg = document.createElement("img");
  let cardTitle = document.createElement("h2");
  let cardDesc = document.createElement("p");
  let cardRemoveBtn = document.createElement("button");
  let cardImpotantBtn = document.createElement("button");

  cardElement.classList.add("card");

  if(card.done === true){
    cardElement.classList.add("card__important");
  }

  cardImg.classList.add("card__img");
  cardTitle.classList.add("card__title");
  cardDesc.classList.add("card__desc");
  cardRemoveBtn.classList.add("card__remove");
  cardImpotantBtn.classList.add("card__btn");

  cardTitle.textContent = card.title;
  cardImg.src = card.img;
  cardDesc.textContent = card.desc;

  cardRemoveBtn.textContent = "Удалить";
  cardImpotantBtn.textContent = "Важное";

  cardRemoveBtn.onclick = function () {
    notesArr.splice(index, 1);
    render(notesArr);
  };

  cardImpotantBtn.onclick = function () {
    if (cardElement.classList.contains("card__important") === false) {
      cardImpotantBtn.textContent = "Не важное";
      cardElement.classList.add("card__important");
      card.done = true
    } else {
      cardImpotantBtn.textContent = "Важное";
      cardElement.classList.remove("card__important");
      card.done = false
    }
    console.log(notesArr)
  };

  cardElement.append(
    cardImg,
    cardTitle,
    cardDesc,
    cardRemoveBtn,
    cardImpotantBtn
  );

  return cardElement;
}

function getList() {
  let ul = document.createElement("ul");
  ul.classList.add("list");
  return ul;
}

let list = getList();
let addBtn = getAddBtn("Добавить новую заметку");

addBtn.onclick = function () {
  let titleValue = prompt("Введите название заметки");
  let imgValue = prompt("Введите путь к изображению");
  let descValue = prompt("Введите описание заметки");

  let newNoteObj = {
    title: titleValue,
    img: imgValue,
    desc: descValue,
    done: false
  };

  notesArr.push(newNoteObj);
  render(notesArr);
};

function render(arrNotes) {
  list.innerHTML = " ";
  for (let i = 0; i < arrNotes.length; i++) {
    let newCard = getCard(arrNotes[i], i);
    list.append(newCard);
  }
}

  render(notesArr);

document.body.append(addBtn, list);
