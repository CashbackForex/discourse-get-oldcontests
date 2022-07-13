/**
 * Links the path `/contests` to a route named `getContests`. Named like this, a
 * route with the same name needs to be created in the `routes` directory.
 */
 export default function () {
    this.route('getContests', { path: '/contests' });
}