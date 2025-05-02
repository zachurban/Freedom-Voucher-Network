async function main() {
  const FreedomVoucher = await ethers.getContractFactory("FreedomVoucher");
  const contract = await FreedomVoucher.deploy();
  await contract.deployed();
  console.log("FreedomVoucher deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
