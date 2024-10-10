// 기본적인 클릭이벤트 처리
// 버튼을 클릭하면 알림장이 표시되게 합니다.

// 함수형 컴포넌트
import React from "react";

function ClickButton(){
    function ClickButton2() {
        alert("버튼을 클릭하셨습니다.");
    }

    return(
        <button onclick = {ClickButton2}>
            버튼
        </button>
    );
}

export default ClickButton