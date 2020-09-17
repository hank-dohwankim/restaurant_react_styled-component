export const MenuList = [
  {
    id: 1,
    title: 'Food Title',
    img: 'img/menu/menu-1',
    section: 'Category Name',
  },
  {
    id: 2,
    title: 'Food Title',
    img: 'img/menu/menu-2',
    section: 'Category Name',
  },
  {
    id: 3,
    title: 'Food Title',
    img: 'img/menu/menu-3',
    section: 'Category Name',
  },
  {
    id: 4,
    title: 'Food Title',
    img: 'img/menu/menu-4',
    section: 'Category Name',
  },
  {
    id: 5,
    title: 'Food Title',
    img: 'img/menu/menu-5',
    section: 'Category Name',
  },
  {
    id: 6,
    title: 'Food Title',
    img: 'img/menu/menu-6',
    section: 'Category Name',
  },
  {
    id: 7,
    title: 'Food Title',
    img: 'img/menu/menu-7',
    section: 'Category Name',
  },
  {
    id: 8,
    title: 'Food Title',
    img: 'img/menu/menu-8',
    section: 'Category Name',
  },
  {
    id: 9,
    title: 'Food Title',
    img: 'img/menu/menu-9',
    section: 'Category Name',
  },
];

export const menus = MenuList.reduce((res, menu) => {
  if (!res[menu.section]) {
    res[menu.section] = [];
  }
  res[menu.section].push(menu);
  return res;
}, {});
