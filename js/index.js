const input = document.querySelector("#typeText")
const output = document.querySelector("#inColors")


input.addEventListener("input", function(e){  

  const text = input.value
  const arr  = text.split("")
  
  letter = arr[arr.length-1] //use this instead of foreaching the input as it sends the whole text in the box //to be spanned
  output.appendChild(addSpan(letter))
})


function addSpan(letter){   
    const span = document.createElement("span")    
    span.innerText   = letter
    span.style.color = randColor()
    return span
}

const randColor = () =>  ("#"+((1<<24)*Math.random()|0).toString(16))






/*
const input = document.querySelector("#typeText")
const output = document.querySelector("#inColors")
const alpha = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.split("")


input.addEventListener("keydown", function(e){  

  const key = e.key; 
  if (alpha.includes(key)){
    output.appendChild(addSpan(key))
  }
})

function addSpan(letter){   
    const span = document.createElement("span")    
    span.innerText   = letter
    span.style.color = randColor()
    return span
}

const randColor = () =>  ("#"+((1<<24)*Math.random()|0).toString(16))
*/