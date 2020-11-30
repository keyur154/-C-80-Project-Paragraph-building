function getpara_1() {
    var inputs=[];
    for (var j=1; j<=6; j++)
    {
     inputs.push(document.getElementById("para1_sentence_"+j).value);
    }

    document.getElementById("showpara1").innerHTML=inputs.join(". ");
}

function getpara_2() {
    var inputs=[];
    for (var i=1; i<=6; i++)
    {
     inputs.push(document.getElementById("para2_sentence_"+i).value);
    }

    document.getElementById("showpara2").innerHTML=inputs.join(". ");
}