export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.getters['user/auth/isLogin']) {
    return redirect('/')
  }
}
