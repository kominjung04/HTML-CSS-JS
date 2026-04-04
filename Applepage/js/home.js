window.onload = () => {
  let btn  = document.querySelector('.btn')
  let buy = document.querySelectorAll('.buy')
  btn.onmouseover = () => {
    btn.style.backgroundColor = "#0071e3"
    btn.style.color = "white"
    btn.style.cursor = "pointer"
  }
  btn.onmouseout = () => {
    btn.style.backgroundColor = "transparent" //색상없음
    btn.style.color = "#0071e3"
    btn.style.cursor = "pointer"
  }

  buy.onmouseover = () => {
    buy.style.backgroundColor = "#0071e3" 
    buy.style.color = "white"
    buy.style.cursor = "pointer"
  }

  buy.onmouseout = () => {
    buy.style.backgroundColor = "transparent" //색상없음
    buy.style.color = "#0071e3"
    buy.style.cursor = "pointer"

    }
  }
