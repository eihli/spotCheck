/*
=========================
DO NOT EDIT THIS FILE!!!!
=========================
*/

window.TaskView = Backbone.View.extend({

  template: _.template("<label class='task <% if (completionStatus) print('crossed-out') %>'><input type='checkbox' <% if (completionStatus) print('checked') %> value='<%= title %>'> <%= title %></label>"),

  events: {
    'click': 'completeTask'
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  completeTask: function() {
  	this.model.complete();
  },
  
});