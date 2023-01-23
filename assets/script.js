

    var button = document.getElementById("click");
    var target = document.getElementById("wrapper");
    var button2 = document.getElementById("tutup");    
    
    button.addEventListener("click", alert("success"));

    button.addEventListener("click", function (){
        alert ("success")
        target.style.height = "250px";
        button.innerHTML = "tutup";
        if (target.style.height === "250px") {
            button.id = "tutup"
        }
    });
    

    button.addEventListener("click", function(){
        target.style.height = "50px";
        button2.innerHTML = "read";
        if (target.style.height === "50px") {
            button2.id = "read"
        }
    });
    
