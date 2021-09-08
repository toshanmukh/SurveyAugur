export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = '',
    ) {}
}

export const menuList = [

new MenuItem('User Profile','home/profile','UserProfile','person'),
new MenuItem('Active Surveys','home/activesurvey','Activesurvey','tungsten'),
new MenuItem('Logout','login','Logout','logout')


];



