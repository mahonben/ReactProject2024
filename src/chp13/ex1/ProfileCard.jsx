import React from "react";

import Card from "./Card";

function ProfileCard(){

    return(
        <div>
            <Card className="profile-card" title="B612_11">
                <p>안녕하세요~ 마현빈입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>

            <Card className="profile-card" title="B612_12">
                <p>안녕하세요~ 마입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
        </div>

    );

}


export default ProfileCard;
