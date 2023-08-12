function createSvgElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
}

function addPoint(svg, x, y, size, angle, polygon) {
    const point = svg.createSVGPoint();
    point.x = x + size * Math.cos(angle);
    point.y = y + size * Math.sin(angle);
    polygon.points.appendItem(point);
    return point;
  }
  
  function drawTile(svg,x, y, size, tile) {
    const polygon = createSvgElement('polygon');
    svg.appendChild(polygon);
    polygon.setAttribute('class', "hex");
    polygon.onmouseover = tile.onmouseover;
    polygon.onclick = tile.onclick;
  
    for (let side = 0; side < 7; side++) {
      const angle = side * 2 * Math.PI / 6 + Math.PI / 6;
      addPoint(svg, x, y, size, angle, polygon);
    }
  }
  
  export function drawMap(map, svg) {
    const tileSize = 20;
    const tileWidth = tileSize * Math.cos(Math.PI / 6) * 2;
    const tileHeight = tileSize * 2;
    const mapY = tileSize;
  
    for (let y = 0; y < map.length; y++) {
      const row = map[y];
      const even = (y % 2) == 0;
      for (let x = 0; x < row.length; x++) {
        const tile = row[x];
        const tileX = x * tileWidth + (even ? (tileWidth / 2) : 0) + tileWidth / 2;
        const tileY = mapY + y * (tileHeight - (Math.sin(Math.PI / 6) * tileSize));
        drawTile(svg, tileX, tileY, tileSize, tile);
      }
    }
  
    const bbox = svg.getBBox();
    svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
  }