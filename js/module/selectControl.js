const selectControl = ({ classActive, selectorBtn, selectorSelect, breakpoint }) => {

  const btns = document.querySelectorAll(selectorBtn);
  const selects = document.querySelectorAll(selectorSelect);

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth <= breakpoint) {
       const parrentSelect = btn.closest(selectorSelect);
       parrentSelect.classList.toggle(classActive);

       selects.forEach(select => {
         if(select !== parrentSelect) {
           select.classList.remove(classActive);
         }
       });
      }
    });
  });

};

export default selectControl;
