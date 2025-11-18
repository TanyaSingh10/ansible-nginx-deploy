// Simple scroll to demo
document.addEventListener('DOMContentLoaded', function(){
  var viewDemo = document.getElementById('view-demo');
  if(viewDemo) viewDemo.addEventListener('click', function(){
    var features = document.getElementById('features');
    if(features) features.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

