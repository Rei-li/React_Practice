import ENV from '../appConfig.js';
import assign from 'object-assign';
import events from 'events';

const EventEmitter = events.EventEmitter;
const CHANGE_EVENT = 'change';

const toJson = response => response.json();
const getHeaders = () => {
    var requestHeaders = new Headers();
    requestHeaders.append("Access-Control-Allow-Origin", ENV.host);
    return requestHeaders;
};


const DepotStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return fetch(`${ENV.host}/depots`,
            { method: 'GET',
                headers: getHeaders,
                mode: 'cors'
            })
             .then(toJson);
        //     .catch(function(error) {
        //     console.log('Request failed', error)
        // });
    },

    
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

export default DepotStore;