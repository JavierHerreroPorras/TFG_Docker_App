<template>
<div>
  <calendar :adultos=2 />
</div>
</template>

<script>
import Calendar from './Calendar.vue'
const $ = require('jquery')
window.$ = $

export default {
    name: 'RouteHotels',
    components: {
        Calendar
    },
    data() {
      return {
        cccc: null,
      }

    },

    methods: {

    },
    mounted() {

      // $('#dropdownCalendarButton').on('hide.bs.dropdown', function (e) {
      //     var target = $(e.target);
      //     if(target.hasClass("keepopen") || target.parents(".keepopen").length){
      //         return false; // returning false should stop the dropdown from hiding.
      //     }else{
      //         return true;
      //     }
      // });
      // $('#dropdownCalendarButton').on('click', function (event) {
      //   $('#dropdownCalendar').toggleClass("d-block");
      // });

      // $('dropdown-menu').on('click', function (e) {
      //     if (!$('li.dropdown.mega-dropdown').is(e.target) && $('li.dropdown.mega-dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
      //         $('li.dropdown.mega-dropdown').removeClass('open');
      //     }
      // });
    },
}
</script>

<style>

</style>