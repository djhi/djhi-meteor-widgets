Template.afQuickField_time.rendered = function () {
    this.$('.input-group').clockpicker({
    	donetext: 'Ok',
    	autoclose: true
    });
};

Template.afQuickField_time.helpers({
	cleanedFieldInputAtts: function () {
		this.afFieldInputAtts.template = 'bootstrap3';
		return this.afFieldInputAtts;
	}
});