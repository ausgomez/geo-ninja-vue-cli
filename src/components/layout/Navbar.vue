<template>
    <div class="navbar">
        <nav class="indigo darken-1">
            <div class="container">
                <router-link :to="{ name: 'GMap' }" class="brand-logo left">Geo Social</router-link>
                <ul class="right">
                    <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup </router-link></li>
                    <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
                    <li v-if="user"><router-link :to="{ name: 'ViewProfile', params: { id: user.id }}">{{ user.email }}</router-link></li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
    name: 'Navbar',
    data(){
        return {
            user: null
        }
    },
    methods: {
        logout(){
            //redirect after logout
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Login' })
            })
        }
    },
    created() {
        

        // everytime user logs in or logs out or signs up
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.user = user
            } else {
                this.user = null
            }
        })
    }
}
</script>

<style>

</style>