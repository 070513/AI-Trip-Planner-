const travelData = {
    서울: {
        관광: ["경복궁", "북촌한옥마을", "N서울타워"],
        맛집: ["광장시장", "명동교자", "익선동 맛집거리"],
        휴양: ["한강공원", "서울숲", "남산공원"],
        쇼핑: ["명동", "홍대", "코엑스"]
    },

    부산: {
        관광: ["감천문화마을", "해동용궁사", "광안대교"],
        맛집: ["돼지국밥", "밀면", "해산물 시장"],
        휴양: ["해운대", "광안리", "송정해수욕장"],
        쇼핑: ["서면", "남포동", "신세계 센텀시티"]
    },

    제주: {
        관광: ["성산일출봉", "용두암", "한라산"],
        맛집: ["흑돼지", "갈치조림", "전복죽"],
        휴양: ["협재해변", "함덕해수욕장", "우도"],
        쇼핑: ["동문시장", "제주 면세점", "칠성로"]
    }
};

function generateTrip() {

    const destination =
        document.getElementById("destination").value;

    const start =
        new Date(document.getElementById("startDate").value);

    const end =
        new Date(document.getElementById("endDate").value);

    const style =
        document.getElementById("style").value;

    const result =
        document.getElementById("result");

    if(isNaN(start) || isNaN(end)){
        alert("날짜를 입력하세요.");
        return;
    }

    let days =
        Math.floor((end - start) /
        (1000*60*60*24)) + 1;

    if(days <= 0){
        alert("날짜를 다시 선택하세요.");
        return;
    }

    let html = "";

    for(let i=1; i<=days; i++){

        const place =
            travelData[destination][style]
            [(i-1)%3];

        html += `
        <div class="day">
            <h3>Day ${i}</h3>
            <p>📍 ${place}</p>
            <p>🍴 추천 맛집 방문</p>
            <p>🏨 숙소 체크인</p>
        </div>
        `;
    }

    result.innerHTML = html;
}

function saveTrip(){

    localStorage.setItem(
        "tripPlan",
        document.getElementById("result").innerHTML
    );

    alert("일정이 저장되었습니다.");
}

function loadTrip(){

    const data =
        localStorage.getItem("tripPlan");

    if(data){
        document.getElementById("result").innerHTML =
        data;
    }else{
        alert("저장된 일정이 없습니다.");
    }
}
