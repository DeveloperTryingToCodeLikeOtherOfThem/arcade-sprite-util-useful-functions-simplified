namespace customizeSpritesExtensionUtil {

    // Function to create a sprite
    /**
     * TODO: @create sprite by using image and kind
     */

    //% blockId=spriteextensionutilcreate block="create %img=screen_image_picker %kind=spritekind"
    //% blockSetVariable=mySprite weight=100
    export function create(img: Image, kind: number) {
        let sprite = new Sprite(img); // semicolon optional here but added for clarity
        sprites.create(img);          // semicolon optional but clearer
        game.currentScene().physicsEngine.addSprite(sprite); // moved above return to actually run
        return sprite;               // semicolon optional, usually added
    }

    // Function to get all sprites of a kind 
    //% blockId="spriteextensionutilallofkind" block="all of kind %kind"
    //% weight=99
    export function allOfKind(kind: number): Sprite[] {
        const spritesByKind = game.currentScene().spritesByKind; // semicolon recommended for safety
        if (!(kind >= 0) || !spritesByKind[kind]) return [];
        else return spritesByKind[kind].sprites(); // semicolon optional
    }

    // Simplified sprite wrapper class
    // TODI for advanced simplfied physics
    export class SimplfiedSpriteClass {
        sprite: Sprite;   // semicolon required in class property declarations
       
       _image: Image
       //% blockCombine block="image"
       //% blockSetVariable=mySprite
       get image() : Image{
           return this._image;
       }     // semicolon required

        _vx: Fx8;         // semicolon required
        _vy: Fx8;         // semicolon required

        // Getter for vx
        //% blockCombine block="vx"
        //% blockSetVariable=mySprite
        get vx() {
            return Fx.toFloat(this._vx); // semicolon optional but okay
        }

        // Setter for vx
        //% blockCombine block="vx"
        //% blockSetVariable=mySprite
        set vx(v: number) {
            this._vx = Fx8(v); // you need to assign here
        }

        // Setter for vy 
        //% blockCombine block="vy"
        //% blockSetVariable=mySprite
        get vy() {
            return Fx.toFloat(this._vy); // semicolon optional but okay
        }

        // Setter for vy 
        //% blockCombine block="vy"
        //% blockSetVariable=mySprite
        set vy(v: number) {
            this._vy = Fx8(v)
        }

        constructor() {
          this.sprite = new Sprite(img`.`)
          this._vx = Fx.zeroFx8
          this._vy = Fx.zeroFx8 
          this.sprite.vx = this.vx 
          this.sprite.vy = this.vy
          this._image = this.sprite.image 
        }
    }

}
