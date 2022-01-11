const app = Vue.createApp({
    data() {
        return {
            //nav bar
            myScreenWidth: "",
            isNavExpanded: true,
            OpenLogoutModal: false,

            //search
            isNewSearch: true,
            quickSearch: false,
            pillState: true,
            //Filter pills status
            filterPerformanceIndicators: true,
            filterInsights: true,
            filterTasks: true,
            filterMessages: true,
            filterLocation: false,
            filterItemName: false,
            filterSpecificPerson: false,
            filterAssigned: false,
            filterAccepted: false,
            filterCompleted: false,
            filterRerouted: false,
            //Pill content
            timeFilterLength: "",
            specificPersonName: "",
            //filter menus
            searchMenuIsOpen: false,
            selectIntroMenu: true,
            selectFilterDate: false,
            selectFilterItemType: false,
            selectFilterStatus: false,
            //Filter in modals
            selectFilterPeople: false,
            selectFilterItemName: false,
            selectFilterLocation: false,
            //selection of list item examples
            //filter Date
            filterTime7d: false,
            filterTime30d: false,
            filterTimeCstm: false,
            //Rule names
            listItemFilterItemNameA: false,
            listItemFilterItemNameB: false,
            listItemFilterItemNameC: false,
            listItemFilterItemNameD: false,
            listItemFilterItemNameE: false,
            //locations
            listItemFilterLocationA: false,
            listItemFilterLocationB: false,
            listItemFilterLocationC: false,
            listItemFilterLocationD: false,
            listItemFilterLocationE: false,
            //specific people
            listItemFilterIndividualPersonA: false,
            listItemFilterIndividualPersonB: false,
            listItemFilterIndividualPersonC: false,
            listItemFilterIndividualPersonD: false,
            listItemFilterIndividualPersonE: false,




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
            insightHighShrinkMarket: false,
            insightHighWasteMarket: false,
            insightHighWasteVending: false,
            insightLowSalesMarket: false,
            insightLowSalesVending: false,
            taskShortcut: false,


            //Performance indicators drop down toggle 
            dropDownInventoryByBranchItem1: false,
            dropDownSalesByRouteItem1: false,
            dropDownHighWasteRed: true,
            dropDownHighWasteYellow: false,
            dropDownHighWasteGreen: false,
            dropDownLowSalesRed: true,
            dropDownLowSalesYellow: false,
            dropDownLowSalesGreen: false,
            dropDownHighShrinkRed: true,
            dropDownHighShrinkYellow: false,
            dropDownHighShrinkGreen: false,


            
            //date selection toggles 
            pillToggleDueDate: false,
            radioToggleUrgent: false,

            //home page
            TaskOverviewExampleItem: false,
            TaskOverviewMyTasks: false,
            CategoriesWithNoTasksToggle: false,
            //task numbers
            Offline: 8,
            SalesPerformanceDecline: 4,
            CashCollectionDiscrepancy: 1,
            Waste: 1,
            categoriesWithNoTasks: 12,

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
                
        let speedomteScript = document.createElement('script')
        speedomteScript.setAttribute('src', 'https://www.mattprice.design/documents/speedometer.js')
        document.body.appendChild(speedomteScript)
        
        let chartSettupScript = document.createElement('script')
        chartSettupScript.setAttribute('src', 'https://www.mattprice.design/documents/chartssetup.js')
        document.body.appendChild(chartSettupScript)

        // Gets window size to check what navigation bar style use.
        this.resizeEventHandler();

        // uncomment this in the home page
        // const picker = new Litepicker({ 
        //     element: document.getElementById('picker'),
        //     singleMode: true,
        //     format: 'MMMM D, YYYY',
        //       firstDay: 0
        // });
        //Task overview script
        const r = document.querySelector(':root');
        // Task overview list
        let OverviewListHeight = (document.getElementById("TaskOverviewList").scrollHeight)
        // r.style.setProperty('--branchListContainerMaxHeight', OverviewListHeight + 'px');
        document.documentElement.style.setProperty('--branchListContainerMaxHeight', OverviewListHeight + 'px');

        // Inactive categories list
        let CategoryListHeight = (document.getElementById("TaskCategoryList").scrollHeight)
        // r.style.setProperty('--CategoryListMaxHeight', CategoryListHeight + 'px');
        document.documentElement.style.setProperty('--CategoryListMaxHeight', CategoryListHeight + 'px');




        // uncomment this in the search page
          const picker = new Litepicker({ 
            element: document.getElementById('picker'),
            singleMode: false,
            format: 'MMMM D, YYYY',
              firstDay: 0
        });

    },
    methods: {
        filterMyTasks() {
            if( this.TaskOverviewMyTasks == false) {
                this.TaskOverviewMyTasks = true
                this.Offline = 1
                this.SalesPerformanceDecline = 2
                this.CashCollectionDiscrepancy = 0
                this.Waste = 0
                this.categoriesWithNoTasks = 14 
                // update Height of the active tasks list
                CategoryListHeight = (document.getElementById("TaskCategoryList").scrollHeight)
                document.documentElement.style.setProperty('--CategoryListMaxHeight', CategoryListHeight + 'px');

            } else if(this.TaskOverviewMyTasks == true){
                this.TaskOverviewMyTasks = false
                this.Offline = 5
                this.SalesPerformanceDecline = 4
                this.CashCollectionDiscrepancy = 1
                this.Waste = 1
                this.categoriesWithNoTasks = 12 
                // update Height of the active tasks list
                CategoryListHeight = (document.getElementById("TaskCategoryList").scrollHeight)
                document.documentElement.style.setProperty('--branchListContainerMaxHeight', OverviewListHeight + 'px');
            

            }

        },
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
            this.filterSpecificPerson = false
            this.filterAccepted = false
            this.filterCompleted = false
            this.filterAssigned = false
            this.filterRerouted = false
            this.timeFilterLength = ""
            this.specificPersonName = ""

            //Rule item names
            this.listItemFilterItemNameA = false
            this.listItemFilterItemNameB = false
            this.listItemFilterItemNameC = false
            this.listItemFilterItemNameD = false
            this.listItemFilterItemNameE = false
            //locations
            this.listItemFilterLocationA = false
            this.listItemFilterLocationB = false
            this.listItemFilterLocationC = false
            this.listItemFilterLocationD = false
            this.listItemFilterLocationE = false
            //specific people
            this.listItemFilterIndividualPersonA = false
            this.listItemFilterIndividualPersonB = false
            this.listItemFilterIndividualPersonC = false
            this.listItemFilterIndividualPersonD = false
            this.listItemFilterIndividualPersonE = false
            //times / dates
            this.filterTime7d = false
            this.filterTime30d = false
            this.filterTimeCstm = false
                    },
        searchFilterMenuButton() {
            if (this.searchMenuIsOpen == true) {
                this.closeSearchMenu()

            } else if (this.searchMenuIsOpen == false){
                this.searchMenuIsOpen = true
            }
        },
        showAllPills() {
            this.filterPerformanceIndicators = true
            this.filterInsights = true
            this.filterTasks = true
            this.filterMessages = true
            // this.filterPeople = true
            // this.filterSpecificPerson = true
            // this.selectFilterDate = true
            this.timeFilterLength = ""
            this.specificPersonName = ""
        },
        closeSearchMenu() {
            this.searchMenuIsOpen = false
            this.selectIntroMenu = true
            this.selectFilterDate = false
            this.selectFilterItemType = false
            this.selectFilterStatus = false
        },
        methodtest() {
            console.log("testing meghods")
            this.testinglinks = true
            window.location.href =  '/search-page.html'
        },
        selectSuggestedFilter() {
            this.closeSearchMenu()
            this.resetPills()
            this.isNewSearch = false
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
            this.insightHighShrinkMarket = false
            this.insightHighWasteMarket = false
            this.insightHighWasteVending = false
            this.insightLowSalesMarket = false
            this.insightLowSalesVending = false
            this.taskShortcut = false

            //Closes expanded drop-down items
            this.dropDownInventoryByBranchItem1 = false
            this.dropDownSalesByRouteItem1 = false

            //search page filter selection modal content
            this.selectFilterPeople = false
            this.selectFilterItemName = false
            this.selectFilterLocation = false
        },

        handleClick() {
            console.log(this.$refs.pagetitle)
            this.$refs.searchbar.focus()
        }
    }
})
app.mount('#app')
