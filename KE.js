var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const random = abc[Math.floor(Math.random() * 27)];
console.log(random);
document.body.addEventListener('keydown', function(event){
    console.log(event.key);
    var key = document.createElement("p");
    
    key.innerHTML = "Secret key is pressed";
    
    document.body.appendChild(key);
})
