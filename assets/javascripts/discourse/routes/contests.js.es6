/**
 * Route for the path `/getContests` as defined in `../contests-route-map.js.es6`.
 */
 export default Discourse.Route.extend({
    renderTemplate() {
      // Renders the template `../templates/contests.hbs`
      this.render('contests');
    }
});