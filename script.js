// SMOOTH SCROLLING ANIMATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const projBtn = [
  document.querySelector('.back-btn'),
  document.querySelector('.proj1'),
  document.querySelector('.proj2'),
  document.querySelector('.proj3'),
  document.querySelector('.proj4'),
  document.querySelector('.proj5'),
  document.querySelector('.proj6')
];

projBtn[0].onclick = function() {
  document.querySelector('.container').style.display = 'block';
  document.querySelector('#my-projects').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.projects-container').style.display = 'none';
}

projBtn[1].onclick = function() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.projects-container').style.display = 'block';
  toTop();

  document.querySelector('.proj-image').src = 'images/projects/cards/proj1-card.svg';
  document.querySelector('#project-name').innerHTML = 'Cyberbullying Awareness Website';
  document.querySelector('#project-paragraph').innerHTML = `
  A static website. This website delves into the 'Five W's' of cyberbullying, exposes different forms of online harassment, explores the detrimental effects it has on individuals, shares strategies to prevent cyberbullying, and sheds light on the legal measures in place to combat this issue. Created as a project during our 11th-grade year, this platform aims to raise awareness and foster a safer digital environment for all.
  `;
  document.querySelector('#project-technologies').innerHTML = `
  • HTML <br>
  • CSS <br>
  • JavaScript
  `;
}
projBtn[2].onclick = function() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.projects-container').style.display = 'block';
  toTop();
  
  document.querySelector('.proj-image').src = 'images/projects/cards/proj2-card.svg';
  document.querySelector('#project-name').innerHTML = 'Mahiwag Travel & Tours';
  document.querySelector('#project-paragraph').innerHTML = `
  This static frontend project was created during my first year of college, allowing me to showcase my passion for travel and my developing web development skills. While it lacks backend functionality, this website demonstrates my ability to design an attractive and user-friendly interface for adventurous travelers. Through this project, I gained valuable experience collaborating with others and deepened my understanding of web development concepts.
  `;
  document.querySelector('#project-technologies').innerHTML = `
  • HTML <br>
  • CSS <br>
  • JavaScript
  `;
}
projBtn[3].onclick = function() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.projects-container').style.display = 'block';
  toTop();
  
  document.querySelector('.proj-image').src = 'images/projects/cards/proj3-card.svg';
  document.querySelector('#project-name').innerHTML = 'Kumain ka na ba?';
  document.querySelector('#project-paragraph').innerHTML = `
  A simple project focused on creating a receipt generation system. With this program, each order placed triggers an automatic generation of a detailed receipt. Designed to explore and showcase the capabilities of Java Swing, this application offers a straightforward and user-friendly interface.
  `;
  document.querySelector('#project-technologies').innerHTML = `
  • Java
  `;
}
projBtn[4].onclick = function() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.projects-container').style.display = 'block';
  toTop();
  
  document.querySelector('.proj-image').src = 'images/projects/cards/proj4-card.svg';
  document.querySelector('#project-name').innerHTML = 'Lola Nena Point of Sales System';
  document.querySelector('#project-paragraph').innerHTML = `
  A Java Swing Application and collaborative group project during our first year. We developed a robust point of sales system with sales processing capabilities and a daily sales display. This application streamlines transactions, generates detailed receipts, and provides valuable insights into daily sales performance. Through this project, we honed our technical teamwork and collaboration skills while gaining extensive knowledge in Java programming
  `;
  document.querySelector('#project-technologies').innerHTML = `
  • Java <br>
  • HTML <br>
  • CSS <br>
  • MySql <br>
  `;
}
projBtn[5].onclick = function() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.projects-container').style.display = 'block';
  toTop();
  
  document.querySelector('.proj-image').src = 'images/projects/cards/proj5-card.svg';
  document.querySelector('#project-name').innerHTML = 'Simple Turn-Based Game';
  document.querySelector('#project-paragraph').innerHTML = `
  A simple turn-based game written in HTML, CSS, and JavaScript. You play as Benjamin and you fight a giant rat controlled by the computer. The enemy always chooses their best move from their skillset. I created this project to explore objects and DOM manipulation.
  `;
  document.querySelector('#project-technologies').innerHTML = `
  • HTML <br>
  • CSS <br>
  • JavaScript
  `;
}
projBtn[6].onclick = function() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.projects-container').style.display = 'block';
  toTop();
  
  document.querySelector('.proj-image').src = 'images/projects/cards/proj6-card.svg';
  document.querySelector('#project-name').innerHTML = 'Interactive Fiction : Commute';
  document.querySelector('#project-paragraph').innerHTML = `
  A very short interactive fiction. Embark on an exciting interactive fiction adventure where you assume the role of a student heading to school. I developed this project with the aim of refreshing my knowledge of HTML, CSS, and JavaScript.
  `;
  document.querySelector('#project-technologies').innerHTML = `
  • HTML <br>
  • CSS <br>
  • JavaScript
  `;
}


function toTop() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  document.querySelector('#project-name').scrollIntoView({ behavior: 'smooth'})
}










