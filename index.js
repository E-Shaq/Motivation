
  /*AIzaSyCkOLjcymkZ7AIWylRNrR1f3ImPqTCsH4w*/
window.onload=function(){

document.getElementById('btn').addEventListener('click',setTime);
var counter=0;
function btnFunction(){
  counter+=1;
  if(counter>1)
      document.getElementById("btn").style.visibility = "hidden"
}

function setTime (){
  
let Time = setInterval(getData, randomNumber(10000, 100000))
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

}

function getData(){

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpmZQGTZXn9xd4nN59pbIWQ&maxResults=100&key=AIzaSyCkOLjcymkZ7AIWylRNrR1f3ImPqTCsH4w")
.then((result)=>{
    return result.json()
    console.log(result)
})

.then((data)=>{
    console.log(data)
    let videos = data.items
    const random = Math.floor(Math.random() * videos.length);
     console.log(random, videos[random]);
     other = videos[random].id
     console.log(other)
     utubeid =other["videoId"]
     console.log(utubeid)
     url = ("https://www.youtube.com/watch?v="+utubeid)

     window.open(url, "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
  
  
  }




)
}
}


