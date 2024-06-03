const aboutDiv = document.getElementById('about');
const containerDiv = document.querySelector('.container2');
// Add an event listener to the "About" div
aboutDiv.addEventListener('click', () => {

  const aboutArea = document.getElementById('about');
  aboutArea.style.backgroundColor = 'red';
    
  const aboutContent = 
  `<h2>About Me</h2>
    <p>This is some information about me.</p>
    <p>Hello! I am Yash Chaturvedi, a Frontend Developer. I am passionate about creating interactive and dynamic user interfaces using modern web technologies. I have experience in HTML, CSS, JavaScript, and various frontend frameworks. Let's connect and create something amazing together!</p>
    <div class="detail">
    <div class="details-contact"><i class="fa-solid fa-mobile-screen"></i></i>  Phone 8077737879 </div>
    <div class="details-contact"><i class="fa-solid fa-envelope"></i></i> Email brahmanyash02@gmail.com</div>
    <div class="details-contact"><i class="fa-solid fa-map-location-dot"></i></i> Location Iglas Aligarh</div>
    <div class="details-contact"><i class="fa-solid fa-calendar-days"></i> Birthday 02/12/2006</div>
</div>`;

    containerDiv.innerHTML = aboutContent;
    
  
    const h2Element=containerDiv.querySelector(`h2`);
   h2Element.style.fontSize = '24px';
  h2Element.style.fontWeight = 'bold';
  h2Element.style.marginBottom = '10px';
  
  
  const paragraphs = containerDiv.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.fontSize = '16px';
    p.style.lineHeight = '1.5';
    p.style.color = '#555';
    p.style.marginBottom = '15px';
    p.style.color=`#2D3035`;
  });

  const detailsElement = containerDiv.querySelector('.detail');
  detailsElement.style.marginTop = '20px';
  detailsElement.style.borderRadius = '5%';
  detailsElement.style.padding = '10px';
  detailsElement.style.color = '#2D3035';
  detailsElement.style.width = '100%';

  const detailContactElements = containerDiv.querySelectorAll('.details-contact');
  detailContactElements.forEach(detailsContact => {
    detailsContact.style.marginBottom = '10px';
    detailsContact.style.borderBottom = '0.5px solid #FBFCFC';
    detailsContact.style.borderRadius = '5%';
    detailsContact.style.padding = '5px';
  });
   
  displayAboutContent();

aboutDiv.addEventListener('click', displayAboutContent);
});
