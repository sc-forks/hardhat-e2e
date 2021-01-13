pragma solidity ^0.5.0;

// A contract for show-casing new coverage measurements
// in solidity-coverage 0.8.x
contract V8 {
  uint a;

  modifier checkInput(uint x){
    require(x != 0, 'x cannot be zero');
    _;
  }

  function set(uint x)
    public
    checkInput(x)
  {
    a = x;
  }

  function setOR(uint x)
    public
  {
    if (
      x == 1 ||
      x == 2 ||
      x == 3
    ){
      a = x;
    }
  }

  function setTernary(uint x)
    public
  {
    (x == 1)
      ? a = x
      : a = 5;
  }
}
