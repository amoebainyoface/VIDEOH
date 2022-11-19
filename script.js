

// NYU
let nyuClicked = document.getElementById('nyu');
let nyuVideo = document.getElementById('nyu-video');

nyuClicked.addEventListener("click", ()=>{
    document.querySelector('.popup-video-nyu').style.display = 'block';
    // nyuVideo.style.display = 'block';

})


document.querySelector('.popup-video-nyu span').onclick = () =>{
        document.querySelector('.popup-video-nyu').style.display = 'none';
        let iframe = document.querySelector('.popup-video-nyu iframe');

        if ( iframe ) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }

        
    }



// // FERRARI
// let ferrariClicked = document.getElementById('ferrari');
// // let ferrariVideo = document.getElementById('ferrari-video');

// ferrariClicked.addEventListener("click", ()=>{
//     document.querySelector('.popup-video-ferrari').style.display = 'block';
//     // dessertVideo.style.display = 'block';
// })

// document.querySelector('.popup-video-ferrari span').onclick = () =>{
//     document.querySelector('.popup-video-ferrari').style.display = 'none';
//     let iframe = document.querySelector('.popup-video-ferrari iframe');

//     if ( iframe ) {
//         let iframeSrc = iframe.src;
//         iframe.src = iframeSrc;
//     }
// }



// DESERT
let desertClicked = document.getElementById('desert');
let desertVideo = document.getElementById('desert-video');

desertClicked.addEventListener("click", ()=>{
    document.querySelector('.popup-video-desert').style.display = 'block';


})


document.querySelector('.popup-video-desert span').onclick = () =>{
        document.querySelector('.popup-video-desert').style.display = 'none';
        let iframe = document.querySelector('.popup-video-desert iframe');

        if ( iframe ) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }

        
    }




// BARBER
let barberClicked = document.getElementById('mosque');
let barberVideo = document.getElementById('barber-video');

barberClicked.addEventListener("click", ()=>{
    document.querySelector('.popup-video-barber').style.display = 'block';
    
})

document.querySelector('.popup-video-barber span').onclick = () =>{
    document.querySelector('.popup-video-barber').style.display = 'none';
    let iframe = document.querySelector('.popup-video-barber iframe');

    if ( iframe ) {
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
}


