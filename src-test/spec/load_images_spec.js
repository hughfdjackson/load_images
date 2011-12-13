describe("load_images", function(){

    it("should load images (duh)", function(){
        var to_load = {
                'person': '../images/person.png', 
                'ninja': '../images/ninja.png'
            },
            images = {}

        load_images(to_load, function(i){
            images = i
        })

        waitsFor(function(){
            return images.person && images.ninja            
        }, "images to load", 5000)
        
        runs(function(){
            expect(images.person.tagName.toLowerCase()).toEqual('img')
            expect(images.ninja.tagName.toLowerCase()).toEqual('img')
        })
        
    })

})
