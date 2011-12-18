describe("load_images", function(){

    it("should load images from object and *returns* an object in callback", function(){
        var to_load = {
                'person': '../images/person.png', 
                'ninja': '../images/ninja.png'
            },
            images = {},
            flag = false

        load_images(to_load, function(i){
            images = i
            flag = true
        })
    
        waitsFor(function(){
            return flag           
        }, "images to load", 5000)
        
        runs(function(){
            expect(images.person.complete).toEqual(true)
            expect(images.ninja.complete).toEqual(true)
            expect(images instanceof Array).toEqual(false)
        })
        
    })

    it("should load images from array and *returns* an array in callback", function(){
        var to_load = ["../images/person.png", "../images/ninja.png"],
            images = []

        load_images(to_load, function(i){
            images = i
        })

        waitsFor(function(){
            return images[0] && images[1]      
        }, "images to load", 5000)
        
        runs(function(){
            expect(images[0].complete).toEqual(true)
            expect(images[1].complete).toEqual(true)
            expect(images instanceof Array).toEqual(true)
        })
        
    })

})
