let ar = document.getElementById("ar")
let result = document.getElementById("result")
let limit = 800;
result.textContent = 0 + "/" + limit;

ar.addEventListener("input", function() {
  let textLength = ar.value.length;
  result.textContent = textLength + "/" + limit;

  if(textLength > limit) {
    result.style.color = "#ff2851";
  }
  else{
    result.style.color = "#fab387";
  }
})
