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

require.config({
  paths: {
      jquery:         'libs/jquery/jquery-min',

      underscore:     'libs/underscore/underscore-amd-1.3.1',
      backbone:       'libs/backbone/backbone-amd-0.9.0',

      //bootstrap stuff referred directly from bootstrap git submodule.
      tabs:           '/public/bootstrap/js/bootstrap-tab',
      modal:          '/public/bootstrap/js/bootstrap-modal',
      tooltip:        '/public/bootstrap/js/bootstrap-tooltip',
      popover:        '/public/bootstrap/js/bootstrap-popover',

      //require.js plugins
      text:           'libs/require/text',
      order:          'libs/require/order',
      //underscore.js templates
      templates:      '../templates'
  }

});

require([
    'app'
], function(App){
    App.initialize();

});
