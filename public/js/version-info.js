(function() {
  var el = document.getElementById('version-info');
  var iso = el.getAttribute('data-updated');
  var date = new Date(iso);
  if (!isNaN(date.getTime())) {
    var formatted = date.toLocaleString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    el.textContent = el.textContent + ' \u00B7 ' + formatted;
  }
})();
