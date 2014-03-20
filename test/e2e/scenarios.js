'use strict';

describe('my app', function() {
    beforeEach(function() {
		browser().navigateTo('../../index.html');
    });

	var oldCount=-1;
	it("entering todo and performing enter", function () {

        element('ul#todo-list').query(function($el, done) {
            oldCount=$el.children().length;
            done();
        });

        input('newTodo').enter('test data');

        element('#submitTodo').query(function($el, done) {
            $el.click();
            done();
        });
	});

    it('should add one more element now',function(){
        expect(repeater('ul#todo-list li').count()).toBe(oldCount+1);
    });

});
