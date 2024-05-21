document.getElementById('file-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    const modelViewer = document.getElementById('model-viewer');
    modelViewer.src = url;

    // AR Quick Look benötigt eine usdz-Datei, stelle sicher, dass das `ios-src` Attribut gesetzt wird
    if (file.name.endsWith('.usdz')) {
      modelViewer.setAttribute('ios-src', url);
    } else {
      modelViewer.removeAttribute('ios-src');
    }
  }
});
