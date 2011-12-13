## Load images

Does what it says on the tin; preloads images with a nice, clean API

## API

### Signature

The signature of the function is:

     function load_images(image_object, callback_function)

Where it can be used like:

    var image_object = {
        ninja: "images/ninja.png", 
        person: "images/person.png"
    }

    function callback_function(images){
        console.log(images)
    }

    load_images(image_object, callback_function)

The callback is called as soon as all images are loaded, and the above callback would result in this in the console:

    { ninja: HTMLImageElement, person: HTMLImageElement }

## Tests

[Feel free to run the (one) unit test](hughfdjackson.github.com/load_images/src-test/SpecRunner.html)
