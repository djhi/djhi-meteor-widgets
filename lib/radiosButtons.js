Template.afRadioGroup_radiosButtons.events({
	'click input': function (event, template) {
		$(event.currentTarget)[0].checked = true;
	}
});