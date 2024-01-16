import * as THREE from 'three'


//Scene
const scene = new THREE.Scene()

//Objects
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xd4cdff })
const mesh = new THREE.Mesh(geometry, material)

//1 can be any unit of measure, if building a house then use feet, if making small items maybe 1 equals 1 inch
//these properties can be placed anywhere before the renderer method
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 0

//checkingon the length of the vetor
console.log(mesh.position.length())
scene.add(mesh)

//Sizes
const sizes = {
    width: 1000,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = -0.2
camera.position.x = 2
scene.add(camera)

//Canvas
const canvas = document.querySelector("canvas.webgl")

// Scale
mesh.scale.x = 2
mesh.scale.y = 2
mesh.scale.x = 2


//Rotations - based on Euler not vector
mesh.rotation.reorder('YXZ')
mesh.rotation.y = 3.14159 * 0.25 //pi allows you to handle rotatons
console.log(Math.PI) //can also use the javascript method


//Renderer - it's the act of 'taking the picture'
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


//Axis Helper - to see the axis visually
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper) //if it's an object you have to add it to the scene

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)