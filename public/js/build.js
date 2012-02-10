/*
 * Copyright 2012 Vijay Kiran (http://vijaykiran.com)
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

//See https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    baseUrl: "./",
    dir: "../build",
    optimize: "uglify",
    skipModuleInsertion: true,
    optimizeCSS: "none",
    inlineText: true,
    paths: {
        jquery:                    'libs/jquery/jquery-min',
        underscore:                'libs/underscore/underscore-amd-1.3.1',
        backbone:                  'libs/backbone/backbone-amd-0.9.0',

        text:                      'libs/require/text',
        order:                     'libs/require/order',

        templates:                 '../templates',
        tabs:                      '../bootstrap/js/bootstrap-tab',
        modal:                     '../bootstrap/js/bootstrap-modal',
        tooltip:                   '../bootstrap/js/bootstrap-tooltip',
        popover:                   '../bootstrap/js/bootstrap-popover'
    },

    modules: [
        {
            name: "main"
        }
    ]
})
