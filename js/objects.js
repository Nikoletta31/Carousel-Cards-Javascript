/*  The title and subtitle of the heading of carousel  */ 

var options1 = {
    container: "my-carousel", 
    title: "Fresh and just uploaded content", 
    subtitle: "Here is the subtitle and it is very interesting"
}
document.getElementById("title").innerHTML = options1.title;
document.getElementById("subtitle").innerHTML = options1.subtitle;


/*  Cards' objects data  */ 

var cards = [
    {
        image: "https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S", 
        type: "elearning",
        duration: "1000", 
        title: "Great course that you will really enjoy.", 
         
    },
    {
        image: "https://lp-cms-production.imgix.net/features/2013/04/sunrise1_cs.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200&h=800", 
        type: "video",
        duration: "3000", 
        title: "The best course of the world and you will see that.", 
         
    },
    {
        image: "https://www.intel.com/content/dam/www/public/us/en/images/iot/RWD/new-york-city-skyline-sunny-aerial-rwd.jpg.rendition.intel.web.864.486.jpg", 
        type: "study",
        duration: "1000", 
        title: "The study that you have to do.", 
         
    },
    {
        image: "https://cf.bstatic.com/images/hotel/max1024x768/223/223087771.jpg", 
        type: "elearning",
        duration: 1000, 
        title: "We advise you to learn this. Just try.", 
         
    }, 
    {
        image: "https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg", 
        type: "video",
        duration: 1000, 
        title: "Our new video about this wonderful car. Take a look.", 
         
    }, 
  
]

/*  Check if getting the data (Should be API data). If error - show "Loading".  */ 

async function getCards() {
    try{
     let response = cards;  
     console.log(response)
    }
    catch(e) {
      document.getElementById("images").innerHTML = "<h1>Loading...</h1>"
      console.log(e);
    }
}
getCards();


/*  Looping through the cards to get and to display the data  */ 

var str = '<ul>'
cards.forEach(function(card) {

   str += '<li>'+ 
    '<div class="img">' + 
    '<div class="back" id="back" style="background-image:url('+card.image+')">' +
      
    '<div class="type">' + card.type +  '</div class="type">' +
    '<div class="time">' + card.duration +  '</div class="time">' +
    
    '</div class="back" id="back">' +
    '<h3>' + card.title + '</h3>' + 
    '</div class="img">' + 
    '</li>' ;

  }); 
  
  str += '</ul>';
  document.getElementById("images").innerHTML = str;




 
 

