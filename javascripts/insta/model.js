Insta.Tiles.Model = function(controller){
  this.controller = controller

  this.fetchInstagram = function(hashtag){
    $('.tiles').instagram({
      hash: hashtag,
      clientId: '4a793795bceb4a8b98ba6051cf034c36'
    });
  }
  
}