describe('pingPong', function(num) {
  it("adds a string of numbers from 1 to user input", function() {
    expect(pingPong(3)).to.eql([1, 2, 3]);
  });
  it("returns 'ping pong' if a number is divisible by fifteen", function() {
    expect(pingPong(15)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "ping pong"]);
  });

});
