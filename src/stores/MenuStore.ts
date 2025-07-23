import { action, makeObservable, observable } from "mobx";

class MenuStore {
  tabs: string[];
  selectedMenu: string;
  isNavExpanded: boolean;

  constructor() {
    this.tabs = ["Task Manager", "Vessel & Voyage", "Tab 3"];
    this.selectedMenu = this.tabs[0];
    this.isNavExpanded = false;
    makeObservable(this, {
      tabs: observable,
      selectedMenu: observable,
      isNavExpanded: observable,
      setMenu: action,
      closeTab: action,
      toggleNavExpansion: action,
    });
  }

  setMenu(menu: string) {
    if (this.tabs?.includes(menu)) {
      this.selectedMenu = menu;
    }
  }

  closeTab(tab: string) {
    if (!this.tabs) return;
    const idx = this.tabs.indexOf(tab);
    if (idx > -1) {
      this.tabs.splice(idx, 1);
      if (this.selectedMenu === tab) {
        this.selectedMenu = this.tabs[0] || "";
      }
    }
  }

  toggleNavExpansion() {
    this.isNavExpanded = !this.isNavExpanded;
  }
}

const menuStore = new MenuStore();
export default menuStore;
