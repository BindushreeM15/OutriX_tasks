const iframe = document.getElementById('previewFrame');

let templateId = '1'; // default 
const path = window.location.pathname;
if (path.includes('customize2.html')) templateId = '2';
else if (path.includes('customize3.html')) templateId = '3';
else if (path.includes('customize4.html')) templateId = '4';
else if (path.includes('customize5.html')) templateId = '5';
else if(path.includes('customize6.html')) templateId = '6';

iframe.addEventListener('load', () => {
  updatePreview();
});

function updatePreview() {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  if (!doc || !doc.body) return; 

  const font = document.getElementById('fontSelect')?.value;
  if (font) doc.body.style.fontFamily = font;

  if (templateId === '1') {
    const heroTitle = document.getElementById('heroTitle')?.value;
    const heroSubtitle = document.getElementById('heroSubtitle')?.value;
    const ctaButton = document.getElementById('ctaButton')?.value;
    const bgColor = document.getElementById('bgColor')?.value;

    if (doc.querySelector('header')) doc.querySelector('header').style.background = bgColor;
    if (doc.querySelector('header h1')) doc.querySelector('header h1').textContent = heroTitle;
    if (doc.querySelector('header p')) doc.querySelector('header p').textContent = heroSubtitle;
    if (doc.querySelector('.btn-primary')) doc.querySelector('.btn-primary').textContent = ctaButton;
  }

  if (templateId === '2') {
    const name = document.getElementById('personName')?.value;
    const role = document.getElementById('role')?.value;
    const email = document.getElementById('email')?.value;
    const linkedin = document.getElementById('linkedin')?.value;

    if (doc.querySelector('header h1')) doc.querySelector('header h1').textContent = `Hello, I'm ${name} `;
    if (doc.querySelector('header p')) doc.querySelector('header p').textContent = role;

    const contactSection = doc.querySelector('.contact');
    if (contactSection) {
      const contactPs = contactSection.querySelectorAll('p');
      if (contactPs.length >= 2) {
        contactPs[0].textContent = `Email: ${email}`;
        contactPs[1].textContent = `LinkedIn: ${linkedin}`;
      }
    }
  }

  if (templateId === '3') {
  doc.getElementById('productTitle').textContent = document.getElementById('productTitle')?.value;
  doc.getElementById('productTagline').textContent = document.getElementById('productTagline')?.value;
  doc.getElementById('ctaBtn').textContent = document.getElementById('ctaBtn')?.value;

  doc.querySelectorAll('.section .text h2')[0].textContent = document.getElementById('feature1')?.value;
  doc.querySelectorAll('.section .text h2')[1].textContent = document.getElementById('feature2')?.value;
  doc.querySelectorAll('.section .text h2')[2].textContent = document.getElementById('feature3')?.value;
  doc.querySelectorAll('.section .text h2')[3].textContent = document.getElementById('feature4')?.value;

  doc.getElementById('offer1').textContent = document.getElementById('offer1')?.value;
  doc.getElementById('offer2').textContent = document.getElementById('offer2')?.value;
  doc.getElementById('offer3').textContent = document.getElementById('offer3')?.value;
  doc.getElementById('offer4').textContent = document.getElementById('offer4')?.value;
}


  if (templateId === '4') {
  doc.getElementById('blogTitle').textContent = document.getElementById('blogTitle')?.value;
  doc.getElementById('blogSubtitle').textContent = document.getElementById('blogSubtitle')?.value;

  doc.getElementById('post1Title').textContent = document.getElementById('post1Title')?.value;
  doc.getElementById('post1Content').textContent = document.getElementById('post1Content')?.value;
  doc.getElementById('post1Image').src = document.getElementById('post1Image')?.value;

  doc.getElementById('post2Title').textContent = document.getElementById('post2Title')?.value;
  doc.getElementById('post2Content').textContent = document.getElementById('post2Content')?.value;
  doc.getElementById('post2Image').src = document.getElementById('post2Image')?.value;

  doc.getElementById('post3Title').textContent = document.getElementById('post3Title')?.value;
  doc.getElementById('post3Content').textContent = document.getElementById('post3Content')?.value;
  doc.getElementById('post3Image').src = document.getElementById('post3Image')?.value;
}

  if (templateId === '5') {
  doc.getElementById('agencyName').textContent = document.getElementById('agencyName')?.value;
  doc.getElementById('agencyTagline').textContent = document.getElementById('agencyTagline')?.value;
  doc.getElementById('service1').textContent = document.getElementById('service1')?.value;
  doc.getElementById('service2').textContent = document.getElementById('service2')?.value;
  doc.getElementById('service3').textContent = document.getElementById('service3')?.value;
  doc.getElementById('team1').textContent = document.getElementById('team1')?.value;
  doc.getElementById('team2').textContent = document.getElementById('team2')?.value;
  doc.getElementById('contactInfo').textContent = document.getElementById('contactInfo')?.value;

  doc.getElementById('logo1').src = document.getElementById('logo1')?.value;
doc.getElementById('logo2').src = document.getElementById('logo2')?.value;
doc.getElementById('logo3').src = document.getElementById('logo3')?.value;

doc.getElementById('testimonial1').textContent = document.getElementById('testimonial1')?.value;
doc.getElementById('testimonial2').textContent = document.getElementById('testimonial2')?.value;

}

if (templateId === '6') {
  doc.getElementById('eventTitle').textContent = document.getElementById('eventTitle')?.value;
  doc.getElementById('eventDate').textContent = document.getElementById('eventDate')?.value;
  doc.getElementById('speaker1').textContent = document.getElementById('speaker1')?.value;
  doc.getElementById('speaker2').textContent = document.getElementById('speaker2')?.value;
  doc.getElementById('agenda1').textContent = document.getElementById('agenda1')?.value;
  doc.getElementById('agenda2').textContent = document.getElementById('agenda2')?.value;
  doc.getElementById('venue').textContent = document.getElementById('venue')?.value;
  doc.getElementById('ctaBtn').textContent = document.getElementById('ctaBtn')?.value;
}


}

function downloadHTML() {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const html = '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;

  const blob = new Blob([html], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'landingpage.html';
  link.click();
}
