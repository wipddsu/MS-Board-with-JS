const writeForm = document.getElementById('writeForm');
let boards = [];

//게시글 작성일 함수
function recordDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return `${year}-${month}-${day}`;
}

// 게시글 목록 index 카운트 함수
function indexCnt() {
  let count = 0;

  for (const item of boards) {
    item ? count++ : 0;
  }

  return count;
}

//변수를 담은 객체를 로컬스토리지에 담기 위해 생성자 함수 사용
function Board(indexNum, subjectStr, writerStr, contentStr) {
  //프로퍼티
  this.index = indexNum;
  this.Subject = subjectStr;
  this.Writer = writerStr;
  this.Content = contentStr;
  this.Date = recordDate();
  this.View = 0;

  // 예외처리를 위한 Setter 함수
  // Setter 제목
  this.setSubject = function (value) {
    if (value.length === 0) throw new Error('제목을 입력해주세요.');
    this.Subject = value;
  };

  // Setter 작성자
  this.setWriter = function (value) {
    if (value.length === 0) throw new Error('작성자를 입력해주세요.');
    this.Writer = value;
  };

  // Setter 내용
  this.setContent = function (value) {
    if (value.length === 0) throw new Error('내용을 입력해주세요.');
    this.Content = value;
  };

  // Setter 함수 실행
  this.setSubject(subjectStr);
  this.setWriter(writerStr);
  this.setContent(contentStr);
}

function submitList(e) {
  e.preventDefault();

  //   form 내부에 있는 input, textarea 등 value 프로퍼티를 가지는 태그는 e.target.'name'을 통해 조작 가능
  const subject = e.target.subject.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  try {
    // 로컬스토리지에서 boards 가져오기
    const boardsObj = JSON.parse(localStorage.getItem('boards'));
    boards = boardsObj;

    // index 할당
    const index = indexCnt();

    // Board 인스턴스 생성
    const instance = new Board(index, subject, writer, content);

    // boards 저장
    boards.push(instance); // 전역 객체 boards에 생성한 instance 담기
    localStorage.setItem('boards', JSON.stringify(boards)); // 로컬스토리지에 boards 객체 저장

    // 작성한 글로 이동
    location.href = `view.html?idx=${index}`;
  } catch (err) {
    alert(err.message);
    console.error(err);
  }
}

writeForm.addEventListener('submit', submitList);
