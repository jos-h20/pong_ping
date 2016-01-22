describe('pingPong', function(num) {
  it("adds a string of numbers from 1 to user input", function() {
    expect(pingPong(3)).to.eql([1, 2, 3]);
  });
  // it("returns 'ping pong' if a number is divisible by fifteen", function() {
  //   expect(pingPong(30)).to.eql(["ping pong"]);
  // });

});
