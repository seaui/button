define(function(require) {

    require('../src/button');
    var expect = require('expect');
    var module = require('$');

  describe('button', function() {
      module('<div id="mocha-fixture" style="position: absolute;left: -9999px;top: -9999px;display: none;"></div> ').appendTo('#mocha');
      it('js ok', function() {
          expect(module.fn.button).to.be.a('function');
      });

      it('should provide no conflict', function () {
          var button = module.fn.button.noConflict();
          expect(module.fn.button).to.not.be.ok();
          module.fn.button = button
      })

      it('should be defined on jquery object', function () {
          expect(module(document.body).button).to.be.ok();//button method is defined
      })

      it('should return element', function () {
          expect(module(document.body).button()[0]).to.equal(document.body);
      })

      it('should return set state to loading', function (done) {
          var btn = module('<button class="btn" data-loading-text="fat">mdo</button>');
          expect(btn.html()).to.equal('mdo');
          btn.button('loading');
          setTimeout(function(){
              expect(btn.html()).to.equal('fat');
              expect(btn.attr('disabled')).to.be.ok();
              expect(btn.hasClass('disabled')).to.be.ok();
              done();
          },0);
      })

      it('should return reset state', function (done) {
          var btn = module('<button class="btn" data-loading-text="fat">mdo</button>');
          expect(btn.html()).to.be('mdo');
          btn.button('loading');
          setTimeout(function(){
              expect(btn.html()).to.equal('fat');
              expect(btn.attr('disabled')).to.be.ok();
              expect(btn.hasClass('disabled')).to.be.ok();
              btn.button('reset');
              setTimeout(function(){
                  expect(btn.html()).to.be("mdo");
                  expect(btn.attr('disabled')).to.not.be.ok();
                  expect(btn.hasClass('disabled')).to.not.be.ok();
                  done();
              },0);
          },0);

      })

      it('should toggle active', function (done) {
          var btn = module('<button class="btn">mdo</button>');
          expect(btn.hasClass('active')).to.not.be.ok();//btn does not have active class
          btn.button('toggle');
          expect(btn.hasClass('active')).to.be.ok();//btn has class active
          done();
      })

      it('should toggle active when btn children are clicked', function () {
          var btn = module('<button class="btn" data-toggle="button">mdo</button>'),
              inner = module('<i></i>')
          btn
              .append(inner)
              .appendTo(module('#mocha-fixture'))
          expect(btn.hasClass('active')).to.not.be.ok();//btn does not have active class
          inner.click();
          expect(btn.hasClass('active')).to.be.ok();//btn has class active
      })

      it('should toggle active when btn children are clicked within btn-group', function () {
          var btngroup = module('<div class="btn-group" data-toggle="buttons"></div>'),
              btn = module('<button class="btn">fat</button>'),
              inner = module('<i></i>')
          btngroup
              .append(btn.append(inner))
              .appendTo(module('#mocha-fixture'));
          expect(btn.hasClass('active')).to.not.be.ok();//btn does not have active class
          inner.click();
          expect(btn.hasClass('active')).to.be.ok();//btn has class active
      })

      it('should check for closest matching toggle', function () {
          var group = '<div class="btn-group" data-toggle="buttons">' +
              '<label class="btn btn-primary active">' +
              '<input type="radio" name="options" id="option1" checked="true"> Option 1' +
              '</label>' +
              '<label class="btn btn-primary">' +
              '<input type="radio" name="options" id="option2"> Option 2' +
              '</label>' +
              '<label class="btn btn-primary">' +
              '<input type="radio" name="options" id="option3"> Option 3' +
              '</label>' +
              '</div>'

          group = module(group)

          var btn1 = module(group.children()[0])
          var btn2 = module(group.children()[1])
          var btn3 = module(group.children()[2])

          group.appendTo(module('#mocha-fixture'))

          expect(btn1.hasClass('active')).to.be.ok();// 'btn1 has active class'
          expect(btn1.find('input').prop('checked')).to.be.ok();// 'btn1 is checked'
          expect(btn2.hasClass('active')).to.not.be.ok();//'btn2 does not have active class'
          expect(btn2.find('input').prop('checked')).to.not.be.ok();// 'btn2 is not checked'
          btn2.find('input').click()
          expect(btn1.hasClass('active')).to.not.be.ok();// 'btn1 does not have active class'
          expect(btn1.find('input').prop('checked')).to.not.be.ok();//'btn1 is not checked'
          expect(btn2.hasClass('active')).to.be.ok();// 'btn2 has active class'
          expect(btn2.find('input').prop('checked')).to.be.ok();// 'btn2 is checked'

          btn2.find('input').click() /* clicking an already checked radio should not un-check it */
          expect(btn1.hasClass('active')).to.not.be.ok();// 'btn1 does not have active class'
          expect(btn1.find('input').prop('checked')).to.not.be.ok();//'btn1 is not checked'
          expect(btn2.hasClass('active')).to.be.ok();// 'btn2 has active class'
          expect(btn2.find('input').prop('checked')).to.be.ok();// 'btn2 is checked'
      })
  });

});
