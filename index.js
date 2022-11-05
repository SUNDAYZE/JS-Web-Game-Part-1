
function newImage (url,left,bottom) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    return image
}
newImage ('assets/green-character.gif','100px','100px')
newImage ('assets/pine-tree.png', '450px','200px')
newImage ('assets/tree.png', '200px','300px')
newImage ('assets/pillar.png','320px','100px')
newImage ('assets/crate.png', '150px','200px')
newImage ('assets/well.png','500px','425px')

function newItem(url,left,bottom) {
    let sword = newImage (url,left,bottom)
    sword.addEventListener('dblclick', function(){
        sword.remove()
    })
}

newItem ('assets/sword.png','500px','405px')
newItem ('assets/sheild.png','165px','185px')
newItem ('assets/staff.png','600px','100px')



