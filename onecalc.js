let subjID = "math1";

var examMaxPoint = 0;
var curPoint = 0;
var curGrade = "F";
var curCredit = 0;
var curPointEl = document.getElementById("curPointEl")
var curGradeEl = document.getElementById("curGradeEl")
var curCreditEl = document.getElementById("curCreditEl")
var calResult1El = document.getElementById("calResult1")
var calResult2El = document.getElementById("calResult2")
var goalSelectEl = document.getElementById("goalSelect")
var allCreditEl = document.getElementById("allCredit")

function resetSubj() {
    data[subjID].credit = curCredit;

    curPoint = 0;
    curGrade = "F";
    curCredit = 0;
    subjID = document.getElementById("subjSelect").value;
    var elText = `<div class="inputHead">평가구분</div>
    <div class="inputHead">배점</div>
    <div class="inputHead">득점</div>`;
    for(i in data[subjID].list) {
        elText += `
        <div>${data[subjID].list[i].name}</div>
        <div>${data[subjID].list[i].maxPoint}</div>
        <input type="number" id="${i}thEl" value=${data[subjID].list[i].value} min=-1 max=${data[subjID].list[i].maxPoint+1} step=1 oninput="updateFunc(${i})"/>`
    }
    var inputGridEl = document.getElementById("inputGrid");
    inputGridEl.innerHTML = elText;

    calResult1El.style.gridColumnStart=1;
    if(data[subjID].examRate) {
        calResult1El.style.gridColumnEnd=2;
        calResult2El.style.display="block";
    } else {
        calResult1El.style.gridColumnEnd=3;
        calResult2El.style.display="none";
    }

    examMaxPoint = 100*data[subjID].examRate;
    updateFunc(-1);
}

function updateFunc(index) {
    if(index != -1) {
        inputValue = document.getElementById(`${index}thEl`).value;
        if(inputValue > data[subjID].list[index].maxPoint) {
            document.getElementById(`${index}thEl`).value = 0;
        }
        else if(inputValue < 0) {
            document.getElementById(`${index}thEl`).value = data[subjID].list[index].maxPoint;
        }
        data[subjID].list[index].value = Number(document.getElementById(`${index}thEl`).value);
        curPoint = 0;
        for(i in data[subjID].list) {
            curPoint += data[subjID].list[i].value*data[subjID].list[i].rate;
        }
    }
    if(data[subjID].isPF) {
        if(curPoint >= 59.5) {curGrade = 'P'; curCredit="-"}
        else {curGrade = 'F'; curCredit="-"}
    } else {
        if(curPoint >= 89.5) {curGrade = 'A+'; curCredit=4.3}
        else if(curPoint >= 84.5) {curGrade = 'A0'; curCredit=4.0}
        else if(curPoint >= 79.5) {curGrade = 'A-'; curCredit=3.7}
        else if(curPoint >= 74.5) {curGrade = 'B+'; curCredit=3.3}
        else if(curPoint >= 69.5) {curGrade = 'B0'; curCredit=3.0}
        else if(curPoint >= 64.5) {curGrade = 'B-'; curCredit=2.7}
        else if(curPoint >= 59.5) {curGrade = 'C+'; curCredit=2.3}
        else if(curPoint >= 54.5) {curGrade = 'C0'; curCredit=2.0}
        else if(curPoint >= 49.5) {curGrade = 'C-'; curCredit=1.7}
        else if(curPoint >= 44.5) {curGrade = 'D+'; curCredit=1.3}
        else if(curPoint >= 39.5) {curGrade = 'D0'; curCredit=1.0}
        else if(curPoint >= 34.5) {curGrade = 'D-'; curCredit=0.7}
        else {curGrade = 'F'; curCredit=0.0}
    }

    curPointEl.innerHTML = curPoint;
    curGradeEl.innerHTML = curGrade;
    curCreditEl.innerHTML = curCredit;
    calResult1El.innerHTML = `원점수 ${(curPoint - Number(goalSelectEl.value) + 0.5).toFixed(2)}점`;
    calResult2El.innerHTML = `지필평가 ${((curPoint - Number(goalSelectEl.value) + 0.5)/examMaxPoint*100).toFixed(2)}점`;
    data[subjID].credit = curCredit=='-'?0:curCredit;
};

resetSubj();