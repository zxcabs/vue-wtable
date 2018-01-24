<template>
  <nav>
    <ul class="w-pagination">
      <li
          class="w-page-item"
          v-for="page in pages"
          :class="{ 'is-active' : page.isActive }"
          @click="() => click(page.page)"
      >{{ page.label }}</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "w-pagination",
    props: {
      offset: {
        type: Number,
        default: 0
      },
      limit: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 1
      }
    },
    methods: {
      click(page) {
        this.$emit('change', {
          offset: page * this.limit
        });
      }
    },
    computed: {
      totalPages() {
        return Math.floor(this.total / this.limit);
      },
      page() {
        return Math.floor(this.offset / this.limit);
      },
      pages() {
        const pages = [];

        if (this.page > 0) {
          pages.push({
            label: '<',
            page: this.page - 1
          });
        }

        for (let p = 0; p < this.totalPages; p += 1) {
          pages.push({
            label: p + 1,
            page: p,
            isActive: p === this.page
          });
        }

        if (this.page < this.totalPages - 1) {
          pages.push({
            label: '>',
            page: this.page + 1
          });
        }
        return pages;
      }
    }
  }
</script>
