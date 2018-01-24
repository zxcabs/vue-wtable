<template>
  <div>
    <div>
      <label>
        total: <input type="number" v-model.number="total"/>
      </label>
      <label>
        limit: <input type="number" v-model.number="limit"/>
      </label>
      <div>
        offset: {{offset}}
      </div>
    </div>

    <div>
      <h1>Template</h1>
      <w-pagination
          class="pagination"
          liClass="page-item"
          :total="total"
          :limit="limit"
          :offset="offset"
          @change="change"
      >
        <a slot="item" slot-scope="item" class="page-link" href="javascript:void(0)">d {{ item.label }}</a>
      </w-pagination>
    </div>

    <div>
      <h1>Default template:</h1>
      <w-pagination
          class="pagination"
          liClass="page-item"
          itemClass="page-link"
          :total="total"
          :limit="limit"
          :offset="offset"
          @change="change"
      />
    </div>
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.css"
  import { WPagination } from "../../src";

  export default {
    name: "pagination",
    components: { WPagination },
    data() {
      return {
        total: 100,
        limit: 20,
        offset: 0
      };
    },
    methods: {
      change({ offset }) {
        this.offset = offset;
      }
    }
  }
</script>

<style scoped>

</style>
