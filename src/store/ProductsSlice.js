import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  items: [
    {
      id: 1,
      title: "2020 台味設計展",
      description:
        "一年一度的台味設計展由經濟部工業局舉辦、台灣創意設計中心執行，每年，針對在地文化、及產業發展特色，運用設計思考全是新時代的意涵，並以展覽呈現在地設計。",
      price: 350,
      startDate: "01",
      startMonth: "JUN",
      endDate: "31",
      endMonth: "OCT",
      picUrl:
        "https://images.unsplash.com/photo-1545178803-4056771d60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      title: "No.22線上設計展",
      description:
        "這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。",
      price: 350,
      startDate: "01",
      startMonth: "JUN",
      endDate: "31",
      endMonth: "OCT",
      picUrl:
        "https://images.unsplash.com/photo-1545987796-b199d6abb1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      title: "高雄設計展",
      description:
        "設計大高雄究竟是怎麼一回事？在這「設計」詞彙有點氾濫的年代，或許我們也搞不清楚究竟誰被誰設計了，設計生活？還是被生活設計？而當高雄這座城市建設硬體己相當程度完備時，文化軟實力又該如何输出？",
      price: 350,
      startDate: "01",
      startMonth: "JUN",
      endDate: "31",
      endMonth: "OCT",
      picUrl:
        "https://images.unsplash.com/photo-1596649300028-340ad0ec6146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ],
};

const productsSlice = createSlice({
  name: "AuthUserSlices(NameforBrowserInspect)",
  initialState: initialProductsState,
  reducers: {
    /*not used for now*/
    addItemToProducts(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          startDate: newItem.startDate,
          startMon: newItem.startMon,
          endDate: newItem.endDate,
          endMon: newItem.endMonth,
          picUrl: newItem.picUrl,
        });
      } else {
        console.log(`Item with id=${newItem.id}  alredy exists in products.`);
      }
    },
    /*not used for now*/
    removeItemFromProducts(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) {
        console.log(`Item with id=${id} does not exists in products.`);
      } else {
        state.items = state.items.filter((item) => item.id !== id);
        console.log(`Item with id=${id} has been removed from products.`);
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
