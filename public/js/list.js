// 로컬 스토리지에서 데이터 가져오기
let boardsStr = localStorage.getItem('boards');
const board = JSON.parse(boardsStr);
const boardsContainer = document.querySelector('table tbody');
const listArr = [];

// 로컬스토리지에 데이터가 없는 경우 빈 객체 [] 저장
if (boardsStr === null) {
  const listInit = JSON.stringify([]);

  localStorage.setItem('boards', listInit);
  boardsStr = listInit;

  // 로컬스토리지에 데이터가 있는 경우 가져와서 tbody에 리스트 렌더
} else if (boardsStr !== '[]') {
  const parsing = JSON.parse(boardsStr);

  for (const item of parsing) {
    const boardHtml = `<tr onclick="location.href='view.html?idx=${item.index}'">
    <td>${item.index + 1}</td>
    <td>${item.Subject}</td>
    <td>${item.Writer}</td>
    <td>${item.Date}</td>
    <td>${item.View}</td>
    </tr>`;

    listArr.push(boardHtml);
  }
}

boardsContainer.innerHTML = listArr.join('\n');
