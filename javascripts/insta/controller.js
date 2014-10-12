Insta.Tiles.Controller = function(model, view){
  this.view = view
  this.model = model

  this.initialize = function(){
    console.log('Initializing Controller')
    this.loadDefault()
  }

  this.loadDefault = function(){
    this.model.fetchInstagram("instafamous")
    console.log('Loading Default...')
    $('.tiles').on('didLoadInstagram', function(event, response) {
      response.data.forEach(function(insta){
        var user = insta.user.username
        var gravatar = insta.user.profile_picture
        var image = insta.images.standard_resolution.url
        this.view.instaTiles(user, gravatar, image)
      }.bind(this))
    }.bind(this))
  }
}