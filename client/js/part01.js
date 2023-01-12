


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

//console.log(data[0].alt);
//배열에 객체 접근 하는 방법

//const navigation = getNode('.navigation');
const navigation = document.querySelector('.navigation');


//const list = getNodes('.navigation > li');
//console.log("list : ", list);
//console.log(navigation);

//console.log( navigation.children);

const visual = getNode('.visual  img');

function handler(e) {
  
  let target = e.target.closest('li'); //li에 인접한 target 값을 가져온다.
  //console.log(target);
                        //유사배열 
  let arr = Array.from(navigation.children); //진짜 배열 
  //Array.prototype.slice.call(list);
  //let arr = [...list];

  if( !target ) {
    return;
  }

  let index = target.dataset.index;
  //console.log("index : ", index);

  arr.forEach( (item)=> {
    item.classList.remove( "is-active");
     })

     console.log(visual);
     //src속성값을 가져옴
     visual.getAttribute('src');
                                //주소값이기도 하고 안에 ${} 값을 넣기 때문에 백틱을 쓴다.
     visual.setAttribute('src', `./assets/part01/${data[index-1].src}`);
     //alt에 index에 맞게 설정해준다.
     visual.setAttribute('alt', data[index-1].alt);
                                //배열에 변수에 값을 넣을떄는 리터럴 방식으로 넣어줄 필요 없다.
                                // 배열에는 [] 안에 변수를 그냥 넣어 줄 수 있다.      
    target.classList.add("is-active");

}

navigation.addEventListener('click', handler);

















