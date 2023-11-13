<template>
    <v-layout>
      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <RecipeCard />
            </v-col>
            <v-col>
           
            </v-col>
            <v-col>
              <v-row>
  
              </v-row>
              <v-row>
  
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </template>
  
  <script setup lang="ts">
  //import { tmtcStore } from "../stores/tmtc";
  //import { apiStore } from "../stores/api";
  
  import RecipeCard from "@/components/cooking/recipeCard.vue"

  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  