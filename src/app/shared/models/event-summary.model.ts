export class EventSummary {
  title: string;
  iconImage: string;
  titleLink: string;
  tooltip: string;

  constructor(title: string, iconImage: string, tooltip: string = "") {
    this.title = title;
    this.iconImage = iconImage;
    this.tooltip = tooltip;
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