export class EventSummary {
  title: string;
  iconImage: string;
  titleLink: string;

  constructor(title: string, iconImage: string) {
    this.title = title;
    this.iconImage = iconImage;
  }

  /**
   * Set icon image depending on title,
   * HH, meet greet, etc
   */
  setIconImage() {

  }

  /**
   * URL linking to place of business
   */
  setTitleLink() {

  }
}