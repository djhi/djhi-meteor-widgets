Template["afCheckbox_checkboxButton"].atts = function () {
  var atts = _.clone(this.atts);
  if (this.selected) {
    atts.checked = "";
  }
  return atts;
};

Template["afCheckbox_checkboxButton"].created = function () {
	this.data._checkboxSelected = new ReactiveProperty(this.data.selected);
};

Template["afCheckbox_checkboxButton"].helpers({
	checkboxSelected: function(){
		return this._checkboxSelected.get();
	}
});

Template["afCheckbox_checkboxButton"].events({
	'change input': function (event, template) {
		template.data.selected = !template.data.selected;
		template.data.value = template.data.selected;
		template.data._checkboxSelected.set(template.data.selected);
	}
});