import './Main.css';

function Main() {
  return (
    <div className='main'>
      <h2>제목 자리입니다.</h2>

      <div className='serch-box'>
        <div className='serch' >       
          <input type="text" placeholder='관련 정보를 입력하는 공간임'></input>
        </div>
      </div>
    </div>
  );
}

export default Main;
