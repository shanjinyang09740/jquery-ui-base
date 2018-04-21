$(function(){
    //日历组件
    $('#date').datepicker();

    //滑块组件
    $('#mySliderDiv').slider({
        orientation : 'vertical',
        min : 0,
        max : 150,
        value : 50
    });

    //进度条
     // $('#elem').progressbar({"value": 50});
    $('#elem')
        .progressbar({
            change : function(){
                alert("The value has changed!");
            }
        })
        .progressbar({'value' : 30})
        .progressbar('option', {
            'value' : 100,
            'disabled' : false
        })
        .progressbar('option', {
            'value' : 50,
            'disabled' : true
        })

        /*.progressbar('option', {
            value : 80,
            disabled : false
        })
        .progressbar('disable')
        .progressbar('enable')
        .progressbar('destroy')*/
        /*.progressbar('widget')*///无效




});