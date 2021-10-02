
    let divD = document.createElement("div");
    divD.setAttribute("id","divElement");
    let a = document.getElementById("container");
 
    let makeUp = document.getElementById("makeup__link");
    let hairCare = document.getElementById("hair__care");
    let skinCare = document.getElementById("skin__care");
    let sanitize = document.getElementById("sanitizing__care");
    let tC = document.getElementById("terms__conditions");


    hairCare.addEventListener("mouseover",function(){
            divD.classList.add("active");
            a.append(divD); 
            
    });

   
    skinCare.addEventListener("mouseover",function(){
            divD.classList.add("active");
            a.append(divD); 
            
    });
    
    sanitize.addEventListener("mouseover",function(){
            divD.classList.add("active");
            a.append(divD); 
            
    });
    
    tC.addEventListener("mouseover",function(){
            divD.classList.add("active");
            a.append(divD); 
            
    });
    
    
    makeUp.addEventListener("mouseover",function(){
            divD.classList.add("active");
            a.append(divD); 
            
    });
    divD.addEventListener("mouseleave",function(){
           divD.classList.remove("active");
            
    });