describe('pingPong', function(num) {
  it("adds a string of numbers from 1 to user input", function() {
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });
  it("returns 'ping pong' if a number is divisible by fifteen", function() {
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping pong"]);
  });
  it("returns 'pong' if a number is divisible by five", function() {
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });
  it("returns 'ping' if a number is divisible by three", function() {
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });

});
