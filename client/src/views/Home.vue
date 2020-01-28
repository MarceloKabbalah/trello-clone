<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn :to="{name: 'signup' }"> SignUp</v-btn>
        <!-- <h1>Loading...</h1> -->
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
