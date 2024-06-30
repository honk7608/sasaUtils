var inputEl = document.getElementById("inputGrid");

elText = `<div class="inputHead">과목</div>
    <div class="inputHead">성적 등급</div>
    <div class="inputHead">평점</div>`;
var totTime = 0;

for (var i in data) {
    if(!data.hasOwnProperty(i) || i=="pe") {
        continue;
    }
    data[i].credit = 43;
    elText += `<div>${data[i].name}(${data[i].time})</div>
    <select id="${i}_select" oninput="updateFunc('${i}');">
        <option value=43 selected>A+</option>
        <option value=40>A0</option>
        <option value=37>A-</option>
        <option value=33>B+</option>
        <option value=30>B0</option>
        <option value=27>B-</option>
        <option value=23>C+</option>
        <option value=20>C0</option>
        <option value=17>C-</option>
        <option value=13>D+</option>
        <option value=10>D0</option>
        <option value=07>D-</option>
        <option value=00>F</option>
    </select>
    <div id=${i}_credit>4.3</div>`;
    totTime += data[i].time;
}

inputEl.innerHTML = elText;

var totCredit = 43*totTime;
var resEl = document.getElementById("allCredit");

function updateFunc(subjID) {

    selectEl = document.getElementById(`${subjID}_select`);
    creditEl = document.getElementById(`${subjID}_credit`);
    
    totCredit += (selectEl.value - data[subjID].credit) * data[subjID].time;
    creditEl.innerHTML = (selectEl.value/10).toFixed(1);
    data[subjID].credit = selectEl.value;

    resEl.innerHTML = (totCredit/totTime/10).toFixed(2);
}