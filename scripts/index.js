var images=["https://upload.wikimedia.org/wikipedia/en/9/96/Radhe_film_poster.jpg","https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg","https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg","https://upload.wikimedia.org/wikipedia/en/2/21/Bell_Bottom_film_Poster.jpg","https://upload.wikimedia.org/wikipedia/en/c/c7/Tadap_film_poster.jpg"];



var image=document.createElement('img');

document.querySelector("#slideshow").append(image);
var index=0;
function slide(){
    
    image.src=images[index];
    index++;
    if(index>=images.length)
    index=0;
}
setInterval("slide()",2000);



var movieData=[{
    name:"K.G.F: Chapter 1",
    releaseDate:"21-DEC-2018",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-et00042769-15-12-2020-08-08-47.jpg",
    imdb:8.4
},
{
    name:"Jersey",
    releaseDate:"22-APR-2022",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jersey-et00118049-11-04-2022-12-53-49.jpg",
    imdb:7.4
},
{
    name:"RRR",
    releaseDate:"25-MAR-2022",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rrr-et00094579-29-03-2022-03-23-44.jpg",
    imdb:8.9
    
},
{
    name:"URI - The Surgical Strike (Hindi)",
    releaseDate:"11-JAN-2019",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uri--the-surgical-strike-hindi-et00062444-23-10-2020-12-18-15.jpg",
    imdb:8.3
},
{
    name:"Badla",
    releaseDate:"8-MAR-2019",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/badla-et00077951-19-06-2018-10-46-53.jpg",
    imdb:7.8
},
{
    name:"Rowdy Rathore",
    releaseDate:"1-JUN-2012",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rowdy-rathore-et00008030-24-03-2017-20-12-25.jpg",
    imdb:5.8
},
{
    name:"Kabir Singh",
    releaseDate:"21-JUN-2019",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kabir-singh-et00080853-22-10-2020-06-59-53.jpg",
    imdb:7.1
},
{
    name:"Tevar",
    releaseDate:"9-JAN-2015",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tevar-et00025026-16-05-2018-11-51-56.jpg",
    imdb:4.2
},
{
    name:"Akira",
    releaseDate:"2-SEP-2016",
    poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/akira-et00035923-02-09-2020-03-26-04.jpg",
    imdb:5.9
}
]
localStorage.setItem('movies',JSON.stringify(movieData));
var movieDataLoc=JSON.parse(localStorage.getItem('movies'));
document.querySelector('#sorting').addEventListener('change',sortingFn);
displayFn();
function sortingFn(){
    var sortValue=document.querySelector('#sorting').value;
    if(sortValue=="lh"){
        movieDataLoc.sort((a,b)=>a.imdb-b.imdb);
    }
    else if(sortValue=="hl"){
        movieDataLoc.sort((a,b)=>b.imdb-a.imdb);
    }
    else{
        movieDataLoc=JSON.parse(localStorage.getItem('movies'));
    }
    displayFn();
}

function displayFn(){
    document.querySelector('#movies').innerHTML="";
movieDataLoc.forEach((element)=>{
    var image=document.createElement('img');
    image.src=element.poster;
    var name=document.createElement('h2');
    name.innerText=element.name;
    var release=document.createElement('h4');
    release.innerText=element.releaseDate;
    var imdb=document.createElement('h4');
    imdb.innerText=element.imdb;

    var box=document.createElement('div');
    var innerBox=document.createElement('div');
    innerBox.append(release,imdb);
    box.append(image,name,innerBox);
    document.querySelector('#movies').append(box);
});
}

