<template>
    
    <div>
        <div class="vue-tempalte">
            <form>
                <h3>Add Cron Job</h3>
                <div class="form-group">					
                    <label>Cron Expression</label>
                    <input type="text" class="form-control form-control-lg" value="* * * * * * *" placeholder="* * * * * ? *" style="font-size:large; width:320px; padding:5px; margin:5 5px;"/>
                                            
                </div>
                <div class="form-group">
                <label>Upload a shell script</label>
                <input type="file" id="myFile" name="filename">
                </div>
                <div class="form-group">
                    <label>command to execute</label>
                    <input type="text" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Add to Cron list</button>

            </form>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            
            return {}

        }
    }
</script>