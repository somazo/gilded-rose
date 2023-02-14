import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", () => {
    const testDegrade = (
      item: Item,
      prevSellIn: number,
      prevQuality: number
    ) => {
      expect(item.sellIn).toBe(prevSellIn - 1);
      if (prevQuality === 0) {
        expect(item.quality).toBe(0);
        return;
      }
      if (prevSellIn > 0) {
        expect(item.quality).toBe(prevQuality - 1);
        return;
      }
      expect(item.quality).toBe(prevQuality - 2);
    };
    const initSellIn = 1;
    const initQuality = 10;
    let prevSellIn = initSellIn;
    let prevQuality = initQuality;
    const gildedRose = new GildedRose([
      new Item("foo", initSellIn, initQuality),
    ]);
    const items = gildedRose.updateQuality();
    testDegrade(items[0], prevSellIn, prevQuality);
    prevSellIn = items[0].sellIn;
    prevQuality = items[0].quality;
    gildedRose.updateQuality();
    testDegrade(items[0], prevSellIn, prevQuality);
    prevSellIn = items[0].sellIn;
    prevQuality = items[0].quality;
    gildedRose.updateQuality();
    testDegrade(items[0], prevSellIn, prevQuality);
  });

  it("The Quality of an item is never negative", () => {
    const sellIn = 0;
    const quality = 0;
    const gildedRose = new GildedRose([new Item("foo", sellIn, quality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);

    gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie actually increases in Quality the older it gets", () => {
    const testIncrease = (
      item: Item,
      prevSellIn: number,
      prevQuality: number
    ) => {
      if (prevSellIn > 0) {
        expect(item.quality).toBe(prevQuality + 1);
        return;
      }
      expect(item.quality).toBe(prevQuality + 2);
    };
    const initSellIn = 2;
    const initQuality = 0;
    let prevSellIn = initSellIn;
    let prevQuality = initQuality;
    const gildedRose = new GildedRose([
      new Item("Aged Brie", initSellIn, initQuality),
    ]);
    const items = gildedRose.updateQuality();
    testIncrease(items[0], prevSellIn, prevQuality);

    prevSellIn = items[0].sellIn;
    prevQuality = items[0].quality;
    gildedRose.updateQuality();
    testIncrease(items[0], prevSellIn, prevQuality);

    prevSellIn = items[0].sellIn;
    prevQuality = items[0].quality;
    gildedRose.updateQuality();
    testIncrease(items[0], prevSellIn, prevQuality);
  });

  it("The Quality of an item is never more than 50", () => {
    const initQuality = 49;
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, initQuality)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(initQuality + 1);
    gildedRose.updateQuality();
    expect(items[0].quality).toBeLessThanOrEqual(50);
    gildedRose.updateQuality();
    expect(items[0].quality).toBeLessThanOrEqual(50);
  });

  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality. Sulfuras is a legendary item and as such its Quality is 80 and it never alters.", () => {
    const initSellIn = 10;
    const initQuality = 50;
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", initSellIn, initQuality),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(initSellIn);
    expect(items[0].quality).toBe(80);

    gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(initSellIn);
    expect(items[0].quality).toBe(80);
  });

  it("Backstage passes increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert", () => {
    const testPasses = (
      item: Item,
      prevSellIn: number,
      prevQuality: number
    ) => {
      if (prevSellIn <= 0) {
        expect(item.quality).toBe(0);
        return;
      }
      if (prevSellIn <= 5) {
        expect(item.quality).toBe(prevQuality + 3);
        return;
      }
      if (prevSellIn <= 10) {
        expect(item.quality).toBe(prevQuality + 2);
        return;
      }
      expect(item.quality).toBe(prevQuality + 1);
    };
    const initSellIn = 20;
    const initQuality = 1;
    let prevSellIn;
    let prevQuality;
    const gildedRose = new GildedRose([
      new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        initSellIn,
        initQuality
      ),
    ]);
    const { items } = gildedRose;
    for (let i = 2; i < 30; i++) {
      prevSellIn = items[0].sellIn;
      prevQuality = items[0].quality;
      gildedRose.updateQuality();
      testPasses(items[0], prevSellIn, prevQuality);
    }
  });

  it("Conjured items degrade in Quality twice as fast as normal items", () => {
    const testConjured = (
      item: Item,
      prevSellIn: number,
      prevQuality: number
    ) => {
      if (prevSellIn <= 0) {
        expect(item.quality).toBe(prevQuality - 4);
        return;
      }
      expect(item.quality).toBe(prevQuality - 2);
    };
    let prevSellIn;
    let prevQuality;
    const gildedRose = new GildedRose([new Item("Conjured Gouda", 1, 10)]);
    const { items } = gildedRose;

    prevSellIn = items[0].sellIn;
    prevQuality = items[0].quality;
    gildedRose.updateQuality();
    testConjured(items[0], prevSellIn, prevQuality);

    prevSellIn = items[0].sellIn;
    prevQuality = items[0].quality;
    gildedRose.updateQuality();
    testConjured(items[0], prevSellIn, prevQuality);
  });
});
