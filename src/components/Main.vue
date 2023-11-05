<template>
    <div>
        <div class="header">
            <Header class="wide"/>
            <!-- <NavbarMob :buttons="buttons"/> -->
        </div>
        <div class="main-frame">
            <div class="info">
                <div class="image">
                </div>
                <div class="title">
                <div class="inner-title">
                    <h1>App Name</h1>
                </div>
                </div>
            </div>
        </div>
        <div class="buttons">
            <router-link is-active="is-active" :class="{'is-still-active': $route.path.includes(button.name.toLowerCase() + '/')}" class="button" v-for="(button, index) in buttons" :key="index" :to="button.url" >{{button.name}}</router-link>
        </div>
        <div class="router-2">
            <router-view></router-view>
        </div>
        <div class="header">
            <Footer class="wide"/>
            <!-- <NavbarMob :buttons="buttons"/> -->
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    },
    data(){
        return {
            buttons: [
                {
                name: 'Dashboard',
                url: '/dashboard'
                },
                {
                name: 'Settings',
                url: '/settings'
                },
            ],
        }
    }
}
</script>