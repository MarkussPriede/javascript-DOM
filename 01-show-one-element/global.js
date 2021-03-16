document.addEventListener('DOMContentLoaded', function(){
  const moreLink = document.getElementById('more_text_link');
  const moreText = document.getElementById('more_text_content');

  moreLink.addEventListener('click', function(){
    moreText.style.display = 'initial';
    moreLink.style.display = 'none';
  });
});