let hw = document.getElementsByClassName("man")
for (let i = 0; i < hw.length; i++){
    hw[i].style.color = "red"
    hw[i].style.backgroundColor = "purple"
    hw[i].style.margin ="10px"
}

function let(){
    window.alert("The form is good")
}

const man = {name:"Dwayne",age:"29", color:"pink", height:"650m",
answer:function(){console.log( 'Hello', this.name + "" + this.age + "years old");
}
};
man.answer()