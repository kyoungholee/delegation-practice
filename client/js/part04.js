const contents = document.querySelector('.contents');
const textfixld = document.querySelector('#comment37');
const send = document.querySelector('.send');
const asd = document.querySelector('.comment_container'
);

function handler(e) {
  //console.log(e.target)

  let target = e.target;

  //내가 누른 target에 속성이 없으면 부모에 속성이 있을때까지 계속해서 찾아라 !! 
  while( !target.getAttribute('data-name') ) {
    //부모의 타켓을 찾아서 target에 넣어줘
    target = target.parentElement;

    if( target.nodeName === 'BODY') {
     break;
    }
  }

  if(target.dataset.name === 'comment') {
    console.log("댓글 달기 ")
    textfixld.focus();
  }

  if(target.dataset.name === 'send') {
    console.log( textfixld.value );

    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/oh.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">이경호</a></div>
                <div class="text_field">${textfixld.value}</div>
            </div>
        </div>
    </div>
    `
    
    asd.insertAdjacentHTML('beforeend', template);

    //clearText(textfixld);
  }

  if(target.dataset.name === 'like') {
    console.log("like");

    // node.classList.add(className)
    target.classList.toggle('active')
  }
}

contents.addEventListener('click', handler);

textfixld.addEventListener('keydown',(e)=>{

  if(e.keyCode === 13){
    textfixld.value

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textfixld.value}</div>
              </div>
          </div>
      </div>
      `
      asd.insertAdjacentHTML('beforeend', template);

      clearText(textfixld)
  }
})












