Insta.Tiles.View = function(){
  console.log("Loading insta tiles")
  this.instaTiles = function(insta){
    var user        = insta.user.username
    var gravatar    = insta.user.profile_picture
    var image       = insta.images.standard_resolution.url
    var link        = insta.link
    var likes       = insta.likes.count
    var source      = $("#insta-image").html()
    var template    = Handlebars.compile(source)
    var content     = {
                      instaUser: user,
                      instaGravatar: gravatar,
                      instaImage: image,
                      instaLink: link,
                      instaLikes: likes}
    var picture     = template(content)
    this.renderImages(picture)
  }

  this.renderImages = function(picture){
    $('.tiles').append(picture)
  }

  this.formHashTag = function(){
    return $('#hashtag').val()
  }

  this.clearDOM = function(){
    $('.hash').remove()
  }
}