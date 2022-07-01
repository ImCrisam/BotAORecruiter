const nomenclature = {
    0: "",
    1: "k",
    2: "m",
    3: "b",
    4: "k",
}

module.exports = {

    formatFame: (value) => {
        value = value + "";
        let result = "";
        const len = value.length;
        let pointLocal = len % 3
        if (value[0] == 0) return value;
        switch (pointLocal) {
            case 0:
                result = value[0] + value[1] + value[2];
                break;
            case 1:
                result = value[0] + "." + value[1] + value[2];
                break;
            case 2:
                result = value[0] + value[1] + "." + value[2];
                break;

            default:
                break;
        }
        result += nomenclature[Math.trunc((len - 1) / 3)]

        return result

    },



}