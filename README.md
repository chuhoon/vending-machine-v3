# Vending Machine (반응형 자판기)

피그마를 보고 Vending Machine 제작

[배포링크:elephant:](https://chuhoon.github.io/vending-machine-v3/vendingmachine.html)

![vending-machine](https://user-images.githubusercontent.com/68219145/165704030-4a79e59d-b1d7-450e-9aca-13715141d601.gif)

### 소개

> 피그마를 보고 똑같이 구현하는 토이 프로젝트를 하였습니다. 개발스택은 HTML, CSS를 사용했으며 반응형으로 제작하였습니다. 왼쪽 컨테이너는 grid를 사용해서 만들었고 전체적인 틀은 flex를 사용했습니다.

<br>

### 개발스택

- <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>

- <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>

<br>

### 느낀점

1. float과 flex를 필요한 곳에 적재적소에 배치해야한다.
2. position: relative와 position: absolute를 남발하지 말자 코드가 지저분해 보인다.
3. width 값을 지정하고 height 값은 지정하지 않는다. padding margin으로 자연스럽게 height 값을 맞춘다.
4. 공통적으로 사용될 모듈을 찾아 코드를 줄인다.
5. box-sizing으로 border의 두께가 높이,너비의 포함되지 않게 한다.
