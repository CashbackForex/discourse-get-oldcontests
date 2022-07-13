export default Ember.Controller.extend({
    init() {
        this._super();
        this.set('contests', []);
    }
});