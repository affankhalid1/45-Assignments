// Assignment 45

function CarInfo (Manufacturer:string, Model: string, ...extraoptions : {[key : string]:any}[]):object
{
    const CarInfo =
    {
        Manufacturer,
        Model,
        ...Object.assign({}, ...extraoptions)
    }
    return CarInfo;
}

let info = CarInfo('Toyota','Corolla',{Color: "Grey"},{features: ["Open Roof","Refrigerator","High Quality Comfort"]});

console.log(info)