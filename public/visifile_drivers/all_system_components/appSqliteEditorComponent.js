function component( args ) {
/*
base_component_id("sqlite_app_editor_component_v2")
component_type("SYSTEM")
load_once_from_file(true)
*/

    Yazz.component( {
        data:       function () {
            return {
                text:                   args.text,
                read_only:              false,
                errors:                 null,
                sqlText:                "{}",
                editor:                 null,
                selectedTab:            "home",
                list_of_tables:         null

                // text pane
            }
        },
        template:   `<div style='background-color:white; ' >
                      <div style='box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color: lightgray; padding: 5px;padding-left: 15px;border: 4px solid lightgray;' >
                          <slot style='box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);display: inline-block;' v-if='text' :text2="text">
                          </slot>
                      </div>

                      <div style='border-radius: 5px;margin-left:15px;margin-top:15px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);border: 4px solid lightgray; '>
                          <div    style='font-size:14px;font-weight:bold;border-radius: 0px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-image: linear-gradient(to right,  #000099, lightblue); color: white; border: 0px solid lightgray; padding:4px; margin:0;padding-left:14px;'>

                               App Sqlite Database Editor
                          </div>

                        
                        
                        
                        
                        
                        
                        

                        <!--  MAIN TAB MENU ---------------------------------------------------------
                        |    ---------------
                        |
                        |  Details of the main tab menu
                        |
                        --------------------------------------------------------------------- -->
                        <div class="container" style="margin-top: 40px;">
                          <ul class="nav nav-pills">

                            <li class="nav-item"   style="width: 16%;" v-on:click='switchTab({tabName: "home"})'>
                              <a v-bind:class='"nav-link" + (selectedTab=="home"?" active":"")' href="#">Home</a>
                            </li>

                            <li class="nav-item"   style="width: 16%;" v-on:click='switchTab({tabName: "data"})'>
                              <a v-bind:class='"nav-link" + (selectedTab=="data"?" active":"")' href="#">Data</a>
                            </li>

                            <li class="nav-item"   style="width: 16%;" v-on:click='switchTab({tabName: "sql"})'>
                              <a v-bind:class='"nav-link" + (selectedTab=="sql"?" active":"")' href="#">Sql</a>
                            </li>

                            <li class="nav-item"   style="width: 16%;" v-on:click='switchTab({tabName: "text"})'>
                              <a v-bind:class='"nav-link" + (selectedTab=="text"?" active":"")' href="#">Text</a>
                            </li>

                            <li class="nav-item"   style="width: 16%;" v-on:click='switchTab({tabName: "old"})'>
                              <a v-bind:class='"nav-link" + (selectedTab=="old"?" active":"")' href="#">Old</a>
                            </li>
                          </ul>
                        </div>









                        <!--  HOME PANE ---------------------------------------------------------
                        |    --------------
                        |
                        |  
                        |
                        -------------------------------------------------------------------------- -->


                        <div  v-if='selectedTab=="home"'  style="padding:15px;">
        

                            <div style="width: 100%;border: 1px solid blue; height:60%;">
                              
                              
                                <div style="width: 20%;border: 1px solid blue;display: inline-block;height:100%;">
                                    List of tables
                                    <pre>{{list_of_tables}}</pre>
                                </div>
                              
                              
                                <div style="width: 78% ;border: 1px solid blue;display: inline-block;height:100%;vertical-align: top;">
                                    Data
                                </div>
                              
                              
                            </div>





                          <pre v-if='$DEBUGUI == "true"'  style="margin-top: 500px;border: solid 1px blue;padding: 5px;">
 -------------------------------------------------------------------- 
|                                                                    |
|                               DEBUG INFO                           |
|                                                                    |
 -------------------------------------------------------------------- 
</pre>
</div>
                        


                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        

                        
                        
                        
                        
                        
                        
                        




      <!--  TEXT PANE ---------------------------------------------------------
      |    --------------
      |
      |  
      |
      -------------------------------------------------------------------------- -->


    <div  v-if='selectedTab=="text"'  style="padding:15px;">
        
        <pre style="height:60%;">
{{sqlText}}
        </pre>
        



<pre v-if='$DEBUGUI == "true"'  style="margin-top: 500px;border: solid 1px blue;padding: 5px;">
 -------------------------------------------------------------------- 
|                                                                    |
|                               DEBUG INFO                           |
|                                                                    |
 -------------------------------------------------------------------- 
</pre>
</div>




















                        <!--  OLD PANE ---------------------------------------------------------
                        |    -----------
                        |
                        |  
                        |
                        -------------------------------------------------------------------------- -->


                        <div  v-if='selectedTab=="old"'  style="padding:15px;">


                          <div>
                            <a   v-bind:style="'margin-left:0px;margin-right: 0px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);;' "
                                 href="#"
                                 v-on:click='setTimeout(async function(){$root.$emit("message", {type:          "switch_editor",editorName: "sqlite_editor_component"})},100)'
                                 type="button" class="btn btn-light ">

                              <img
                                  src='/driver_icons/database.png'
                                  style='height:35px; margin-right: 0px;'
                                  class='img-fluid'>
                              </img>
                              Old DB Editor

                            </a>
                          </div>





                          <pre v-if='$DEBUGUI == "true"'  style="margin-top: 500px;border: solid 1px blue;padding: 5px;">
 -------------------------------------------------------------------- 
|                                                                    |
|                               DEBUG INFO                           |
|                                                                    |
 -------------------------------------------------------------------- 
</pre>
</div>























                      </div>
                    <hr></hr>
                 </div>`,
        mounted:    async function() {
            yz.mainVars.disableAutoSave     = true
        },
        methods:    {
            switchTab:                  async function  (  {  tabName  }  ) {
                //----------------------------------------------------------------------------------/
                //
                //                    /-------------------------------------/
                //                   /               switchTab             /
                //                  /-------------------------------------/
                //
                //----------------------------------------------------------------------------/
                // This switches to a new tab
                //------------------------------------------------------------------------/
                let mm = this
                mm.selectedTab = tabName

                // ------------------------------------------------
                //    init history pane
                // ------------------------------------------------
                if (tabName == "text") {
                    args.text                       = null
                }
            },
            createJsonModel:            async function  (  ) {
                //----------------------------------------------------------------------------------/
                //
                //                    /-------------------------------------/
                //                   /          createJsonModel            /
                //                  /-------------------------------------/
                //
                //----------------------------------------------------------------------------/
                // This creates a model of the database based on the database( ... ) tag
                // in the source code
                //------------------------------------------------------------------------/
                let mm = this
                let parsedDatabaseEntry = yz.helpers.getValueOfCodeString(mm.text, "database", ")//database")
                if (!isValidObject(parsedDatabaseEntry)) {
                    parsedDatabaseEntry =
                        {
                            db_type:
                                {
                                    name: "sqlite"
                                },
                            schema:
                                {
                                    tables:
                                        [
                                            {
                                                name:    "TABLE_1",
                                                cols:
                                                    [
                                                        {
                                                            id:   "id",
                                                            type: "TEXT"
                                                        }
                                                    ]
                                            }

                                        ]

                                }
                        }
                    await mm.convertJsonModelToSrcCode()
                    mm.schemaChanged()
                }
                mm.sqlText =  JSON.stringify(  parsedDatabaseEntry  ,  null  ,  2  )

                mm.list_of_tables = []
                if (parsedDatabaseEntry && parsedDatabaseEntry.schema && parsedDatabaseEntry.schema.tables) {
                    mm.list_of_tables = parsedDatabaseEntry.schema.tables
                }

                if (isValidObject(mm.text)) {
                    mm.read_only = yz.helpers.getValueOfCodeString(mm.text, "read_only")
                }
            },
            schemaChanged:              function  (  ) {
                this.$root.$emit(
                    'message', {
                        type: "pending"
                    })
            },
            convertJsonModelToSrcCode:  async function  (  ) {
                //----------------------------------------------------------------------------------/
                //
                //                    /-------------------------------------/
                //                   /   convertJsonModelToSrcCode         /
                //                  /-------------------------------------/
                //
                //----------------------------------------------------------------------------/
                // This takes the model of the database and amends the database( ... ) tag
                // in the source code
                //------------------------------------------------------------------------/
                let mm = this
                let srcDatabaseEntry = yz.helpers.getValueOfCodeString(mm.text, "database", ")//database")
                if (isValidObject(srcDatabaseEntry)) {
                    mm.text = yz.helpers.deleteCodeString(mm.text, "database", ")//database")
                }

                let newDatabaseEntry =
                    {
                        db_type:
                            {
                                name: "sqlite"
                            },
                        schema:
                            {
                                tables: mm.list_of_tables
                            }
                    }

                mm.sqlText =  JSON.stringify(  newDatabaseEntry  ,  null  ,  2  )
                mm.text = yz.helpers.insertCodeString(mm.text, "database", newDatabaseEntry , ")//database")
            },
            getText:                    async function  (  ) {
                //----------------------------------------------------------------------------------/
                //
                //                    /-------------------------------------/
                //                   /                 getText             /
                //                  /-------------------------------------/
                //
                //----------------------------------------------------------------------------/
                // gets the source code text, in this case changes to the
                // SQL definitions
                //------------------------------------------------------------------------/
                let mm = this
                if (!isValidObject(this.text)) {
                    return null
                }
                await mm.convertJsonModelToSrcCode()
debugger
                return this.text
            },
            setText:                    async function  (  textValue  ) {
                //----------------------------------------------------------------------------------/
                //
                //                    /-------------------------------------/
                //                   /                 setText             /
                //                  /-------------------------------------/
                //
                //----------------------------------------------------------------------------/
                // Sets the source code text, in this case the SQL definitions are what
                // is read by the database editor
                //------------------------------------------------------------------------/
                let mm = this
                this.text           =  textValue

                if (!isValidObject(this.text)) {
                    return
                }
                await mm.createJsonModel()
            }
        }
    })
}
