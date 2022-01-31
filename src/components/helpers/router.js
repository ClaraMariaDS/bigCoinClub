import { createRouter, createWebHistory }  from 'vue-router'
 
import Empresas from '../Atoms/LandingAtoms/NavBar/Empresas.vue';
import Personas from '../Atoms/LandingAtoms/NavBar/Personas.vue';
import Nosotros from '../Atoms/LandingAtoms/NavBar/Nosotros.vue';
import Contacto from '../Atoms/LandingAtoms/NavBar/Contacto.vue';
 
const routes = [
 {
   path: '/empresas',
   name: 'empresas',
   component: Empresas
 },
 {
   path: '/personas',
   name: 'personas',
   component: Personas
 },
 {
   path: '/nosotros',
   name: 'nosotros',
   component: Nosotros
 },
 {
  path: '/plazos-inversion',
  name: 'plazos',
  component: Empresas
},
{
  path: '/contacto',
  name: 'contacto',
  component: Contacto
},
{
  path: '/simulador-inversion',
  name: 'personas',
  component: Personas
}
]
 
const router = createRouter({
   history: createWebHistory(),
   routes, 
 })
 
 export default router