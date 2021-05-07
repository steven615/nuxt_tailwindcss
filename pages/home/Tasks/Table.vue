<template>
  <div class="pr-3 pl-4 md:p-0">
    <vue-good-table
      :columns="columns"
      :rows="rows" >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field === 'checked'">
            <CheckBox
              :checked="props.formattedRow.checked"
              :id="props.row.id"
              @on-change="handleChange" />
          </span>
          <span v-else-if="props.column.field === 'title'">
            <span :class="[props.formattedRow.checked ? 'opacity-40 line-through' : '', 'text-black']">{{props.formattedRow.title}}</span>
          </span>
          <span v-else-if="props.column.field === 'createdAt'">
            {{getDateRange(props.formattedRow.createdAt)}}
          </span>
          <span v-else-if="props.column.field === 'attachments'" class="flex items-center h-6 justify-end">
            <img v-if="props.formattedRow.attachments > 0" :src="require(`~/assets/img/attachment.svg`)" />
          </span>
          <span v-else-if="props.column.field === 'bookmarked'">
            <Bookmark
              :bookmarked="props.formattedRow.bookmarked"
              :id="props.row.id"
              @on-change="handleChange" />
          </span>
          <span v-else>
            {{props.formattedRow[props.column.field]}}
          </span>
        </template>
    </vue-good-table>
  </div>
</template>

<script>
  import 'vue-good-table/dist/vue-good-table.css'
  import { VueGoodTable } from 'vue-good-table';

  // custom component
  import CheckBox from './CheckBox';

  export default {
    name: 'Table',
    components : { VueGoodTable, CheckBox },
    data () {
      return {
        // table data
        columns: [
          {
            label: 'Checked',
            field: 'checked',
            width: '10%',
          },
          {
            label: 'Title',
            field: 'title',
            width: '20%'
          },
          {
            label: 'Date',
            field: 'createdAt',
            width: '20%'
          },
          {
            label: 'Attachments',
            field: 'attachments',
            width: '5%',
          },
          {
            label: 'Bookmarked',
            field: 'bookmarked',
            width: '10%',
          },
        ],
        rows: [
          { id:1, title:"Send prototype to team", createdAt: '2021-04-03', checked: false, bookmarked: true, attachments: 1 },
          { id:2, title:"Review content with copywriter", createdAt: '2021-04-02', checked: false, bookmarked: false, attachments: 0 },
          { id:3, title:"Optimize hero images", createdAt: '2021-03-03', checked: false, bookmarked: false, attachments: 1 },
          { id:4, title:"Add loading screen after sign up", createdAt: '2021-03-03', checked: false, bookmarked: true, attachments: 0 },
          { id:5, title:"Get file structure ready for cms", createdAt: '2021-03-03', checked: true, bookmarked: false, attachments: 0 },
          { id:6, title:"Update style guide with new colors", createdAt: '2021-03-03', checked: true, bookmarked: false, attachments: 0 },
          { id:7, title:"Define grid for editor", createdAt: '2021-03-03', checked: true, bookmarked: false, attachments: 0 },
          { id:8, title:"Fix footer on mobile", createdAt: '2021-03-03', checked: true, bookmarked: false, attachments: 0 },
          { id:9, title:"Mobile navigation not working in ie", createdAt: '2021-03-03', checked: true, bookmarked: false, attachments: 0 },
        ],
      }
    },
    methods: {
      handleChange: function(props) {
        // Save status of checked and bookmarked
        var rows = this.rows;
        var index = rows.findIndex(function(item) {
          return item.id === props.id;
        });
        var key = 'checked';

        if ('bookmarked' in props) {
          key = 'bookmarked';
        }
        
        rows[index][key] = props[key];
      },
      /**
       * Get moment human data based on range from param to now
       * @param string dateStr e.x: 2021-04-04
       */
      getDateRange: function(dateStr) {
        var targetTimestamp = this.$moment(dateStr).format('x');
        var nowTimestamp = this.$moment().format('x');
        var range = this.$moment.duration(targetTimestamp - nowTimestamp, '').humanize(true);
        return range;
      }
    }
  }
</script>

<style>
table, th, td {
  border: none !important;
}
thead {
  display: none;
}
tr {
  border-bottom: 1px solid #ECECEE;
}
td {
  font-size: 16px;
  line-height: 24px;
}
.tasks td:first-child {
  min-width: 40px;
}
.tasks td:last-child {
  min-width: 48px;
  width: 48px;
}
.tasks td:nth-child(4) {
  min-width: 32px;
  padding-top: 16px;
}
.tasks .vgt-responsive {
  overflow: inherit;
}
.tasks .vgt-inner-wrap {
  box-shadow: none;
}
</style>