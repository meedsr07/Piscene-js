function isPositive(nb) {
    return (nb > 0)
}

function abs(nbr) {
    if (nbr === 0) {
        return 0
    }
    if (isPositive(nbr)) return nbr
    return -nbr
}
