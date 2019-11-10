export default class WeatherLocalStorage {
    constructor(key) {
        this.key = key;
    }

    addArrayItem = (item) => {
        const array = this.getItem();
        if (Array.isArray(array)) {
            array.push(item);
            this.setItem(array);
        } else {
            this.setItem([item]);
        }
    };

    removeArrayItem = (id) => {
        const array = this.getItem();
        if (Array.isArray(array)) {
            array.splice(array.findIndex(c => c.id === id), 1);
            this.setItem(array);
        } else {
            this.setItem([]);
        }
    };

    setItem = (item) => {
        localStorage.setItem(this.key, JSON.stringify(item));
    };

    getItem = () => {
        try {
            return JSON.parse(localStorage.getItem(this.key));
        } catch (e) {
            localStorage.removeItem(this.key);
            return null;
        }
    }
}