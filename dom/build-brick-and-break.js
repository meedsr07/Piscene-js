export function build(num) {
    let count = 1 ;
    const intrvel = setInterval(() => {
         
        if (count > num) {
            clearInterval(intrvel) 
            return
        }
        const elment = document.createElement('div') 
        elment.id = "brick-" + count 
        if (count %3 === 2) {
            elment.dataset.foundation = 'true'
        }
        document.body.append(elment)
        count++
    },100);
}


export function repair(...ids) {
  ids.forEach(id => {
    const briks = document.getElementById(id)
    if (briks === null) {
        return
    } 
    if (briks.dataset.foundation === 'true') {
        briks.dataset.repaired = 'in progress'
    }else {
        briks.dataset.repaired = 'true'
    }
    
  })
}

export function destroy() {
const bricks = document.querySelectorAll("div") 
    bricks[bricks.length -1].remove()
}
