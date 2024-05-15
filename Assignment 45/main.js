"use strict";
// Assignment 45
function CarInfo(Manufacturer, Model, ...extraoptions) {
    const CarInfo = Object.assign({ Manufacturer,
        Model }, Object.assign({}, ...extraoptions));
    return CarInfo;
}
let info = CarInfo('Toyota', 'Corolla', { Color: "Grey" }, { features: ["Open Roof", "Refrigerator", "High Quality Comfort"] });
console.log(info);
