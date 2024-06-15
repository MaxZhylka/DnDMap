


class ShortestWay
       {
            constructor(Roads, Start, End)
            {
                this.roads=Roads || [];
                this.start=Start;
                this.end=End;
            }

        calculateBlue(el, End,start)
        {
                let elCopy = el.coordinates.map(innerArray => [...innerArray]);
                let Point = this.pointCoordinatesSwap(this.FirstArrayPoint(elCopy));
                let Point1 =this.pointCoordinatesSwap( this.LastArrayPoint(elCopy));
                let currentStartPoint=start;
                let FuturePoint;
                 if(currentStartPoint[0]==Point[0]&&currentStartPoint[1]==Point[1])
                        {
                             FuturePoint=Point1;

                        }
                        else
                        {      FuturePoint=Point;

                        }


            let end=End.slice();

            let startEndLine =[
                FuturePoint,
                end.slice()

            ]

            let FinalLength= this.LineLength(startEndLine)*2.39401496;
            return FinalLength;

        }

        calculateGreen(road)
        {
             let Points=road.coordinates.slice();
             return this.LineLength(Points)*2.39401496 ;

        }
        // DrawRedLine(chosenRoad) {
        //
        //     var CompletedRoad = chosenRoad.GetRoad();
        //     //console.log(CompletedRoad);
        //     for (let el of CompletedRoad) {
        //
        //
        //         var geojsonLine = L.geoJSON(el, {style: function (feature) {return {color: '#ff0000',weight:7};
        //             }
        //         }).addTo(map);
        //     }
        // }
       GetShortestRoad()
       {
            let PossibleRoads = [];
            let CompletedRoads = [];
            let chosenRoad = new RGBDistance();
            let index;
            let start=this.start.slice();

            let Result=this.RecursiveSearch(PossibleRoads, chosenRoad, index, CompletedRoads,start);

            return Result;
        }
      // RedRoad()
      //  {
      //       let PossibleRoads = [];
      //       let CompletedRoads = [];
      //       let chosenRoad = new RGBDistance();
      //       let index;
      //       let start=this.start.slice();
      //
      //        this.DrawRedLine( this.RecursiveSearch(PossibleRoads, chosenRoad, index, CompletedRoads,start) );
      //   }
        static ReturnLength(Road)
        {
           return Road.getGreenValue();
        }

        RecursiveSearch(PossibleRoads, chosenRoad, index,  CompletedRoads, start)
        {


            chosenRoad = this.chooseNextRoad(start, this.roads, PossibleRoads, chosenRoad, CompletedRoads);
            if(chosenRoad===null)
            {
              return  null;
            }






            let CopyOfEnd=this.pointCoordinatesSwap( this.end.slice());

            let chosenRoadLastPoint = chosenRoad.lastRoadPoint();
            let chosenRoadFirstPoint=chosenRoad.firstRoadPoint();

            if ((chosenRoadLastPoint[0] == CopyOfEnd[0] && chosenRoadLastPoint[1] == CopyOfEnd[1])||(chosenRoadFirstPoint[0] == CopyOfEnd[0] && chosenRoadFirstPoint[1] == CopyOfEnd[1]))
            {


                  return chosenRoad;
            }
            else
            {

                let newStartPoint=this.checkForCompletedStartPoint(CompletedRoads,chosenRoad,start);

                start = this.pointCoordinatesSwap(newStartPoint.slice());

                 index = PossibleRoads.indexOf(chosenRoad);
                PossibleRoads.splice(index, 1);
                CompletedRoads.push(chosenRoad.getRoad());
                // if(PossibleRoads.length===0)
                // {
                //   return null;
                // }
                // console.log(CompletedRoads);
                return this.RecursiveSearch(PossibleRoads, chosenRoad, index, CompletedRoads,start);
            }
         }

     checkForCompletedStartPoint(CompletedRoads, chosenRoad,start) {

                let endOfChosenRoad=chosenRoad.lastRoadPoint();
                let startOfChosenRoad=chosenRoad.firstRoadPoint();
                let endOfCompletedRoad;
                let startOfCompletedRoad;
                let startPointMatches;
                let endPointMatches;


                    startPointMatches = false;
                    endPointMatches = false;

                    for (let el1 of CompletedRoads) {
                        endOfCompletedRoad = this.LastArrayPoint(el1);
                        startOfCompletedRoad = this.FirstArrayPoint(el1);

                        // Check if the start point of the possible road matches any start point of completed roads
                        if ((startOfChosenRoad[0] == startOfCompletedRoad[0]&&startOfChosenRoad[1] == startOfCompletedRoad[1])||(startOfChosenRoad[0]==endOfCompletedRoad[0]&&startOfChosenRoad[1]==endOfCompletedRoad[1])) {
                            startPointMatches = true;
                        }

                        // Check if the end point of the possible road matches any end point of completed roads
                        if ((endOfChosenRoad[0] == endOfCompletedRoad[0]&& endOfChosenRoad[1] == endOfCompletedRoad[1])||(endOfChosenRoad[0]==startOfCompletedRoad[0]&&endOfChosenRoad[1]==startOfCompletedRoad[1])) {
                            endPointMatches = true;
                        }

                        // If both start and end points match any completed road, no need to check further
                        if (startPointMatches && endPointMatches) {
                            break;
                        }
                    }
                    let startSwap=this.pointCoordinatesSwap(start);
                    if(CompletedRoads==0)
                    {
                        if(startOfChosenRoad[0]==startSwap[0]&&startOfChosenRoad[1]==startSwap[1])
                        {
                              return endOfChosenRoad;

                        }
                        else
                        {   return startOfChosenRoad;

                        }
                    }
                    // If start point doesn't match any completed road, return it
                    if (!startPointMatches) {


                          return startOfChosenRoad;

                    }

                    // If end point doesn't match any completed road, return it
                    if (!endPointMatches) {



                        return endOfChosenRoad;

                    }


    var StartCopy=this.pointCoordinatesSwap(start);
                    if(endOfChosenRoad[0]==StartCopy[0]&&endOfChosenRoad[1]==StartCopy[1])
                    {

                        return startOfChosenRoad;
                    }
                    else
                    {

                        return endOfChosenRoad
                    }


}

      chooseNextRoad(currentPoint, Roads, PossibleRoads, chosenRoad, CompletedRoads) {

            let newCurrentPoint = this.pointCoordinatesSwap(currentPoint.slice());
            for (let el of Roads) {


                for (let coordinates of el.coordinates)
                {
                    if (this.checkForExistInCompletedRoads(el, CompletedRoads) && (newCurrentPoint[0] ==coordinates[0]&&newCurrentPoint[1]==coordinates[1] )) {

                    let existingRoads = chosenRoad.GetRoad() || [];
                    let combinedRoads = existingRoads.concat(el);
                      PossibleRoads.push(new RGBDistance(el, this.calculateGreen(el) + chosenRoad.getGreenValue(), this.calculateBlue(el, this.end,currentPoint),combinedRoads));
                }
                }

            }

            if(PossibleRoads.length===0)
            {
              return null;
            }
            return this.CompareRedIndex(PossibleRoads);
        }
         checkForExistInCompletedRoads(road,CompletedRoads)
        {
            for (let el of CompletedRoads)
            {
                if(road.coordinates == el)
                {
                    return false;
                }
            }
            return true;
        }
        CompareRedIndex(possibleRoads)
        {

            let minRed=99999999999999;
            let roadWithMinRed;
            for(let el of possibleRoads)
            {
                if(el.getRedValue()<=minRed)
                {
                    roadWithMinRed=el;
                    minRed=roadWithMinRed.getRedValue();


                }
            }
            return roadWithMinRed;
        }
          LineLength(road) {
            let length = 0;
            for (let i = 0; i <road.length - 1; i++) {
            let point1 = road[i];
            let point2 = road[i + 1];
            length += Math.sqrt((point2[0] - point1[0]) ** 2 + (point2[1] - point1[1]) ** 2);
            }

            return length;
        }
        pointCoordinatesSwap(currentPoint)
        {

            return [currentPoint[1],currentPoint[0]];
        }

        LastArrayPoint(road)
        {
             const lastIndex = road.length - 1
             return road[lastIndex];
        }
        LastRoadPoint(road)
        {
             const lastIndex = road.coordinates.length - 1
             return road.coordinates[lastIndex];
        }
        FirstRoadPoint(road)
        {
          return road.coordinates[0];
        }
         FirstArrayPoint(road)
        {
          return road[0];
        }
        SetStart(start)
        {
            this.start=start;
        }
        SetEnd(end)
        {
            this.end=end;
        }

       }
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
