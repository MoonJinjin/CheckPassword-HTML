let score = 0;

function  Total() {
    q1();
    q2();
    q3();
    q4();
    q5();
    q6();
    q7();

    localStorage.setItem('Total_score', score);

}
function q1(){
    var q1_length = document.getElementsByName("q1").length;
    var q1_score = 0;

    for (var i=0; i<q1_length; i++) {
        if (document.getElementsByName("q1")[i].checked == true) {
            if(document.getElementsByName("q1")[i].value == "month"){
                q1_score = parseInt(6)
            }
            else if(document.getElementsByName("q1")[i].value == "homepage"){
                q1_score = parseInt(10)
            }
            else{
                q1_score = parseInt(2)
            }
        }
    }
   score = parseInt(score) + parseInt(q1_score);
}
function q2(){
    var q2_length = document.getElementsByName("q2").length;
    var q2_score = 0;

    for (var i=0; i<q2_length; i++) {
        if (document.getElementsByName("q2")[i].checked == true) {
            if(document.getElementsByName("q2")[i].value == "no"){
                q2_score = parseInt(2)
            }
            else{
                q2_score = parseInt(10)
            }
        }
    }
   score = parseInt(score) + parseInt(q2_score);
}
function q3(){
    var q3_length = document.getElementsByName("q3").length;
    var q3_score = 0;

    for (var i=0; i<q3_length; i++) {
        if (document.getElementsByName("q3")[i].checked == true) {
            if(document.getElementsByName("q3")[i].value == "small"){
                q3_score = parseInt(2)
            }
            else if(document.getElementsByName("q3")[i].value == "big"){
                q3_score = parseInt(6)
            }
            else{
                q3_score = parseInt(10)
            }
        }
    }
   score = parseInt(score) + parseInt(q3_score);
}
function q4(){
    var q4_length = document.getElementsByName("q4").length;
    var q4_score = 0;

    for (var i=0; i<q4_length; i++) {
        if (document.getElementsByName("q4")[i].checked == true) {
            if(document.getElementsByName("q4")[i].value == "no"){
                q4_score = parseInt(10)
            }
            else{
                q4_score = parseInt(2)
            }
        }
    }
   score = parseInt(score) + parseInt(q4_score);
}
function q5(){
    var q5_length = document.getElementsByName("q5").length;
    var q5_score = 0;

    for (var i=0; i<q5_length; i++) {
        if (document.getElementsByName("q5")[i].checked == true) {
            if(document.getElementsByName("q5")[i].value == "one"){
                q5_score = parseInt(6)
            }
            else if(document.getElementsByName("q5")[i].value == "three"){
                q5_score = parseInt(2)
            }
            else{
                q5_score = parseInt(10)
            }
        }
    }
   score = parseInt(score) + parseInt(q5_score);
}
function q6(){
    var q6_length = document.getElementsByName("q6").length;
    var q6_score = 0;

    for (var i=0; i<q6_length; i++) {
        if (document.getElementsByName("q6")[i].checked == true) {
            if(document.getElementsByName("q6")[i].value == "short"){
                q6_score = parseInt(2)
            }
            else if(document.getElementsByName("q6")[i].value == "middle"){
                q6_score = parseInt(6)
            }
            else{
                q6_score = parseInt(10)
            }
        }
    }
   score = parseInt(score) + parseInt(q6_score);
}
function q7(){
    var q7_length = document.getElementsByName("q7").length;
    var q7_score = 0;

    for (var i=0; i<q7_length; i++) {
        if (document.getElementsByName("q7")[i].checked == true) {
            if(document.getElementsByName("q7")[i].value == "no"){
                q7_score = parseInt(10)
            }
            else{
                q7_score = parseInt(2)
            }
        }
    }
   score = parseInt(score) + parseInt(q7_score);
}
function show(){
    document.write(localStorage.getItem('Total_score'));
}
