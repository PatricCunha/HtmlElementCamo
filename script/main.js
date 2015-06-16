function start() {
  var gameMap = document.getElementById('map');
  var voxelSize = 10;
  var mapWidth = 800;
  var mapHeight = 600;
  var wide = mapWidth / voxelSize;
  var high = mapHeight / voxelSize;
  console.log(wide);
  var i, j;
  for (i = 0; i < wide; i++) {
    for (j = 0; j < high; j++) {
      gameMap.appendChild(newVoxel(randomIsPath()));
    }
  }
}

function newVoxel(isPath) {
  var vox = document.createElement('div');
  vox.className += 'voxel';
  if (isPath)
    vox.className += ' path';
  else
    vox.className += ' wall';
  return vox;
}

function randomIsPath() {
  var rand = randomIntFromInterval(1,10);
  if(rand > 5)
    return true;
  else
    return false;
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}