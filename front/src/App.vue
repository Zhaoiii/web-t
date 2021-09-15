<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>

<script lang='ts'>
import { Table } from 'ant-design-vue'
import { defineComponent } from 'vue';

export default defineComponent {
  name: 'App',
  components: {
    aTable: Table
  },
  setup(){
    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
    return {
      dataSource,
        columns
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
