function isPositive(nb) {
    if (nb < 0)  {
        return false
    }
    return true
}

function abs(nb) {
    if (nb === 0) {
        return 0
    }
    if (!(isPositive(nb))) {
        nb = nb * -1
    }
    return nb
}
