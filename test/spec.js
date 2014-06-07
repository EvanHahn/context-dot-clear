describe('context.clear', function() {

  var canvas;
  var context;
  beforeEach(function() {
    canvas = document.createElement('canvas');
    canvas.width = 420;
    canvas.height = 69;
    context = canvas.getContext('2d');
  });

  it('calls clearRect on the whole canvas', function() {
    spyOn(context, 'clearRect');
    context.clear();
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, 420, 69);
  });

  it('stays in sync with changes to canvas size', function() {
    canvas.width = 120;
    canvas.height = 240;
    spyOn(context, 'clearRect');
    context.clear();
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, 120, 240);
  });

});
