const app = Vue.createApp({
    data() {
        return {
            //nav bar
            myScreenWidth: "",
            isNavExpanded: true,
            OpenLogoutModal: false,

            //search
            isNewSearch: false,
            pillState: true,
            // searchFilterMenu: false,

            //Filter pills status
            filterPerformanceIndicators: false,
            filterInsights: false,
            filterTasks: false,
            filterMessages: false,
            filterPeople: false,
            filterTime: false,
            filterSpecificPerson: false,
            testinglinks: false,
            timeFilterLength: "",
            specificPersonName: "",
            //filter menus
            searchMenuIsOpen: false,
            selectIntroMenu: true,
            selectFilterPeople: false,
            selectFilterDate: false,
            selectFilterItemType: false,


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

        // uncomment this in the home page
        // const picker = new Litepicker({ 
        //     element: document.getElementById('picker'),
        //     singleMode: true,
        //     format: 'MMMM D, YYYY',
        //       firstDay: 0
        // });

        // uncomment this in the searc page
          const picker = new Litepicker({ 
            element: document.getElementById('picker'),
            singleMode: false,
            format: 'MMMM D, YYYY',
              firstDay: 0
        });

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
        resetPills() {
            this.filterPerformanceIndicators = false
            this.filterInsights = false
            this.filterTasks = false
            this.filterMessages = false
            this.filterPeople = false
            this.filterTime = false
            this.filterSpecificPerson = false
            this.timeFilterLength = ""
            this.specificPersonName = ""
            
        },
        searchFilterMenuButton() {
            if (this.searchMenuIsOpen == true) {
                this.searchMenuIsOpen = false
                this.resetSearchMenu()

            } else if (this.searchMenuIsOpen == false){
                this.searchMenuIsOpen = true
            }
        },
        showAllPills() {
            this.filterPerformanceIndicators = true
            this.filterInsights = true
            this.filterTasks = true
            this.filterMessages = true
            this.filterPeople = true
            this.filterTime = true
            // this.filterSpecificPerson = true
            // this.selectFilterDate = true
            this.timeFilterLength = ""
            this.specificPersonName = ""
        },
        resetSearchMenu() {
            this.selectIntroMenu = true
            this.selectFilterPeople = false
            this.selectFilterDate = false
            this.selectFilterItemType = false
            console.log('resetSearchMenu')
        },
        methodtest() {
            console.log("testing meghods")
            this.testinglinks = true
            window.location.href =  '/search-page.html'
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

        handleClick() {
            console.log(this.$refs.pagetitle)
            this.$refs.searchbar.focus()
        }
    }
})
app.mount('#app')


// { pion: filterPerformanceIndicators, 'ion': filterInsights, 'ton': filterTasks, 'mon': filterMessages, 'pon': filterPeople, 'tmon': filterTime}


// Add a class for a specific person name
