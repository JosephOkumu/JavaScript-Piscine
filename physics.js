function getAcceleration(object) {
    // Destructure the object to extract the necessary properties
    const { f, m, Δv, Δt, d, t } = object;

    // Check if the first formula can be used: a = F/m
    if (f !== undefined && m !== undefined && m !== 0) {
        return f / m;
    }

    // Check if the second formula can be used: a = Δv/Δt
    if (Δv !== undefined && Δt !== undefined && Δt !== 0) {
        return Δv / Δt;
    }

    // Check if the third formula can be used: a = 2d/t^2
    if (d !== undefined && t !== undefined && t !== 0) {
        return 2 * d / (t * t);
    }

    // If no valid formula can be applied, return "impossible"
    return "impossible";
}


const object1 = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t: 1,
    d: 10
};