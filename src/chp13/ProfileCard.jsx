import React from "react";
import Card from "./Card";

function ProfileCard() {
    return(
        <div>
            <Card title="Kathy Minn" backgroundColor="#F2CB61">
                <p>안녕하세요 마현빈입니다</p>
                <p>리엑트로 카드형 템플릿을 작성중입니다</p>
            </Card>

            <Card title="Linder Kim" backgroundColor="#FFD9EC">
                <p>안녕하세요 김린다입니다</p>
                <p>리엑트로 카드형 템플릿을 작성중입니다</p>
            </Card>

            <Card title="Kathy Ma" backgroundColor="#FFA7A7">
                <p>안녕하세요 마입니다</p>
                <p>리엑트로 카드형 템플릿을 작성중입니다</p>
            </Card>
        </div>
    );
}

export default ProfileCard;