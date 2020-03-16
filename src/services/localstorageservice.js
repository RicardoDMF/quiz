

class LocalStorageService { 
  updateKey(key, value) {
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getInformation(key) {
    const normalizedValue = localStorage.getItem(key);
    return JSON.parse(normalizedValue, (_, value) => {
      if (value === null) {
        return undefined;
      }
      return value;
    }, 0);
  }

  removeInformation(key) {
    window.localStorage.removeItem(key)
  }

  setInformation(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  clearInformation() {
    window.localStorage.clear();
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService