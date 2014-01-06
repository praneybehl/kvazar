Meteor.publish('issues', function (options) {
    return Issues.find({}, options);

});

Meteor.publish('statuses', function () {
    return Status.find({});

});

Meteor.publish('users', function () {
    return User.find({}, {fields: {'current_workspace_id': 1, emails:1, profile:1}});
});


Meteor.publish('notifications', function () {
    return Notification.find({user_id: this.userId});
});

Meteor.publish('workspaces', function () {
    return Workspace.find({members:this.userId});
});


Meteor.publish('groups', function () {
    return Group.find({members:this.userId});
});

Meteor.publish('projects', function () {
    return Projects.find({members:this.userId});
});


Meteor.publish('categories', function () {
    return Category.find({members:this.userId});
});



Accounts.onCreateUser(function(options, user) {
    var userId=user._id;
    var workspace = Workspace.create({title: 'My workspace', user_id: userId, members: [userId]});
    user.current_workspace_id = workspace._id;

    return user;
});






