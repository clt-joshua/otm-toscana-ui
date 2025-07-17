import { action, makeObservable, observable } from "mobx";

class MenuStore {
  tabs: string[];
  selectedMenu: string;

  constructor() {
    this.tabs = ["Tab 1", "Task Manager", "Tab 3"];
    this.selectedMenu = this.tabs[0];
    makeObservable(this, {
      tabs: observable,
      selectedMenu: observable,
      setMenu: action,
      closeTab: action,
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
}

const menuStore = new MenuStore();
export default menuStore;
