const renderLiFn = (h, className) => (item) => (
    <span class={ className }>{ item.label }</span>
  );

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
    },
    liClass: {
      type: String,
      default: 'w-page-item'
    },
    itemClass: {
      type: String,
      default: 'w-page-link'
    }
  },
  methods: {
    click(item) {
      const { page } = item;

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
  },
  render(h) {
    const scoped = this.$scopedSlots.item;
    const itemRender = scoped ? scoped : renderLiFn(h, this.itemClass);

    return (
      <ul>
        { this.pages.map(item =>
          <li
            onClick={ () => this.click(item) }
            key={ item.label }
            data-page={ item.page }
            class={{ [this.liClass]: true, active: item.isActive }}
          >{ itemRender(item) }</li>) }
      </ul>
    );
  }
}
