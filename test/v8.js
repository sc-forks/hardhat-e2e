const V8 = artifacts.require("V8");

contract("V8", accounts => {
  let v8;

  before(async function(){
    v8 = await V8.new();
  })

  it("should set when fn has a modifier", async () => {
    await v8.set(1);
  });

  it("should set when fn contains an OR condition", async () => {
    await v8.setOR(1);
  });

  it("should set when fn contains a ternary conditional", async () => {
    await v8.setTernary(1);
  });
});
