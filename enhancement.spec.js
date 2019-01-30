// Arrange
const item = {
  name: "longsword",
  type: "weapon",
  durability: "PEN",
  enhancement: 1
};

// Act
const enhancedItem = success(item);

// Assert
expect(enhancedItem.enhancement).toBe("PEN");

// Arrange
const items = [{}, {}, []];

// Act
const enhancedItems = items.map(success);

// Assert
expect(enhancedItems[0]).toBe();
