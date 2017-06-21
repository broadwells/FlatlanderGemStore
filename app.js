(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreCtrl', function() {
    this.products = gems;
  });
  app.controller('PanelCtrl', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 215.95,
    description: 'Greektown coney dog People Mover the big three Greektown Ilitch family Lions. Motor City People Mover GM rebirth Mexican Town Pistons coney island. Like A Rock GM Pistons Midtown Tigers like a rock Wayne State University. Coney Dog New Center Ford New Center motor city Downtown Ilitch family. Coney Island motor city Downtown Greektown the big three Greektown Midtown.',
    images: [
      {
        full: 'dodecahedron-01-full.jpg',
        thumb: 'dodecahedron-01-thumb.jpg'
      },
      {
        full: 'dodecahedron-02-full.jpg',
        thumb: 'dodecahedron-02-thumb.jpg'
      }
    ],
    canPurchase: false, //if false, ng-show won't show add to cart button
    //soldOut: true //if true, ng-hide won't show product on page
  },
  {
    name: 'Pentagonal Gem',
    price: 500.95,
    description: 'People Mover like a rock Ford like a rock People Mover rebirth Downtown. Coney Island motor city Ford Ford coney dog Mexican Town Lions. Rebirth Mexican Town Ilitch family Midtown like a rock New Center Ford. Rebirth GM Detroit Corktown Lions Tigers Tigers. Greektown Chrysler motor city Quicken Loans Ford People Mover Greektown.',
    images: [
      {
        full: 'pentagonal-01-full.jpg',
        thumb: 'pentagonal-01-thumb.jpg'
      },
      {
        full: 'pentagonal-02-full.jpg',
        thumb: 'pentagonal-02-thumb.jpg'
      }
    ],
    canPurchase: true,
  }]
})();
