var cw_drawVirtualPoly = require("./draw-virtual-poly");
module.exports = function(ctx, camera, cw_furthestDistanceFlag) {
  var camera_x = camera.pos.x;
  var zoom = camera.zoom;
  ctx.strokeStyle = "rgba(255, 87, 87, 0.5)";
  ctx.fillStyle = "rgba(255, 87, 87, 0.5)";
  ctx.lineWidth = 1 / zoom;
  ctx.beginPath();

  for (var f = cw_furthestDistanceFlag.GetFixtureList(); f; f = f.m_next) {
    var s = f.GetShape();
    var shapePosition = cw_furthestDistanceFlag.GetWorldPoint(s.m_vertices[0]).x;
    if ((shapePosition > (camera_x - 5)) && (shapePosition < (camera_x + 10))) {
      cw_drawVirtualPoly(ctx, cw_furthestDistanceFlag, s.m_vertices, s.m_vertexCount);
    }
  }
    
  ctx.fill();
  ctx.stroke();
}
