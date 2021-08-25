const app = Vue.createApp({
    data() {
        return {
            //nav bar
            myScreenWidth: "",
            isNavExpanded: true,
            OpenLogoutModal: false,

            //search
            isNewSearch: true,
            pillState: true,

            // modal base
            isModalOpen: false,

            //modal content selection
            insightContentContributions: false, 
            insightContentGrades: false, 
            insightContentInventoryByBranch: false, 
            insightContentSalesByRoute: false, 
            insightContentFiveWeekSalesTrend: false, 
            insightContentFirstDraft: false,
            insightContentTaskCreationFlow: false,


            //Performance indicators drop down toggle 
            dropDownInventoryByBranchItem1: false,
            dropDownSalesByRouteItem1: false,

            //date selection toggles 
            pillToggleDueDate: false,
            radioToggleUrgent: false,
        }
    },
    created() {
        // Gets window size to check what navigation bar style use.
        window.addEventListener("resize", this.resizeEventHandler);
    },
    destroyed() {
        // Gets window size to check what navigation bar style use.
        window.removeEventListener("resize", this.resizeEventHandler);
    },
    mounted() { 
        
        // Gets window size to check what navigation bar style use.
        this.resizeEventHandler();


        // //start of DATE PICKER JS
        // //FOR 'SINGLE' DATE PICKER ON ONE FORM/PAGE. REMOVE CODE BELOW IF NOT NEEDED
        // var picker = new Pikaday({ 
        //     field: document.getElementById('datepicker'),
        //     disableWeekends: true, // Disables option to select weekend days
        //     firstDay: 0, // First day of the week - 0 for Sunday & 1 for Monday
        //     minDate: new Date(), // Disables option to select days prior to current day
        //     //yearRange: [1968, new Date().getFullYear().toString()], //Here you can choose the earliest year option to the current date or change "new Date().getFullYear().toString()" to 2008 for example.  
        // });
        // //Sets Default Date to Current Date
        // picker.gotoToday()
        // //<!-- FOR 'MULTIPLE' DATE PICKERS ON ONE FORM/PAGE. REMOVE CODE BELOW IF NOT NEEDED! -->
        // $('.date-picker').each(function() {  // ".date-picker" is the class name you would set on each field that needs a date picker.
        //     $(this).data('pikaday', new Pikaday({ 
        //         field: $(this)[0],
        //         disableWeekends: false, // Disables option to select weekend days
        //         firstDay: 5, // First day of the week - 0 for Sunday & 1 for Monday
        //         // minDate: new Date(), // Disables option to select days prior to current day
        //         //yearRange: [1968, new Date().getFullYear().toString()], //Here you can choose the earliest year option to the current date or change "new Date().getFullYear().toString()" to 2008 for example.  
        //     }));
        // });
        // //Sets Default Date to Current Date
        // picker.gotoToday()
        // //end of DATE PICKER JS
    },
    methods: {
        // nav bar
        resizeEventHandler() {
            this.myScreenWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            if (this.myScreenWidth < 1300) {
                this.isNavExpanded = false
            } else if (this.myScreenWidth > 1300) {
                this.isNavExpanded = true
            };
        },
        closeNavVue() {
            this.isNavExpanded = false
        },
        closeLoggoutModal() {
            this.OpenLogoutModal = false
        },

        //search
        startSearch() {
            this.isNewSearch = false
        },
        newSearchToggle() {
            this.isNewSearch = !this.isNewSearch
        },
        pillToggle() {
            this.pillState = !this.pillState
        },


        //modal
        closeVueModal() {
            this.isModalOpen = false

            //Deselects all modal content
            this.insightContentContributions = false
            this.insightContentGrades = false
            this.insightContentInventoryByBranch = false
            this.insightContentSalesByRoute = false
            this.insightContentFiveWeekSalesTrend = false
            this.insightContentFirstDraft = false
            this.insightContentTaskCreationFlow = false

            //Closes expanded drop-down items
            this.dropDownInventoryByBranchItem1 = false
            this.dropDownSalesByRouteItem1 = false
        },
    }
})
app.mount('#app')


