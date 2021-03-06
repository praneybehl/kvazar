$.fn.editable.defaults.mode = 'inline';

Template.taskBar.helpers({


});

Template.memberSelectOption.helpers({
    user_name: function () {
        var user = Meteor.user();
        return UsersManager.userName(user);

    },

    avatar: function () {
        var user = Meteor.user();
        return UsersManager.getGravatar(user);
    }
});


Template.taskBar.events({
    //чтобы не закрывалось меню при клике на элементы формы
    'click .dropdown-menu header': function (e) {
        e.stopPropagation();
    }
});
