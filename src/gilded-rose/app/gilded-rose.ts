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
    item.quality = item.quality + 1;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
};

const updatePass = (item: Item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
};

const updateSulfuras = (item: Item) => {
  item.quality = 80;
};

const updateOther = (item: Item) => {
  const degradeQty = item.name.startsWith("Conjured ") ? 2 : 1;
  if (item.quality > 0) {
    item.quality = item.quality - degradeQty;
  }

  item.sellIn = item.sellIn - 1;

  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - degradeQty;
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
