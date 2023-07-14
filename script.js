$(document).ready(function(){
    console.log('ready');
    var city = [
      "Kasol", 
      "Manikaran", 
      "Kasauli", 
      "Dharamshala", 
      "Mcleodganj", 
      "Dalhousie",
      "Manali",
      "Shimla",
      "Chandigarh",
      "Tijara Ji",
      "Mahavir Ji",
      "Bada Gaon"
      ];
    var cityImage = [
      "url(https://images.unsplash.com/photo-1581791534721-e599df4417f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
      "url(https://images.unsplash.com/photo-1621342797383-af042377a06c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
      "url(https://images.unsplash.com/photo-1643778765874-23e79f4e38b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
      "url(https://images.unsplash.com/photo-1622225074638-1d80c0388697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
      "url(https://navbharattimes.indiatimes.com/photo/msid-87160752,imgsize-145932/pic.jpg)", 
      "url(https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/707cqcse5av94nde0b0l29ihhhpu_1600316182_1587991355_1.Khajjiar-Mini-Switzerland-of-India-3.jpg.jpg)", 
      "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/1200px-Manali_City.jpg)", 
      "url(https://www.sterlingholidays.com/activities/shimla/the%20ridge.jpg.imgw.1280.1280.jpeg)", 
      "url(https://cdn.britannica.com/11/173811-050-5F0E921C/Waterfall-rock-garden-Nek-Chand-India-Chandigarh.jpg)", 
      "url(https://upload.wikimedia.org/wikipedia/commons/1/1c/Tijara_Jain_Temple_-_Main%282%29.jpg)", 
      "url(https://upload.wikimedia.org/wikipedia/commons/e/ef/Shri_Mahaveerji_temple.jpg)", 
      "url(https://pbs.twimg.com/media/EaZXneNVAAEL3WW.jpg)"
      ];
    for (var i=0; i<city.length; i++) {
      $('.blogContainer').append("<div class='postContainer' id='"+city[i]+"'><div class='dimmer'></div><div class='postImage' id='postImage"+i+"'></div><div class='title postTitle'>"+city[i]+"</div></div>");
      $('#postImage'+i).css("background-image", cityImage[i]);
    }
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.banner').css({height: "500px", backgroundAttachment: "scroll"});
      $('.searchContainer').hide();
    } else {
      var searchCount = 0;
      $('.searchIcon').click(function(){
        if (searchCount === 0) {
          $('.searchBox').animate({
            width: "200px",
            padding: "5px",
          }, 500);
          searchCount++;
        } else if (searchCount === 1) {
          $('.searchBox').animate({
            width: "0px",
            padding: "0px",
          }, 500);
          searchCount=0;
          var search = $('.searchBox').val().toLowerCase();
           $('html, body').animate({
            scrollTop: $('#'+search).offset().top
          }, 1000);
          $('.searchBox').val("");
        }
      })
      $('.searchBox').keypress(function(){
        var search = $('.searchBox').val().toLowerCase();
          $('html, body').animate({
            scrollTop: $('#'+search).offset().top
          }, 1000);
        $('.searchBox').val("").animate({
            width: "0px",
            padding: "0px",
          }, 500, function(){
            $('.searchBox').css("border", "none");
          })
          searchCount=0;
      })
      $('.postContainer').hover(function(){
        $(this).children('.dimmer').fadeToggle(100);
      }) 
    }
  })