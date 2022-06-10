const elcont = document.querySelector('#app');
const arrsrc = [
  './images/Original_Cola.png',
  './images/Violet_Cola.png',
  './images/Yellow_Cola.png',
  './images/Cool_Cola.png',
  './images/Green_Cola.png',
  './images/Orange_Cola.png',
];
const arrColaName = [
  'Original_Cola',
  'Violet_Cola',
  'Yellow_Cola',
  'Cool_Cola',
  'Green_Cola',
  'Orange_Cola',
];

let userMoney = 100000;
let restMoney = 0;
let totalPrice = 0;

function paint() {
  const elh1 = document.createElement('h1');
  elh1.classList.add('title');

  const elimg = document.createElement('img');
  elimg.classList.add('title-logo');
  elimg.src = './images/Logo_img.png';

  const elvendingmachine = document.createElement('section');
  elvendingmachine.classList.add('vending-machine');

  elcont.appendChild(elh1);
  elh1.appendChild(elimg);

  // 왼쪽
  const elcontLeft = document.createElement('article');
  elcontLeft.classList.add('cont-left');

  const elUl = document.createElement('ul');
  elUl.classList.add('btn-wrap');

  for (let i = 0; i < 6; i++) {
    const elColaLi = document.createElement('li');
    const elColaBtn = document.createElement('button');
    elColaBtn.classList.add('btn-cola');
    elColaBtn.classList.add(`${arrColaName[i]}`);
    const ColaImg = document.createElement('img');
    ColaImg.src = `${arrsrc[i]}`;
    const elColaName = document.createElement('span');
    elColaName.classList.add('cola-name');
    console.log(elColaName);
    elColaName.innerText = `${arrColaName[i]}`;
    const elColaPrice = document.createElement('span');
    elColaPrice.classList.add('cola-price');
    elColaPrice.innerText = '1000원';

    elUl.appendChild(elColaLi);
    elColaLi.appendChild(elColaBtn);
    elColaBtn.appendChild(ColaImg);
    elColaBtn.appendChild(elColaName);
    elColaBtn.appendChild(elColaPrice);
  }

  const elBuy = document.createElement('section');
  elBuy.classList.add('grid-buy');

  const elhidden = document.createElement('h2');
  elhidden.classList.add('hidden');
  elhidden.innerText = '구매관련목록';

  const elContBalanceMoney = document.createElement('div');
  elContBalanceMoney.classList.add('cont-balance-money');
  elContBalanceMoney.innerText = '잔액 : ';

  const elSpMoney = document.createElement('span');
  elSpMoney.classList.add('sp-money');
  elSpMoney.innerText = `${restMoney}원`;

  const BtnReturn = document.createElement('button');
  BtnReturn.classList.add('btn-return');
  BtnReturn.innerText = '거스름돈 반환';

  const elInputMoney = document.createElement('input');
  elInputMoney.classList.add('cont-input-money');
  elInputMoney.type = 'number';
  elInputMoney.placeholder = '입금액 입력';

  const btnDeposit = document.createElement('button');
  btnDeposit.classList.add('btn-deposit');
  btnDeposit.innerText = '입금';

  const contListBuy = document.createElement('div');
  contListBuy.classList.add('list-buy');

  const btnIncome = document.createElement('button');
  btnIncome.classList.add('btn-income');
  btnIncome.innerText = '획득';

  // 오른쪽
  const elcontRight = document.createElement('article');
  elcontRight.classList.add('cont-right');

  // 오른쪽 위
  const elcontRightHigh = document.createElement('div');
  elcontRightHigh.classList.add('cont-righthigh');

  const elh2 = document.createElement('h2');
  elh2.innerText = '소지금';
  elh2.classList.add('hidden');

  const elcontPossession = document.createElement('div');
  elcontPossession.innerText = '소지금 : ';
  elcontPossession.classList.add('cont-possession');

  const elTxtPos = document.createElement('span');
  elTxtPos.innerText = `${userMoney} 원`;
  elTxtPos.classList.add('txt-pos');

  // 오른쪽 아래
  const elcontRightLow = document.createElement('div');
  elcontRightLow.classList.add('cont-rightlow');

  const elSubTitle = document.createElement('h2');
  elSubTitle.classList.add('sub-title');
  elSubTitle.innerText = '획득한 음료';

  const listGetBeverage = document.createElement('div');
  listGetBeverage.classList.add('list-getbeverage');

  const txtTotalPrice = document.createElement('strong');
  txtTotalPrice.classList.add('txt-totalprice');
  txtTotalPrice.innerText = `총금액 : ${totalPrice}`;

  //왼쪽
  elcont.appendChild(elvendingmachine);
  elvendingmachine.appendChild(elcontLeft);
  elcontLeft.appendChild(elUl);

  elcontLeft.appendChild(elBuy);
  elBuy.appendChild(elhidden);
  elBuy.appendChild(elContBalanceMoney);
  elContBalanceMoney.appendChild(elSpMoney);

  elBuy.appendChild(BtnReturn);
  elBuy.appendChild(elInputMoney);
  elBuy.appendChild(btnDeposit);

  elBuy.appendChild(contListBuy);
  elBuy.appendChild(btnIncome);

  // 오른쪽
  elvendingmachine.appendChild(elcontRight);
  elcontRight.appendChild(elcontRightHigh);
  elcontRightHigh.appendChild(elh2);
  elcontRightHigh.appendChild(elcontPossession);
  elcontPossession.appendChild(elTxtPos);

  elcontRight.appendChild(elcontRightLow);
  elcontRightLow.appendChild(elSubTitle);
  elcontRightLow.appendChild(listGetBeverage);
  elcontRightLow.appendChild(txtTotalPrice);
}

function input() {
  const elBtnDeposit = document.querySelector('.btn-deposit');
  elBtnDeposit.addEventListener('click', function () {
    let inputMoney = document.querySelector('.cont-input-money').value;
    let elrestMoney = document.querySelector('.sp-money');
    let elTxtPosMoney = document.querySelector('.txt-pos');

    if (userMoney < inputMoney) {
      alert('금액이 부족합니다.');
    } else if (inputMoney == '') {
      alert('숫자를 입력해주세요.');
    } else {
      userMoney -= inputMoney;
      restMoney = parseInt(restMoney) + parseInt(inputMoney);
      elrestMoney.innerText = `${restMoney}원`;
      elTxtPosMoney.innerText = `${userMoney}원`;
      console.log(inputMoney);
    }
  });
}

function returnMoney() {
  const elBtnReturn = document.querySelector('.btn-return');
  elBtnReturn.addEventListener('click', function () {
    let elTxtPosMoney = document.querySelector('.txt-pos');
    let elrestMoney = document.querySelector('.sp-money');
    userMoney = parseInt(userMoney) + parseInt(restMoney);
    restMoney = 0;
    elTxtPosMoney.innerText = `${userMoney}원`;
    elrestMoney.innerText = `${restMoney}원`;
  });
}

function clickCola() {
  const elContListBuy = document.querySelector('.list-buy');
  const colaList = document.querySelectorAll('.btn-cola');

  for (let i = 0; i < 6; i++) {
    colaList[i].addEventListener('click', function () {
      const BtnGetbeverage = document.createElement('button');
      BtnGetbeverage.classList.add('btn-getbeverage');
      BtnGetbeverage.classList.add(`${arrColaName[i]}`);
      const ColaImg = document.createElement('img');
      const elColaName = document.createElement('span');
      elColaName.classList.add('cola-name');
      const elColaNumber = document.createElement('span');
      elColaNumber.classList.add('cola-number');

      elContListBuy.appendChild(BtnGetbeverage);
      BtnGetbeverage.appendChild(ColaImg);
      BtnGetbeverage.appendChild(elColaName);
      BtnGetbeverage.appendChild(elColaNumber);

      let j = 1;
      ColaImg.src = `${arrsrc[i]}`;
      elColaName.innerText = `${arrColaName[i]}`;
      elColaNumber.innerText = `${j}`;
    });
  }
}

function getCola() {
  const elListGetBeverage = document.querySelector('.list-getbeverage');
  const elTotalPrice = document.querySelector('.txt-totalprice');
  const elContListBuy = document.querySelector('.list-buy');
  const elBtnIncome = document.querySelector('.btn-income');
  const elColaBtnList = document.querySelectorAll('.btn-cola');
  elBtnIncome.addEventListener('click', function () {
    let elBtnGetBeverage = elContListBuy.querySelectorAll('.btn-getbeverage');
    let elrestMoney = document.querySelector('.sp-money');
    console.log(elBtnGetBeverage);
    let incomeMoney = 0;
    for (let i = 0; i < elBtnGetBeverage.length; i++) {
      incomeMoney +=
        parseInt(elBtnGetBeverage[i].children[2].innerText) *
        parseInt(elColaBtnList[i].children[2].innerText);
    }

    if (incomeMoney <= restMoney) {
      restMoney -= incomeMoney;
      totalPrice += incomeMoney;
      elTotalPrice.innerText = `총금액 : ${totalPrice}원`;
      elrestMoney.innerText = `${restMoney}원`;
      while (elContListBuy.hasChildNodes()) {
        elListGetBeverage.prepend(elContListBuy.firstChild);
      }
    } else {
      alert('금액이 부족합니다.');
      console.log(totalPrice);
    }
    //자식 노드 모두 삭제
    while (elContListBuy.hasChildNodes()) {
      elContListBuy.removeChild(elContListBuy.firstChild);
    }
  });
}

function init() {
  paint();
  input();
  returnMoney();
  clickCola();
  getCola();
}

init();
