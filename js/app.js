"use strict";
var allStudent=[];
var div=document.getElementById('forTable');
var table=document.createElement('table');
function Student(name,show,index){
    this.name=name;
    this.mark=[genrateRandomMark(0,100),genrateRandomMark(0,100),genrateRandomMark(0,100),genrateRandomMark(0,100),genrateRandomMark(0,100)];
    this.Show=show;
    this.index=Number(index);
    allStudent.push(this);
}
function render(){

    for(var i=0;i<allStudent.length;i++){
        var row=document.createElement('tr');
        var sName=document.createElement('td');
        sName.textContent=allStudent.name;
        row.appendChild(sName);
    
        var sGrade=document.createElement('td');
        sGrade.textContent= allStudent.Show;
        row.appendChild(sGrade);
        var index=allStudent.index;
        var sCourse=document.createElement('td');
        sCourse.textContent=allStudent.mark[index];
        row.appendChild(sCourse);
    }
    table.appendChild(row);
    
}
div.appendChild(table);
function header(){
    var row=document.createElement('tr');
    var sName=document.createElement('th');
    sName.textContent='Student Name';
    row.appendChild(sName);

    var sGrade=document.createElement('th');
    sGrade.textContent='Student Grade';
    row.appendChild(sGrade);

    var sCourse=document.createElement('th');
    sCourse.textContent='Course';
    row.appendChild(sCourse);
    table.appendChild(row);
}



function genrateRandomMark(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var courses=document.getElementById('Courses');
var options1=courses.options;
var form=document.getElementById('form');
form.addEventListener('submit',getValues);
function getValues(event){
    event.preventDefault();
    var theName=event.target.Sname.value;
   // var course=event.target.Courses.options[0].value;
   var index=event.target.Courses.selectedIndex;
    var mark=options1[index].value;
    var newS = new Student(theName,mark,index);
    console.log(newS);
    setStorage();
    render();
}

header();

function setStorage(){
    if(typeof(Storage)!=='undefined'){   
     localStorage.setItem('names',JSON.stringify(allStudent));
    }
}
function getStorage(){
    var existing;
    existing=JSON.parse(localStorage.getItem('names'));
    if(existing!=null){
        convert(existing);
    }
}
function convert(existing){
    allStudent=[];
    for(var i;i<existing.length;i++){
        var new1=new Student(existing[i].name,existing[i].Show,Number(existing[i].index));
        new1.mark=existing[i].mark;
    }
}

getStorage();