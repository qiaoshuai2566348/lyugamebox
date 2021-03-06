//Lpackage.js
var ByteBuffer = require("bytebuffer");
var Lpackage = cc.Class({
	// extends: cc.Component,
	name: "Lpackage",
	properties: {
		_head : "",
		_thead : "",
		_builder : null,
	},
	statics: {
		lpack : null,
		msg : null,
	},
	ctor : function() {
		var head = arguments[0];
		this._head = head;
		this._thead = "tutorial." + head;
		this._builder = cc.ll.pb.build(this._thead);
		this.lpack = new this._builder();
	},

	pack : function () {
		var ret = new ByteBuffer();
		ret.writeShort( this._head.length );
		ret.writeString( this._head );
		ret.append( this.lpack.encode() );
		ret.flip();
		return ret.toBuffer();
	},

	unpack : function(buffer) {
		if(buffer !== null){
			this.msg = this._builder.decode(buffer);
		}
		return this.msg;
	},
});
module.exports = Lpackage;