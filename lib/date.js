Template.afQuickField_date.rendered = function () {
    this.$('input').datepicker({
    	format: 'dd/mm/yyyy'
    });
};

Template.afQuickField_date.helpers({
	cleanedFieldInputAtts: function () {
		this.afFieldInputAtts.template = 'bootstrap3';
		return this.afFieldInputAtts;
	}
});