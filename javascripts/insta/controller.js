Insta.Tiles.Controller = function(model, view){
  this.view = view
  this.model = model

  this.initialize = function(){
    console.log('Initializing Controller')
    this.loadInstaImages()
    this.bindListener()
  }

  this.bindListener = function(){
    $('form').on('submit', function(e){
      e.preventDefault()
      this.validateHashTag()
      this.view.clearDOM()
    }.bind(this))
  }

  this.validateHashTag = function(){
     var hashRegex = /^#/
     var hashtag = this.view.formHashTag()
     if (hashRegex.test(hashtag)) {
       console.log('Starts with #')
       hashtag = hashtag.split('')
       hashtag.splice(0,1)
       hashtag = hashtag.join('')
       this.loadInstaImages(hashtag)
     } else {
       console.log('Does not Starts with #')
       this.loadInstaImages(hashtag)
     }
   }

  this.loadInstaImages = function(hashtag){
    if (typeof hashtag === 'undefined'){
      hashtag = "goldengate"
    }
    this.model.fetchInstagram(hashtag)
    $('.tiles').on('didLoadInstagram', function(event, response) {
      response.data.forEach(function(insta){
        this.view.instaTiles(insta)
      }.bind(this))
    }.bind(this))
  }
}