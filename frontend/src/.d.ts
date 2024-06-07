import 'leaflet';

declare module 'leaflet' {
  interface GeoJSON {
    snakeIn(): void;
    snakeOut(): void;
  }
}
