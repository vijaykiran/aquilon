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

//Main View
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main.html'

], function ($, _, Backbone, MainViewTemplate) {

    var MainView = Backbone.View.extend({
        el:$("#content"),

        template:_.template(MainViewTemplate),

        events:{
        },

        initialize:function () {
            this.$el.html(this.template);
        },

        render:function () {
        },

        showExpenses:function () {
            console.log("TODO");
        }




    });

    return MainView;
});
