function previewTemplate(url) {
  window.open(url, "_blank");
}

function customizeTemplate(templateId) {
  if (templateId === 1) {
    window.location.href = `customize/customize1.html`;
  } 
  else if (templateId === 2) {
    window.location.href = `customize/customize2.html`;
  }
  else if (templateId === 3) {
    window.location.href = `customize/customize3.html`;
  }
  else if (templateId === 4) {
    window.location.href = `customize/customize4.html`;
  }
   else if (templateId === 5) {
    window.location.href = `customize/customize5.html`;
  }
  else if (templateId === 6) {
    window.location.href = `customize/customize6.html`;
  }
  else {
    alert(`Customization for Template ${templateId} coming soon!`);
  }
}


