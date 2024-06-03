const container = document.querySelector('.container2');
const resumes = document.getElementById('resume');



const headingStyles = `
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const paragraphStyles = `
  line-height: 1.5;
  margin-bottom: 10px;
`;


resumes.addEventListener('click', () => {
  resumes.style.backgroundColor = 'red';
  const resumecontent = `
    <div>
      <p style="${headingStyles}">YASH CHATURVEDI</p>
      <p style="${paragraphStyles}">Web Developer</p>
      <p style="${paragraphStyles}">IGLAS ALIGARH UTTARPRADESH| +91 8077737879 | brahmanyash02@gmail.com</p>
      <p style="${headingStyles}">CAREER SUMMARY:</p>
      <p style="${paragraphStyles}">Solution-oriented and problem solver with 5 years of experience building and maintaining software and software architecture. Highly skilled in communication, collaboration, and technical documentation.</p>
      <p>&nbsp;</p>
      <p style="${paragraphStyles}">Front-end and back-end web development Code structure and architecture Web performance optimization Programming languages</p>
      <p style="${headingStyles}">EDUCATION:</p>
      <div>
        <p style="${paragraphStyles}">BACHELOR OF COMPUTER APPLICATION</p>
        <p style="${paragraphStyles}">2023 - 2025| ALIGARH COLLEGE OF ENGINEERING</p>
      </div>
      <p style="${headingStyles}">SKILLS:</p>
      <div>
        <p style="${paragraphStyles}">Front-end and back-end web development Code structure and architecture Web performance optimization Programming languages</p>
      </div>
    </div>
  `;
  container.innerHTML = resumecontent;
});