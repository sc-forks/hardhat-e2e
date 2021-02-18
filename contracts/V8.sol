pragma solidity ^0.5.0;

// A contract for show-casing new coverage measurements
// in solidity-coverage 0.8.x
contract V8 {
  uint a;

  modifier checkInput(uint x){
    require(x != 0, 'x cannot be zero');
    _;
  }

  // When set is never called with `0`
  function set(uint x)
    public
    checkInput(x)
  {
    a = x;
  }

  // When setOR is never called with `2`
  function setOR(uint x)
    public
  {
    if (x == 1 || x == 2){
      a = x;
    }
  }

  // When setTernary is only called with `1`
  function setTernary(uint x)
    public
  {
    (x == 1)
      ? a = x
      : a = 5;
  }
}
