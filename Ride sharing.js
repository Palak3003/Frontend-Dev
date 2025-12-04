class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null) throw new Error("Distance not provided");
        if (typeof this.distance !== "number" || this.distance < 0) throw new Error("Invalid distance");
        const base = 50;
        const perKm = 10;
        return base + perKm * this.distance;
    }
}

try {
    const trip1 = new Trip("A", "B", 12);
    console.log(trip1.calculateFare());
    const trip2 = new Trip("C", "D", -5);
    console.log(trip2.calculateFare());
} catch (e) {
    console.log("Error:", e.message);
}
