function menu(){
    let menus=document.getElementById("mobilemenu");
    let show=document.getElementById("ulm");
    let image= menus.src="icon-close.svg";


    if(document.getElementById("hide").className=="ul"){
        document.getElementById("hide").classList.add("ul1");
        document.getElementById("hide").classList.remove("ul");     
        menus.src="icon-close.svg";
       // document.getElementById("upnext").style="z-index:-1";
    }
    else{
        document.getElementById("hide").classList.remove("ul1");
        document.getElementById("hide").classList.add("ul"); 
       // document.getElementById("ulm").classList.add("ulm1");     
        menus.src="icon-hamburger.svg";
       // document.getElementById("upnext").style="z-index:1";
    }
}
