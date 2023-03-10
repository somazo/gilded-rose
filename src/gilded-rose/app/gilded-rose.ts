export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const specialItems = {
  BRIE: "Aged Brie",
  PASS: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
};

const updateBrie = (item: Item) => {
  if (item.quality < 50) {
    item.quality++;
  }

  item.sellIn--;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality++;
  }
};

const updatePass = (item: Item) => {
  if (item.quality < 50) {
    item.quality++;
    if (item.sellIn < 11) {
      item.quality++;
    }
    if (item.sellIn < 6) {
      item.quality++;
    }
  }

  item.sellIn--;

  if (item.sellIn < 0) {
    item.quality = 0;
  }
};

const updateSulfuras = (item: Item) => {
  item.quality = 80;
};

const updateOther = (item: Item) => {
  const degradeQty = item.name.startsWith("Conjured ") ? 2 : 1;
  if (item.quality > 0) {
    item.quality -= degradeQty;
  }

  item.sellIn--;

  if (item.sellIn < 0 && item.quality > 0) {
    item.quality -= degradeQty;
  }
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case specialItems.BRIE:
          updateBrie(item);
          break;
        case specialItems.PASS:
          updatePass(item);
          break;
        case specialItems.SULFURAS:
          updateSulfuras(item);
          break;
        default:
          updateOther(item);
          break;
      }
    });

    return this.items;
  }
}
