class RGBDistance
{
    constructor(Road = 0, Green = 0, Blue = 0, FinalRoad=[])
            {
                this.road=Road;
                this.redvalue=Green+Blue;
                this.greenvalue=Green;
                this.bluevalue=Blue;
                this.finalRoad=FinalRoad;
            }

    getRoad()
    {
        return this.road.coordinates;
    }
    lastRoadPoint()
    {
        const lastIndex = this.road.coordinates.length - 1
        return this.road.coordinates[lastIndex];
    }
    firstRoadPoint()
    {
        return this.road.coordinates[0];
    }
    getRedValue()
    {
        return this.redvalue;
    }
      getBlueValue()
    {
        return this.bluevalue;
    }
      getGreenValue()
    {
        return this.greenvalue;
    }
    AddRoad(road)
    {
        this.finalRoad.push(road);
    }
    GetRoad()
    {
        return  this.finalRoad;
    }
}