<template>
  <table
      :class="classes"
      @click="click"
  >
    <thead ref="thead">
      <tr>
        <slot name="head" />
      </tr>
    </thead>
    <tbody ref="tbody">
      <tr
          v-for="(item, index) in list"
          :key="index"
      >
        <slot name="item" :item="item" :index="index" />
      </tr>
    </tbody>
    <tfoot v-if="$slots.foot" ref="tfoot">
      <slot name="foot" />
    </tfoot>
  </table>
</template>

<script>
  export default {
    name: 'w-table',
    props: {
      fixed: Boolean,
      list: {
        type: Array,
        default: []
      },
      isPending: Boolean,
      orderBy: String,
      orderDir: String
    },
    methods: {
      click(e) {
        const { target } = e;

        if (target.tagName === 'TH' && target.dataset['orderBy']) {
          this.clickHeader(target.dataset['orderBy']);
        }
      },
      clickHeader(orderBy) {
        let orderDir;

        if (this.orderBy === orderBy) {
          orderDir = this.orderDir === 'asc' ? 'desc' : 'asc';
        } else {
          orderDir = 'asc';
        }

        this.change({
          orderBy,
          orderDir
        });
      },
      change(queryData) {
        if (!this.isPending) {
          this.$emit('change', queryData);
        }
      }

    },
    computed: {
      classes() {
        return {
          fixed: this.fixed
        };
      }
    }
  }
</script>

<style scoped>
  .fixed {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  .fixed tbody {
    height: 100%;
    overflow: auto;
  }

  .fixed tfoot {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .fixed thead,
  .fixed tbody,
  .fixed tfoot {
    display: block;
  }
</style>
