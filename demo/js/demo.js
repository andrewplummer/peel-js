

var module = angular.module('App', []);

module.directive('activeHtml', function() {

  function prepareHTML(str) {
    str = str.replace(/\s*active-html=""\s*/, '');
    var s = str.split('\n');
    var m = s[s.length - 1].match(/^\s+/);
    str = s.map(function(l) {
      return l.replace(m[0], '');
    }).join('\n');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    return str;
  }
  return {
    restrict: 'A',
    compile: function(element) {
      var html = prepareHTML(element[0].outerHTML);
      var el = angular.element('<code class="language-markup">' + html + '</code>');
      element.after(el);
    }
  }
});

module.directive('activeJs', function() {
  return {
    restrict: 'A',
    compile: function(element) {
      element.html(element.html().replace(/^\n/, ''));
      eval(element.text());
    }
  }
});

module.directive('tapMe', function() {
  return {
    restrict: 'C',
    link: function(scope, element) {
      element.on('mousedown touchstart', function() {
        element.addClass('hidden');
      });
    }
  }
});

