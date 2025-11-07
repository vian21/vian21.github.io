# Leaflet

## References

- Leaflet Docs: https://leafletjs.com/reference.html
- React leaflet: https://react-leaflet.js.org/

## Definition of terms

- `Polyline`: a polyline is a continuous line that is composed of one or more connected straight line segments, which, together, make up a shape. i.e snake
- Polygon: draw a shape on map by joining the points
- **GeoJSON** : GeoJSON is a format for encoding a variety of geographic data structures […]. A GeoJSON object may represent a region of space (a Geometry), a spatially bounded entity (a Feature), or a list of Features (a FeatureCollection). GeoJSON supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection. Features in GeoJSON contain a Geometry object and additional properties, and a FeatureCollection contains a list of Features.
- Marker
- rectangle
- circle()

## init

1. imports
   - leaflet.css
   - leaftlet.js
   - along side with related images
2. JS

```js
const map = L.map(ID_OF_MAP_DIV).setView([LAT, LON], ZOOM_LEVEL);
```

- SetView(center, zoom) is required
- LatLon: latitude- longitude value
