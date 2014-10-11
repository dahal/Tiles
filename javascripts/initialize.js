$(document).ready(function(){
  var view = new Insta.Tiles.View()
  var model = new Insta.Tiles.Model()
  var controller = new Insta.Tiles.Controller(model, view)
  model.fetch()
  controller.initialize()
})