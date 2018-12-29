const storage = {
  set (key, value) {
    localStorage[key] = JSON.stringify(value)
  },
  get (key) {
    if (!localStorage[key]) return null
    const value = localStorage[key]
    try {
      const parsed = JSON.parse(value)
      return parsed
    } catch (e) {
      return value
    }
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    if (localStorage.clear) {
      localStorage.clear()
    }
  }
}

export default storage
