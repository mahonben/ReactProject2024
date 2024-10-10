import React from "react";


// 클래스 필드 문법 사용하여 bind하는 문장을 자동하지 않는다
// 이벤트 처리 함수에서 상태설정을 위해 사용하는 this를 bind
class MyButton extends React.Component{

    constructor(props) {
        super(props);

        this.state ={isToggleOn: true}
    }

    handleClick(){
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={() =>this.handleClick()}>
                My Button {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

export default MyButton



