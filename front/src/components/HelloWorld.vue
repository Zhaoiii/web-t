<template>
  <a-table
    :columns="columns"
    :dataSource="data"
  >
    <template #name="{ text }">{{ text.first }} {{ text.last }}</template>
    <template #action="{ record }">
      <button @click="del(record.name)">删除</button>
    </template>
  </a-table>
  <span>name</span>
  <a-input class="w-200" v-model:value="name"></a-input>
  <span>gender</span>
  <a-input class="w-200"  v-model:value='gender'></a-input>
  <span>email</span>
  <a-input class="w-200" v-model:value='email'></a-input>
  <button @click="addData">增加</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Table, Input } from 'ant-design-vue'
import axios from 'axios'

export default defineComponent({
  components: {
    aTable: Table,
    aInput: Input
  },
  setup () {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        width: '20%'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        width: '20%'
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Action',
        key: 'action',
        slots: { customRender: 'action' }
      }
    ]
    const data = ref([])
    const name = ref()
    const gender = ref()
    const email = ref()
    const getData = () => {
      axios.get('http://localhost:3000/').then((res: any) => { console.log(res.data); data.value = res.data })
    }
    const addData = () => {
      const obj = {
        name: name.value,
        gender: gender.value,
        email: email.value
      }
      axios.post('http://localhost:3000/', obj).then(() => getData())
    }

    const del = (name: string) => {
      axios.delete(`http://localhost:3000/${name}`).then(() => getData())
    }

    getData()
    return {
      columns,
      data,
      name,
      gender,
      email,
      addData,
      del
    }
  }
})
</script>

<style>
.w-200{
  width: 200px;
}
</style>
