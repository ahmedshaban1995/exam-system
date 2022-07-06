// var qustion=[{qustion:"what is your name ?",answer1:"ahmed",answer2:"mohamed",answer3:"ali"},
// {qustion:"what is your age ?",answer1:26,answer2:30,answer3:27},
// {qustion:"what is your faculty name ?",answer1:"engineering",answer2:"ecomarce",answer3:"computer scince"},
// {qustion:"how many brothers you got ?",answer1:3,answer2:5,answer3:2}]
var Questions = function (qustion, answer, correct) {
    this.qustion = qustion;
    this.answers = answer;
    this.correct = correct;

}
var q1 = "what is your name ?";
var ans1 = ["ahmed", "ali", "mohamed", "mahmoud"];
var correct1 = "ahmed"
var q2 = "what is your age ?";
var ans2 = [26, 30, 27, 18];
var correct2 = 27;
var q3 = "what is your faculty name ?";
var ans3 = ["engineering", "ecommarce", "computer since", "medical"];
var correct3 = "engineering"
var q4 = "how many brothers you got ?";
var ans4 = [2, 0, 5, 4];
var correct4 = 2;
var q5 = "where did you born?";
var ans5 = ["ismalia", "Giza", "cairo", "out of egypt"];
var correct5 = "ismalia";


////////////////qustions and answers divs///////
var container = document.getElementsByClassName("d-flex")[0];
var qu = document.getElementsByClassName("Q")
////////////////////////////////////////////////////////
var answer2 = document.getElementsByClassName("answer2")[0]
var answer3 = document.getElementsByClassName("answer3")[0]
var answer4 = document.getElementsByClassName("answer4")[0]
//////////////////// bottoms////////
var Next = document.getElementsByClassName("Next")[0]
var pageNum=document.getElementsByClassName("badge")[0]
var Previous = document.getElementsByClassName("Previous")[0]
var Mark = document.getElementsByClassName("Mark")[0]
var Unmark = document.getElementsByClassName("Unmark")[0]
var Endtask=document.getElementsByClassName("btn-danger")[0]


//////////////sidebar/////////////

var sidebar = document.getElementsByClassName("sidebar")[0];

///////////////qiustions in sidbar///////
var Mark1 = document.getElementsByClassName("mark0")[0]
var Mark2 = document.getElementsByClassName("mark1")[0]
var Mark3 = document.getElementsByClassName("mark2")[0]
var Mark4 = document.getElementsByClassName("mark3")[0]
var Mark5 = document.getElementsByClassName("mark4")[0]


// function getqustionsm(){
//     for(var i=0;i<qustion.length;i++){
// var qus=qustion[i].qustion
// qu.innerHTML+=qus;
// var ans1=qustion[i].answer1;
// answer1.innerHTML+=ans1;
// var ans2=qustion[i].answer2;
// answer2.innerHTML+=ans2
// var ans3=qustion[i].answer3;
// answer3.innerHTML+=ans3
//     }

// }
// getqustions();
// function useNext(){

// }
var qustion1 = new Questions(q1, ans1, correct1);
var qustion2 = new Questions(q2, ans2, correct2);
var qustion3 = new Questions(q3, ans3, correct3);
var qustion4 = new Questions(q4, ans4, correct4);
var qustion5 = new Questions(q5, ans5, correct5);

// console.log(qustion1);

var correctAnswers = [correct1, correct2, correct3, correct4, correct5]
var allqustions = [qustion1, qustion2, qustion3, qustion4, qustion5]

var new_allqustions = allqustions.sort(() => 0.5 - Math.random());
console.log(new_allqustions);
// function qustionsRandom() {

//     // for (var i = 0; i < 5; i++) {
//     //     var count = Math.floor(Math.random() * Number(allqustions.length))
//     //     var x = allqustions.splice(count, 1);
//     //     new_allqustions.push(x);
//     // }
//     // while(allqustions.length==0);
// }
// qustionsRandom();

function displayQuestion() {
    for (var i = 0; i < 5; i++) {
        container.innerHTML += ` <div class="p-3 Q" style="display:none"><h2  >${new_allqustions[i].qustion}</h2>
        <h4 ><input type="radio" class="answer1" name="answer" id="${new_allqustions[i].qustion}" value="${new_allqustions[i].answers[0]}"onclick="getusersAnswers(value,id)">${new_allqustions[i].answers[0]}</h4>
        <h4 ><input type="radio" class="answer2" name="answer" id="${new_allqustions[i].qustion}" value="${new_allqustions[i].answers[1]}"onclick="getusersAnswers(value,id)">${new_allqustions[i].answers[1]}</h4>
        <h4 ><input type="radio" class="answer3" name="answer" id="${new_allqustions[i].qustion}" value="${new_allqustions[i].answers[2]}"onclick="getusersAnswers(value,id)">${new_allqustions[i].answers[2]}</h4>
        <h4 ><input type="radio" class="answer4" name="answer" id="${new_allqustions[i].qustion}" value="${new_allqustions[i].answers[3]}"onclick="getusersAnswers(value,id)">${new_allqustions[i].answers[3]}</h4></div>`
    }

    qu[0].style.display = "block";
}
console.log(new_allqustions[0].qustion);
displayQuestion();
pageNum.innerHTML=`${1}`
var page = 0;
function btnNext() {
    page++;
    
    pageNum.innerHTML=`${page+1}`
    if (page == 4) {
        Next.setAttribute("style", "display: none");
        Previous.setAttribute("style", "display: block");
    }
    else {
        Next.setAttribute("style", "display: block");
        Previous.setAttribute("style", "display: block")
    }
    for (var i = 0; i < 5; i++) {
        qu[i].style.display = "none";
    }
    qu[page].style.display = "block";
}


// //  btnNext()
// // Next.addEventListener("click",console.log("hiii"));
function btnPrevious() {

    page--;
    pageNum.innerHTML=`${page+1}`
    if (page == 0||page<0) {
        Previous.setAttribute("style", "display: none")
        Next.setAttribute("style", "display: block")
    }
    else {
        Next.setAttribute("style", "display:block");
        Previous.setAttribute("style", "display: block")
    }
    for (var i = 0; i < 5; i++) {
        qu[i].style.display = "none";
    }
    qu[page].style.display = "block";
}

//  var sidarray = [];
function btnMark(e) {
    console.log(e.target.innerHTML);
    //      console.log(new_allqustions[page].qustion);
    //      console.log(e.target);

    //      sidebar.innerHTML += `<button class="mark${page}" style="background-color: rgb(80, 210, 143);">"${new_allqustions[page].qustion}"</button>`
    //      sidarray.push(new_allqustions[page].qustion)
    Mark.setAttribute("style", "display:none");
    Unmark.setAttribute("style", "display:block");

}
var answer1 = document.getElementsByClassName("answer1")[0]

var userAnswers=[];

function getusersAnswers(v, id) {

    if (new_allqustions[0].qustion == id) {
      var  solu1 = v;
      userAnswers[0]=solu1;
    }
    if (new_allqustions[1].qustion == id) {
       var solu2 = v;
       userAnswers[1]=solu2;

    }
    if (new_allqustions[2].qustion == id) {
       var solu3 = v;
       userAnswers[2]=solu3;

    }
    if (new_allqustions[3].qustion == id) {
       var solu4 = v;
       userAnswers[3]=solu4;

    }
    if (new_allqustions[4].qustion == id) {
       var solu5 = v;
       userAnswers[4]=solu5;

    }
    console.log(solu1);
    console.log(solu2);
    console.log(solu3);
    console.log(solu4);
    console.log(solu5);

    console.log(userAnswers);
    // console.log(g);
}


var grade = 0
function submit() {
    for (var i = 0; i < 5; i++) {

        if (userAnswers[0] == correctAnswers[i]) {
            grade += 10;
        }
        if (userAnswers[1] == correctAnswers[i]) {
            grade += 10;
        }
        if (userAnswers[2] == correctAnswers[i]) {
            grade += 10;
        }
        if (userAnswers[3] == correctAnswers[i]) {
            grade += 10;
        }
        if (userAnswers[4] == correctAnswers[i]) {
            grade += 10;
        }


    }

    console.log(grade);

    localStorage.setItem("grade",grade);

    location.replace("endpage.html")


}

//set time
var timerdiv = document.getElementById('timer');

// console.log(timerdiv);
var minute = 1;
var secound = 59;
// timerdiv.innerHTML=`${minute}:${secound}`
function timer() {
    var timerfun = setInterval(() => {
        secound--;
        if (secound < 0) {
            minute--;
            secound = 59;
            ///////////////////////////////////////////
        }
        timerdiv.innerHTML = ` ${minute} : ${secound} `
        if (minute === 0 && secound === 0) {
          submit()
        }
    }, 1000);
}
timer();

// var y = 0;
// function getAnswers(t,e) {

//     console.log(t);
// //     // console.log(e);
//     t.setAttribute("style","background-color: yellow")

//     userAnswers[y] = e.target.innerHTML
//     y++;
//     // if (answer1.innerHTML == e.target.innerHTML) {
//     // }


//     console.log(e.target.innerHTML);
//     // console.log(answer1.innerHTML);
// }

