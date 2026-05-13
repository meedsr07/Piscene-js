function replica(target, ...obj) {
    for (let i = 0; i < obj.length; i++) {
        let object = obj[i];

        for (let key of Object.keys(object)) {
            let value = object[key];


            if (typeof value === "object" && !Array.isArray(value)) {
                if (typeof target[key] !== "object") {
                    target[key] = {};
                }
                replica(target[key], value);
            } 
            else {
                target[key] = value;
            }
        }
    }

    return target;
}
