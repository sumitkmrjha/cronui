<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.positronx.io" target="_blank">
           CronUI
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/add">Add</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/list">List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/edit">Edit</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
