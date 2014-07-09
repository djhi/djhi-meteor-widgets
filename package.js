Package.describe({
  summary: "Widgets for autoform and bootstrap 3. Not meant to be used by anyone but me :)"
});

Package.on_use(function(api, where) {
  api.use([
    'moment-with-langs',
    'numeral',
    'bower',
    'ui'
  ], ['client', 'server']);
  
  api.imply([
    'moment-with-langs',
    'numeral',
    'bower'
  ], ['client', 'server']);

  api.use(['clockpicker'], ['client']);
  api.imply(['clockpicker'], ['client']);

  api.add_files([
    'lib/checkboxButton.css',
    'lib/checkboxButton.html',
    'lib/checkboxButton.js'
  ], ['client']);

  api.add_files([
    'lib/date.html',
    'lib/date.js'
  ], ['client']);

  api.add_files([
    'lib/email.html',
    'lib/email.js'
  ], ['client']);

  api.add_files([
    'lib/mobile.html',
    'lib/mobile.js'
  ], ['client']);

  api.add_files([
    'lib/phone.html',
    'lib/phone.js'
  ], ['client']);

  api.add_files([
    'lib/radiosButtons.html',
    'lib/radiosButtons.js'
  ], ['client']);

  api.add_files([
    'lib/tags.html',
    'lib/tags.js'
  ], ['client']);

  api.add_files([
    'lib/time.html',
    'lib/time.js'
  ], ['client']);

  api.add_files([
    'lib/nolabel.html'
  ], ['client']);

  // Install bower components.
  api.add_files('smart.json', 'client');

});

Package.on_test(function(api) {
  api.use(['moment-with-langs', 'numeral', 'meteor-formatting', 'tinytest', 'test-helpers']);

  api.add_files('meteor-formatting_tests.js', ['client', 'server']);
});
