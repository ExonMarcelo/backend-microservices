const nanoid = require("nanoid");
const TABLE = "users";

module.exports = function(injectedStore){
    let store = injectedStore;

    if(!injectedStore){
        store = require("../../../store/dummy");
    }

    function list(){
        return store.list(TABLE);
    }

    function get(id){
        return store.get(TABLE, parseInt(id));
    }

    function upsert(body){
        const user = {
            name: body.name
        }
        
        if(body.id){
            user.id = body.id;
        }else{
            user.id = nanoid();
        }

        return store.upsert(TABLE, user);
    }

    return {
        list,
        get,
        upsert
    }
}