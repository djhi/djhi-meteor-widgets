Template.afQuickField_date.rendered = function () {
  this.$('input').datepicker();
};

Template.afQuickField_date.helpers({
	cleanedFieldLabelAtts: function () {
		this.afFieldLabelAtts.template = 'bootstrap3';
		return this.afFieldLabelAtts;
	},
	cleanedFieldInputAtts: function () {
		this.afFieldInputAtts.template = 'bootstrap3';
		this.afFieldInputAtts.type = 'text';
		return this.afFieldInputAtts;
	}
});