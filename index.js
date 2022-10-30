
  /*AIzaSyCkOLjcymkZ7AIWylRNrR1f3ImPqTCsH4w*/
window.onload=function(){

document.getElementById('btn').addEventListener('click',setTime);


function setTime (){
  
let Time = setInterval(getData, 60000)

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


