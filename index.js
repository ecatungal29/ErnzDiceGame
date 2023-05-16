
// const img = document.querySelector("h1");
// //toggle 
// let toggle = true;
// img.addEventListener('click', function(){
//     const img1 = document.getElementById('kodak1');
//     const img2 = document.getElementById('kodak2');
 
//     toggle = !toggle;
//     if(toggle){
//         img1.src = "images\\dice2.png";
//         img2.src = "images\\dice5.png";
//     }
//     else{
//         img1.src = "images\\dice3.png";
//         img2.src = "images\\dice4.png";
//     }
    
// })
// function refresh(){
//     var images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
//     var randomImage = images[Math.floor(Math.random() * images.length)];
//    // console.log(randomImage);
//     // make the URL into a proper image tag
//     var image = "<img src='" + randomImage + "'>";
//     // append to the div
//     document.getElementsByClassName("img1").innerHTML = image;
//     document.querySelector("source")
//     //document.getElementById("img-load").innerHTML = image;
// }

// function refresh(){
//     const img = document.getElementById('kodak');
//     img.src = "images\\dice2.png";
// }








const img = document.querySelector("h1");
//toggle 
let toggle = true;
img.addEventListener('click', function(){
    const img1 = document.getElementById('kodak1');
    const img2 = document.getElementById('kodak2');
    var images = ['images\\dice1.png', 'images\\dice2.png', 'images\\dice3.png', 'images\\dice4.png', 'images\\dice5.png', 'images\\dice6.png'];
    let x = Math.floor(Math.random() * 6 );
    let y = Math.floor(Math.random() * 6 );
    // var randomImage1 = images[Math.floor(Math.random() * images.length)];
    var randomImage1 = images[x];
    var randomImage2 = images[y];
    // console.log(randomImage);
    toggle = !toggle;
    if(toggle){
        if(x>y){
        img1.src = randomImage1;
        img2.src = randomImage2;
        document.getElementById('aguy').innerHTML = "🥳Player 1 Wins!"
        }
        else if(x==y){
            
                img1.src = randomImage1;
                img2.src = randomImage2;
                document.getElementById('aguy').innerHTML = "Draw!"

        }
        else{
            img1.src = randomImage1;
        img2.src = randomImage2;
        document.getElementById('aguy').innerHTML = "Player 2 Wins!🥳"
        }
        

    }
    else{
        if(x>y){
            img1.src = randomImage1;
            img2.src = randomImage2;
            document.getElementById('aguy').innerHTML = "🥳Player 1 Wins!"
            }
            else if(x==y){
            
                img1.src = randomImage1;
                img2.src = randomImage2;
                document.getElementById('aguy').innerHTML = "Draw!"

        }       
            else{
                img1.src = randomImage1;
            img2.src = randomImage2;
            document.getElementById('aguy').innerHTML = "Player 2 Wins!🥳"
            }
    }
    
})






// var randomImage = images[Math.floor(Math.random() * images.length)];
// console.log(randomImage);
// // make the URL into a proper image tag
// var image = "<img src='" + randomImage + "'>";
// // append to the div
// document.getElementById("img-load").innerHTML = image;