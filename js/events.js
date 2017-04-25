function toggelePhysics(){
  var status = document.getElementById('physicsStatus').checked;
  network.physics.physicsEnabled = status;
}
