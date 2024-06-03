

let cv= document.querySelector(".cv")
   cv.onclick=function(){
    let link =document.createElement(`a`);
    link.href=`YASH CHATURVEDI.pdf`;
    link.download =`cv.pdf`;
    console.log("downolad cv");
    link.click();
   }

   // Social Media Icons Click Event
   const socialMediaIcons = {
       insta: "https://www.instagram.com/",
       git: "https://github.com/",
       twitter: "https://twitter.com/",
       linkedin: "https://www.linkedin.com/"
   };

   document.querySelectorAll('.social-media .apps')
   .forEach(item => {
       item.addEventListener('click', event => {
           const id = event.currentTarget.id;
           if(socialMediaIcons[id]) {
               window.open(socialMediaIcons[id], '_blank');
           }
         });
      });


const profileImg = document.getElementsByClassName('img1')[0];

profileImg.addEventListener('click', () => {
  const backgroundImageUrl = window.getComputedStyle(profileImg).backgroundImage.slice(4, -1).replace(/"/g, '');

  if (backgroundImageUrl) {
    window.open(backgroundImageUrl, '_blank');
  }
});


const mapLink = document.getElementById('mapLink');

mapLink.addEventListener('click', function(event) {
  event.preventDefault();
  const latitude = 71349188421264;
  const longitude = 77.9363169192149;
  const location = `geo:${latitude},${longitude}`;
  window.open(location, '_blank');
});



































// document.addEventListener('DOMContentLoaded', (event) => {

//    // Social Media Icons Click Event
//    const socialMediaIcons = {
//        insta: "https://www.instagram.com/",
//        git: "https://github.com/",
//        twitter: "https://twitter.com/",
//        linkedin: "https://www.linkedin.com/"
//    };

//    document.querySelectorAll('.social-media .apps')
//    .forEach(item => {
//        item.addEventListener('click', event => {
//            const id = event.currentTarget.id;
//            if(socialMediaIcons[id]) {
//                window.open(socialMediaIcons[id], '_blank');
//            }
//        });
//    });

// // CV Download Button Click Event
//    const cvButton = document.getElementById('cv');
//    cvButton.addEventListener('click', () => {
//        window.location.href = 'path/to/your/cv.pdf'; // Update the path to your CV file
//    });

//    // Navigation Buttons Click Event
//    const sections = {
//        about: "about.html", // Update with actual page/section ID
//        resume: "resume.html", // Update with actual page/section ID
//        work: "work.html", // Update with actual page/section ID
//        contact: "contact.html" // Update with actual page/section ID
//    };

//    document.querySelectorAll('.select-area .area').forEach(item => {
//        item.addEventListener('click', event => {
//            const id = event.currentTarget.id;
//            if(sections[id]) {
//                window.location.href = sections[id]; // Navigate to the respective section/page
//            }111
//        });
//    });

//    // Portfolio Links Click Event
//    document.querySelectorAll('.portfolio .row-div a').forEach(item => {
//        item.addEventListener('click', event => {
//            event.preventDefault();
//            const href = event.currentTarget.getAttribute('href');
//            if(href) {
//                window.open(href, '_blank');
//            }
//        });
//    });

// });
