class Album {
  constructor(photos) {
    this.photos = [];
  }
  addNewPhotos(input){
    this.photos.push(input);
  }
  listPhoto(){
    for (var i = 0; i < this.photos.length; i++) {
      console.log(this.photos[i]);
    }
  }
  accesPhoto(number){
    return this.photos[number - 1];
  }
}


class Photo {
  constructor(name, location) {
    this.name = name;
    this.location = location;

  }
}

var photo1 = new Photo('dszw','fdsf');
var photo2 = new Photo('wdbhvx', 'scbhiedh');
var photo3 = new Photo('dcfsfds', 'bgtbfbfg');
var myAlbum = new Album();

myAlbum.addNewPhotos(photo1);
myAlbum.addNewPhotos(photo2);
myAlbum.addNewPhotos(photo3);
