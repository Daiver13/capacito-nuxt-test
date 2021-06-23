import { Geolocation } from '@capacitor/geolocation'
import { LocalNotifications } from '@capacitor/local-notifications'

export default function ({ app }, inject) {
  inject('CapacitorGeolocation', Geolocation)
  inject('LocalNotifications', LocalNotifications)
  // console.log('LocalNotifications', LocalNotifications)
}
