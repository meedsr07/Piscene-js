function isPositive(nb) {
    if (nb < 0)  {
        return false
    }
    return true
}

function abs(nb) {
    if (!(isPositive(nb))) {
        nb = nb * -1
    }
    return nb
}
