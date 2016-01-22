describe('pingPong', function(num) {
  it("add a string of numbers from user input to 1", function() {
    expect(pingPong(100)).to.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  // it("checks if a number is divisible by three", function() {
  //   expect(pingPong(9)).to.equal(true);
  // });
  // it("checks if a number is divisible by five", function() {
  //   expect(pingPong(25)).to.equal(true);
  // });
  // it("checks if a number is divisible by fifteen", function() {
  //   expect(pingPong(30)).to.equal(true);
  // });
});
