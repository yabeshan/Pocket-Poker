
export class PositionModel {

    x: number;
    y: number;
    zoom: number;
    orientation: string;

    constructor (
        x: number = 0, 
        y: number = 0, 
        zoom: number = 1, 
        orientation: string = "0",
    ) {
        this.x = x;
        this.y = y;
        this.zoom = zoom;
        this.orientation = orientation;
    }
}