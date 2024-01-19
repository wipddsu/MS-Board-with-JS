// 로컬 스토리지에서 데이터 가져오기
const boardsStr = localStorage.getItem('boards');
const parsing = JSON.parse(boardsStr);

// 폼, 필드 가져오기
const modifyForm = document.getElementById('modifyForm');
const formData = {
  Subject: document.forms[0]['subject'],
  Writer: document.forms[0]['writer'],
  Content: document.forms[0]['content'],
};

// 쿼리스트링 변수로 할당
const idxSearch = new URLSearchParams(location.search);
const listIdx = +idxSearch.get('idx');
const thisList = parsing[listIdx];

// 페이지 렌더링: 수정 폼에 데이터 입력
for (const field in formData) {
  formData[field].value = thisList[field];
}

//게시글 작성일 함수
function recordDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return `${year}-${month}-${day}`;
}

// 빈값 예외처리 이벤트 핸들러
function isEmpty(subject, writer, content) {
  if (formData['Subject'].value.length === 0) throw new Error('제목을 입력해주세요');
  if (formData['Writer'].value.length === 0) throw new Error('작성자을 입력해주세요');
  if (formData['Content'].value.length === 0) throw new Error('내용을 입력해주세요');
}

// 수정 완료 이벤트 핸들러
function completeHandler(e) {
  e.preventDefault();

  const subject = e.target.subject.value;
  const writer = e.target.subject.value;
  const content = e.target.subject.value;

  try {
    // 빈값 예외처리 실행
    isEmpty(subject, writer, content);

    // 변경된 input 데이터 저장
    for (const field in formData) {
      thisList[field] = formData[field].value;
    }

    // 작성일 업데이트
    thisList['Date'] = recordDate();

    // 로컬 스토리지에 업데이트된 데이터 저장
    localStorage.setItem('boards', JSON.stringify(parsing));
    location.href = `/board/view.html?idx=${listIdx}`;
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
}

modifyForm.addEventListener('submit', completeHandler);

// 취소 버튼 가져오기
const cancelBtn = document.getElementById('cancel');

// 취소 클릭시 이전 페이지 이동 이벤트 핸들러
function cancelModify() {
  location.href = document.referrer;
}

cancelBtn.addEventListener('click', cancelModify);
