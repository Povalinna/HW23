function getImage() {
    const random = Math.floor(Math.random() * 9)+1 ;  
    console.log(random);
    return '<img src="/img/' + random + '.jpg">';
   
}
 

document.getElementById("ft").innerHTML = getImage();
