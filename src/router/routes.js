import HomeView from "@/core/public/pages/home-view.component.vue"
import PageNotFound from "@/core/public/pages/page-not-found.component.vue"
import UserPaymentMethodComponent from '@/core/fast-scooter/components/user-payment-method.component.vue'
import UserProfileUpdateComponent from '@/core/fast-scooter/pages/user-profile-update.component.vue'

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
    name: "home-contact",
    component: () => import("@/core/fast-scooter/pages/user-support-client.vue")
  },
  {
    path: "/login",
    name: "Login Form",
    component: () => import("@/core/fast-scooter/pages/user-login-form.component.vue")
  },

  {
    path: "/scooter-search",
    name: "Search Scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-search.component.vue")
  },
  {
    path: "/user-update",
    name: "Update User",
    component: UserProfileUpdateComponent,
  },
  {
    path: "/scooter-favorites",
    name: "Favorites scooter",
    component: () => import("@/core/fast-scooter/pages/scooter-favorites.component.vue")
  },

  {
    path: "/cart-shopping",
    name: "Cart Shopping",
    component: ()=> import("@/core/fast-scooter/pages/user-cart-shopping.component.vue")
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