function imageChange() {
  if (window.innerHeight > window.innerWidth) {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('name').style.display = 'block';
  }
  else {
    document.getElementById('logo').style.display = 'block';
    document.getElementById('name').style.display = 'none';
  }
}

imageChange();
window.addEventListener('resize', imageChange);