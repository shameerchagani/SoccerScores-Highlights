$(function(){
    fetch("https://www.scorebat.com/video-api/v1/"
  ).then(res => res.json())
  .then(element => { 
   let ul = document.querySelector('ul');   
   for(let i = 0; i < element.length; i++){
     let len = (element[i].videos.length)
     for(let j=0; j<len; j++){
     //console.log(element[i].videos)
      let span = document.createElement('span')
        span = element[i].date + ". ." + element[i].title 
      let title = element[i].videos[j].title
      let li = document.createElement('li')
        li.append(span + "   " + title)
      let someid = document.getElementById('someId');
        ul.append(li);
        
      li.addEventListener('click',function(e){
        document.documentElement.scrollTop = 0;  
        let div1 =  element[i].videos[j].embed
        let someid = document.getElementById('someId')
        someid.innerHTML = div1;
      })
       //console.log(title);
     }
       }
  })
  .catch(err => {
      console.error(err);
  }); 
  })
  
  
  