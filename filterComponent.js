function myBrandFunction() {
    document.getElementById("myBrandDropdown").classList.toggle("show");
  }
  
  function filterBrandFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInputBrand");
    filter = input.value.toUpperCase();
    div = document.getElementById("myBrandDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

// for color


function myColorFunction() {
    document.getElementById("myDropdownColor").classList.toggle("show");
  }
  
  function filterColorFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInputColor");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownColor");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }