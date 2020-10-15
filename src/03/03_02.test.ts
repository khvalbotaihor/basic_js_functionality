import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }

            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }

            }
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type:"FIRE-STATION",
                budget: 500000,
                staffCount:1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }


            }
        ],
        citizensNumber: 1000000
    }

})

test("Budged should be changed for hospital", () => {

    addMoneyToBudget(city.govermentBuildings[0], 100000);

    expect(city.govermentBuildings[0].budget).toBe(300000)

})
test("Budged should be changed for fire-station", () => {

    addMoneyToBudget(city.govermentBuildings[1], 100000);

    expect(city.govermentBuildings[1].budget).toBe(600000)

})

test("house should be repaired", () => {

    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();

})


test("fire personal", () => {

    toFireStaff(city.govermentBuildings[0], 20);

    expect(city.govermentBuildings[0].staffCount).toBe(180)

})

test("hire personal", () => {

    toHireStaff(city.govermentBuildings[0], 20);

    expect(city.govermentBuildings[0].staffCount).toBe(220)

})

test("Greeting message should be correct", () => {

    const message = createMessage(city);

expect(message).toBe("Hello New York citizens. I want you be happy. All 1000000 man")
})


