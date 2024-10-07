let accordion = function(arrIDs) {
  /*
  #id
    ul
      li.active
        h3
        div
  */
  let active = function() {
    // console.log(this);
    let parentLi = this.closest('li');
   
    if (!parentLi) return;
    parentLi.classList.toggle('active');
    
  }

  if (!arrIDs || arrIDs.length == 0) return;
  arrIDs.forEach(function(id) {
   let h3s = document.querySelectorAll(`#${id} ul li h3`);

   if (h3s && h3s.length > 0) {
    h3s.forEach(function(h3) {
      h3.addEventListener('click', active);
    });
   }
  });

};