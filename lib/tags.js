Template.afArrayField_tags.rendered = function() {
  this.$('input').select2({
    tags: this.tags
  });
};