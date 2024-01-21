// 로컬 스토리지에서 데이터 가져오기
const boardsStr = localStorage.getItem('boards');
const parsing = JSON.parse(boardsStr);

// 버튼 가져오기
const btns = document.querySelectorAll('button');
const updateBtn = document.getElementById('updateList');
const deleteBtn = document.getElementById('deleteList');

// 쿼리스트링 변수로 할당
const idxSearch = new URLSearchParams(location.search);
const listIdx = +idxSearch.get('idx');

// 게시글 내용 렌더링
const filterList = parsing[listIdx];
const filterListKeys = Object.keys(filterList);
const paintContainer = document.querySelectorAll('form p');

for (let i = 0; i < 3; i++) {
  const key = filterListKeys[i + 1];

  paintContainer[i].innerText = filterList[key];
}

// 조회수 카운트
const beforeUrl = document.referrer;
const beforePath = beforeUrl.split('/').pop();
const entries = performance.getEntriesByType('navigation')[0];

// 이전 url에 list.html이 있으면 조회수 카운팅
if (beforePath === 'list.html') {
  if (entries.type !== 'reload') {
    filterList['View']++;
    // 로컬 스토리지에 업데이트된 데이터 저장
    localStorage.setItem('boards', JSON.stringify(parsing));
  }
}

// 수정, 삭제 버튼 기본동작 막기
function preventDefault(e) {
  e.preventDefault();
}

btns.forEach((item) => item.addEventListener('click', preventDefault));

// 게시글 삭제 이벤트 핸들러
function deleteHandler(e) {
  // 해당 리스트 삭제
  parsing.splice(listIdx, 1);

  // 해당 리스트 삭제 후 그 다음 인덱스 요소들의 index 값 업데이트
  for (let i = listIdx; i < parsing.length; i++) {
    parsing[i]['index']--;
  }

  // 로컬 스토리지에 업데이트된 데이터 저장
  localStorage.setItem('boards', JSON.stringify(parsing));
  location.href = `/board/list.html`;
}

deleteBtn.addEventListener('click', deleteHandler);

// 게시글 수정 페이지 이동 이벤트 핸들러
function updateHandler() {
  location.href = `modify.html?idx=${listIdx}`;
}

updateBtn.addEventListener('click', updateHandler);
