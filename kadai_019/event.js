const btn=document.getElementById('btn');

const text=document.getElementById('text');

btn.addEventListener('click',()=>{
  setTimeout(()=>{
    text.innerHTML = '<h2>ボタンをクリックしました</h2>';
  },2000)
})
