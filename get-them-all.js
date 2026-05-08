export function getArchitects() {
    const architects = Array.from(document.getElementsByTagName('a')) 
    const nonarchitects = Array.from(document.getElementsByTagName('a:not')) 
    return [architects , nonarchitects] 
}

export function getClassical() {
    const classical = Array.from(document.getElementsByClassName('a.classical'))
    const nonclassical = Array.from(document.getElementsByClassName('a:not.classical') )
    return [classical , nonclassical]
}

export function getActive() {
    const active = Array.from(document.querySelectorAll('a.classical.active'))
    const nonactive = Array.from(document.querySelectorAll('a.classical:not(.active)'))

    return [active , nonactive ]
}

export function getBonannoPisano() {
    const BonannoPisano = document.getElementById('BonannoPisano')
    const Architects = Array.from(document.querySelectorAll('a.classical.active'))
    
    const ather = Architects.filter(element => element != BonannoPisano)

    return [BonannoPisano , ather]
}