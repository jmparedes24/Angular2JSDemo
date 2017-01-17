"use strict";
var router_1 = require('@angular/router');
var data_list_component_1 = require('./data-list.component');
// Route config let's you map routes to components
var routes = [
    // map '/allData' to the people list component
    {
        path: 'allData',
        component: data_list_component_1.DataListComponent,
    },
    // map '/' to '/allData' as our default route
    {
        path: '',
        redirectTo: '/allData',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map