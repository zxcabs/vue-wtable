<template>
  <th>
    <slot />
    <span v-if="sortable" :class="classes">^</span>
  </th>
</template>

<script>
  export default {
    name: "w-th",
    props: {
      orderBy: String,
      orderDir: String
    },
    computed: {
      sortKey() {
        return this.$attrs['data-order-by'];
      },
      sortable() {
        return this.sortKey === this.orderBy;
      },
      isAsc() {
        return this.orderDir === 'asc';
      },
      classes() {
        return {
          desc: !this.isAsc
        };
      }
    }
  }
</script>

<style scoped>
  .desc {
    transform: rotate(180deg);
    display: inline-block;
  }
</style>
