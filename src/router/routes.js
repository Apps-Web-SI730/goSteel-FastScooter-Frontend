import HomeView from "@/core/public/pages/home-view.component.vue"
import PageNotFound from "@/core/public/pages/page-not-found.component.vue"
import UserPaymentMethodComponent from '@/core/fast-scooter/components/user-payment-method.component.vue'
import UserProfileUpdateComponent from '@/core/fast-scooter/pages/user-profile-update.component.vue'
import UserProfileComponent from '@/core/fast-scooter/pages/user-profile.component.vue'
import HomeAboutUsComponent from '@/core/public/components/home-about-us.component.vue'

export const routes = [
  {
    path: "/home",
    name: "Home View",
    component: HomeView,
  },

  {
    path: "/sign-up",
    name: "Sign Up Form",
    component: () => import("@/core/fast-scooter/pages/user-sign-up-form.component.vue")
  },
  {
    path: "/support-client",
    name: "Support Client",
    component: () => import("@/core/fast-scooter/pages/user-support-client.vue")
  },
  {
    path: "/login",
    name: "Login Form",
    component: () => import("@/core/fast-scooter/iam/pages/login-content.vue")
  },

  {
    path: "/search-scooter",
    name: "Search Scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-search.component.vue")
  },
  {
    path: "/search-scooter/:scooterID",
    name: "Scooters Details",
    component: () => import("@/core/fast-scooter/pages/scooter-details.component.vue")
  },
  {
    path: "/user-update",
    name: "Update User",
    component: UserProfileUpdateComponent,
  },
  {
    path: "/favorites-scooters",
    name: "Favorites scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-favorites.component.vue")
  },

  {
    path: "/cart-shopping",
    name: "Cart Shopping",
    component: ()=> import("@/core/fast-scooter/pages/user-cart-shopping.component.vue")
  },
  {
    path: "/my-reservations",
    name: "My Reservations",
    component: () => import("@/core/fast-scooter/pages/scooter-booking.component.vue")
  },
  {
    path: "/user-profile",
    name: "User Profile",
    component: UserProfileComponent
  },
  {
    path: "/about-us",
    name: "About Us",
    component: HomeAboutUsComponent
  },
  {

    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page Not Found",
    component: PageNotFound
  },
  {
    path: "/payment-method/:id",
    name: "Payment Method",
    component: UserPaymentMethodComponent
  },
]