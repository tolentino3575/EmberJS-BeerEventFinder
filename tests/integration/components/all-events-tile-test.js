import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-events-tile', 'Integration | Component | all events tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-events-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-events-tile}}
      template block text
    {{/all-events-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
