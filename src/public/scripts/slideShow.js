var i =0;
    var photos = [];

   

    photos[0] =  "https://files.myglamm.com/site-images/original/Homepage-web-Website_1.jpg";
    photos[1] =  "https://files.myglamm.com/site-images/original/Banner-01.png";
    photos[2] = "https://files.myglamm.com/site-images/original/Homepage-desktop.jpg";
    photos[3] = "https://files.myglamm.com/site-images/original/Website-Homepage-banner_2.jpg";
    photos[4] = "https://files.myglamm.com/site-images/original/Adapts-Homepage-Banner-Desktop.jpg";
    photos[5] = "https://files.myglamm.com/site-images/original/Website-Homepage-banner_2.jpg";

    var show = document.getElementById("IMG");

    function slideshow(){
      
        
        show.src = photos[i];
        
        if(i<photos.length-1){
            i++;
            
        }
        else{
            i=0;
        }
        
    
        
    }
    setInterval("slideshow()", 3000);
