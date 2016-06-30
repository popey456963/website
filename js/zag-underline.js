var width = $('.underline').width();

  var steps = 18;
  var height = 3;
  var step_size = width/steps;

  var d_animated = ['M0', '1'];
  var d_normal = ['M0', '1'];

  for (var i=1; i<=steps; i++) {
    d_normal.push(step_size*(-0.5 + i), 1, step_size*i, 1);
    d_animated.push(step_size*(-0.5 + i), height, step_size*i, 1);
  }

  $(document).ready(function() {  
    $('.underline--path').attr('d', d_normal.join(' '));
    
    $('.link').hover(function() {
      $('.underline--animation').attr({from: d_normal.join(' '), to: d_animated.join(' ')})
    	$('.underline--animation')[0].beginElement(); 
    }, function() {
      $('.underline--animation').attr({to: d_normal.join(' '), from: d_animated.join(' ')})
    	$('.underline--animation')[0].beginElement(); 
    });
  });