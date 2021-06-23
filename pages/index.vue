<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        capacitor-test
      </h1>

      <p>
        Location<br>
        <template
          v-if="!location.latitude"
        >
          loading ...
        </template>

        <template
          v-else
        >
          latitude:  {{ location.latitude }}<br>
          longitude:  {{ location.longitude }}
        </template>
      </p>
      <div class="links">
        <!-- <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a> -->

        <nuxt-link
          to="about"
          class="button--green"
        >
          About
        </nuxt-link>

        <button
          class="button--green"
          @click="handleNotification"
        >
          Local Notifications
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: {
        latitude: '',
        longitude: ''
      }
    }
  },

  mounted () {
    this.getLocations()
  },

  methods: {
    async getLocations () {
      const coordinates = await this.$CapacitorGeolocation.getCurrentPosition()

      this.location.latitude = coordinates.coords.latitude
      this.location.longitude = coordinates.coords.longitude
    },

    async handleNotification () {
      const isNot = await this.$LocalNotifications.areEnabled()

      const canSend = await this.$LocalNotifications.requestPermissions()
      console.log('can isNot', isNot)
      console.log('can send', canSend)

      if (canSend) {
        await this.$LocalNotifications.schedule({
          notifications: [
            {
              title: "On sale",
              body: "Widgets are 10% off. Act fast!",
              id: 1,
              schedule: { at: new Date(Date.now() + 1000) },
              actionTypeId: "",
              extra: null
            }
          ]
        })
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 18px;
  color: #35495e;
  letter-spacing: 1px;
}

svg {
  width: 100%;
  max-width: 245px;
  margin: auto;
}

.subtitle {
  font-weight: 300;
  font-size: 14px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
