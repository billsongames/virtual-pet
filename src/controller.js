(function exportController() {
  function Controller(pet) {
    this.pet = pet

  }



  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})