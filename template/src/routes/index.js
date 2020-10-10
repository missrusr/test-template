import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import PageA from '../pages/PageA';

export const stackPageData = [
  {
    name: "Home",
    component: Home,
    options: {
      // headerShown: false,
      // header: () => null
    }
  },
  {
    name: "SignIn",
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null
    }
  },
  {
    name: "DevOptions",
    component: DevOptions,
    options: {
      headerShown: false,
      header: () => null
    }
  },
  {
    name: "PageA",
    component: PageA,
    options: {
      title: '页面A',
    }
  },
  {
    name: "MyHomeSetting",
    component: MyHomeSetting,
    options: {
      title: '设置',
    }
  },
]
