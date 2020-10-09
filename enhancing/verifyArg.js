const verifyArg = (item) => {
  const itemType = Array.isArray(item) ? "array" : typeof item;
  const requiredProps =
    Object.keys(item) === ["name", "durability", "enhancement"] ?
    true :
    "missing required properties name, durability, enhancement";
  const validEnhancement =
    typeof item.enhancement === "integer" &&
    item.enhancement >= 0 &&
    item.enhancement <= 20 ?
    true :
    "enhancement must be an integer, within the range of 0-20";
  const validDurability =
    typeof item.durability === "integer" &&
    item.durability >= 0 &&
    item.durability <= 100 ?
    true :
    "durability must be an integer, within the range of 0-100";

  if (
    itemType === "object" &&
    requiredProps &&
    validEnhancement &&
    validDurability
  ) {
    true;
  } else {
    return false;
  }
};