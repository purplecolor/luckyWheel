<template>
  <div class="home">
    <LuckyGrid
      class="luckyGrid"
      ref="myLucky"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :defaultConfig="defaultConfig"
      :defaultStyle="defaultStyle"
      :activeStyle="activeStyle"
      @start="startCallback"
      @end="endCallback"
    />
    <div class="button" @click="$router.push('/other')">去问题页面</div>
    <p>复现问题请点击按钮前往问题页面</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      blocks: [],
      dataPrize: [],
      prizes: [],
      buttons: [
        {
          x: 1,
          y: 1,
          background: "#F74067",
          fonts: [
            {
              text: "立即抽奖",
              fontColor: "#fff",
              lineHeight: "45px",
              fontSize: "26px",
              lengthLimit: "52px",
              lineHeight: "36px",
              fontWeight: 700,
            },
          ],
        },
      ],
      defaultStyle: {
        background: "pink",
        borderRadius: "10px",
      },
      defaultConfig: {
        gutter: "0.29rem",
      },
      activeStyle: {
        background: "black",
        fontColor: "#fff",
        fontSize: "12px",
      },
      goodsInfoList: [
        {
          prizeName: "西瓜",
        },
        {
          prizeName: "柚子",
        },
        {
          prizeName: "香蕉",
        },
        {
          prizeName: "苹果",
        },
        {
          prizeName: "梨",
        },
        {
          prizeName: "葡萄",
        },
        {
          prizeName: "柠檬",
        },
        {
          prizeName: "橘子",
        },
        {
          prizeName: "榴莲",
        },
      ],
    };
  },
  created() {
    this.initGrid();
  },
  methods: {
    initGrid() {
      //初始化排版九宫格数据
      let prizes = [];
      let sort = [0, 1, 2, 5, 8, 7, 6, 3];
      let goodsInfoList = JSON.parse(JSON.stringify(this.goodsInfoList));
      sort.forEach((a) => {
        let x = a % 3;
        let item = goodsInfoList[a];
        if (item) {
          prizes.push({
            x: x,
            y: (a - x) / 3,
            fonts: [
              {
                text: item.prizeName,
                fontColor: "#E30000",
                fontSize: "12px",
                fontWeight: 500,
                top: "40px",
                lineClamp: 1,
              },
            ],
          });
        } else {
          prizes.push({
            x: x,
            y: (a - x) / 3,
          });
        }
      });
      this.prizes = prizes;
    },
    startCallback() {
      this.$refs.myLucky.play();
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = 1;
        console.log(index);
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index);
      }, 3000);
    },
    endCallback() {},
    
  },
};
</script>

<style lang="scss" scoped>
.luckyGrid {
  width: 584px;
  height: 584px;
  margin: 0 auto;
}
.button{
  width:250px;
  text-align: center;
  font-size: 12px;
  line-height: 60px;
  color: white;
  background:#cecece;
}
</style>
