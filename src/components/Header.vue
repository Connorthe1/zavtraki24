<template>
  <header class="bg-white py-6 px-24 flex font-bellota tracking-widest text-lg">
    <router-link to="/" v-if="$route.name !== 'home'" class="font-bold">ZAVTRAKI 24</router-link>
    <nav class="ml-auto">
      <ul class="flex gap-12">
        <li>
          <router-link to="menu" :class="{'border-b border-black': $route.name === 'menu'}">MENU</router-link>
        </li>
        <li>DELIVERY</li>
        <li>CART</li>
        <li class="border-l pl-4">LOGIN</li>
      </ul>
    </nav>
  </header>
</template>