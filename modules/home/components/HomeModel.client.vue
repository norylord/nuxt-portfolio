<template>
  <div>
    <canvas ref="experience"/>
  </div>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  DirectionalLight,
  MeshPhongMaterial,
  OctahedronGeometry,
  MeshLambertMaterial,
  WebGLRenderer,
  TorusKnotGeometry,
  HemisphereLight,
  AmbientLight
} from 'three'
import {Ref, ref, watch, onMounted} from 'vue'

let renderer: WebGLRenderer
const experience: Ref<HTMLCanvasElement | null> = ref(null)


const aspectRatio = 600 / 800

const scene = new Scene()
const light = new DirectionalLight(0xffffbb, 1);
light.position.x = 10
light.position.y = 10
scene.add(light)
const camera = new PerspectiveCamera(75, aspectRatio, 0.1, 1000)
camera.position.set(0, 0, 4)

scene.add(camera)

const sphere = new Mesh(
    new TorusKnotGeometry(1, .35, 64, 8),
    new MeshLambertMaterial({color: 0x5051f9, clipShadows: true, flatShading: true})
)

const ambient = new AmbientLight('0xff0000', 10)
ambient.position.y = -2
const ambientLight = new AmbientLight(0xffffff, 1)
ambientLight.position.x = 10

scene.background = null

scene.add(ambientLight)
scene.add(sphere)


function updateCamera() {
  camera.aspect = aspectRatio
  camera.updateProjectionMatrix()
}

function updateRenderer() {
  renderer.setSize(600, 800)
  renderer.render(scene, camera)
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({canvas: experience.value, alpha: true})
    updateRenderer()
  }
}


onMounted(() => {
  setRenderer()
  loop()
})

const loop = () => {
  sphere.rotation.y += 0.001
  sphere.rotation.z += 0.001
  sphere.rotation.x += 0.001
  updateRenderer()
  requestAnimationFrame(loop)
}
</script>
