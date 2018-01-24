<template>
  <div class="table-layout">
    <w-table
      class="table"
      fixed
      :list="list"
      :isPending="isPending"
      :orderBy="orderBy"
      :orderDir="orderDir"
      @change="tableChange"
    >
      <template slot="head">
        <w-th
            class="td-index"
            data-order-by="index"
            :order-by="orderBy"
            :order-dir="orderDir">#</w-th>
        <w-th
            class="td-date"
            data-order-by="date"
            :order-by="orderBy"
            :order-dir="orderDir">Date</w-th>
        <w-th
            class="td-name"
            data-order-by="name"
            :order-by="orderBy"
            :order-dir="orderDir">Name</w-th>
        <th class="td-action">actions</th>
      </template>
      <template slot="item" slot-scope="props">
        <td class="td-index">{{ props.item.index + 1 }}</td>
        <td class="td-date">{{ props.item.date.toDateString() }}</td>
        <td class="td-name">{{ props.item.name }}</td>
        <td class="td-action">
          <button @click="click(props.item)">click</button>
        </td>
      </template>
      <template slot="foot">
        <tr>
          <w-pagination
              :total="total"
              :limit="limit"
              :offset="offset"
              @change="paginationChange"
          />
        </tr>
      </template>
    </w-table>
  </div>
</template>

<script>
  import { action } from '@storybook/addon-actions';

  import { WTable, WTh, WPagination } from '../../src/index';

  const DATA  = (new Array(100)).fill(0).map((v, i) => ({
    index: i,
    date: new Date((new Date()) - (Math.random() * i * 50000000 - Math.random() * 100000000)),
    name: `name ${i + 10}`
  }));

  const loadMock = (query = {}) => new Promise((res) => {
    const { offset, limit, orderBy, orderDir } = query;
    const isAsc = orderDir === 'asc';

    setTimeout(() => {
      const list = DATA.sort((a, b) => {
        const av = a[orderBy];
        const bv = b[orderBy];

        if (av >= bv) {
          return isAsc ? 1 : -1;
        } else {
          return isAsc ? -1 : 1;
        }
      }).slice(offset, offset + limit).map((i) => Object.assign({}, i));

      res({
        list,
        total: DATA.length
      });
    }, 1000);
  });

  export default {
    components: {
      WPagination,
      WTh,
      WTable
    },
    name: 'simple',
    mounted() {
      this.query({
        limit: this.limit,
        offset: this.offset,
        orderBy: this.orderBy,
        orderDir: this.orderDir
      });
    },
    methods: {
      click: action('click'),
      tableChange(...args) {
        action('tableChange')(...args);
        const [query] = args;

        this.offset = 0;
        this.query(Object.assign({}, query, {
          offset: this.offset
        }));
      },
      paginationChange(...args) {
        action('paginationChange')(...args);
        const [pagination] = args;

        this.query(Object.assign({}, pagination, {
          orderBy: this.orderBy,
          orderDir: this.orderDir
        }));
      },
      query(query) {

        this.isPending = true;

        this.offset = query.offset;
        this.orderBy = query.orderBy;
        this.orderDir = query.orderDir;

        loadMock(Object.assign({}, query, {
          limit: this.limit
        })).then((response) => {
          const { list, total } = response;

          this.isPending = false;
          this.total = total;

          this.list = list;
        });
      }
    },
    data() {
      return {
        offset: 0,
        limit: 20,
        isPending: false,
        total: 0,
        orderBy: 'date',
        orderDir: 'asc',
        list: []
      };
    }
  }
</script>

<style scoped>
  .table-layout {
    height: 50vh;
  }

  .table {
    border: 1px solid black;
    border-collapse: collapse;
  }

  .table.fixed >>>
  thead,
  tfoot {
    height: 28px;
  }

  .table.fixed >>>
  tbody {
    height: calc(100% - 28px * 2);
  }

  .td-index {
    width: 10vw;
  }

  .td-name {
    width: 100vw;
  }

  .td-date,
  .td-action {
    width: 50vw;
  }

  .td-index,
  .td-name,
  .td-date,
  .td-action {
    border: 1px solid black;
  }

  >>> .w-pagination {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  >>> .w-pagination .w-page-item {
    padding: 5px;
  }

  >>> .w-pagination .w-page-item.is-active {
    background: cadetblue;
  }
</style>
