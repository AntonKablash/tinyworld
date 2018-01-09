describe("sample test suite", function() {

	beforeEach(function() {});

	it("add simple", function() {
		var calc = {
			add: function add(a, b) {
				return a + b;
			}
		};
		var sum = calc.add(1, 1);
		expect(sum).toBe(2);
	});
});