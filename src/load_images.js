function load_images(image_object, callback){
    var images = {},
        to_load = 0

    function on_load(){
        to_load -= 1
        if ( to_load == 0 && callback ) callback(images)
    }

    function load(key, val){
        var image = new Image();
        to_load += 1
        image.src = val
        image.onload = on_load
        images[key] = image
    }

    for ( var prop in image_object ){
        load(prop, image_object[prop])   
    }

}
