exports.render = () =>{
    return `<form >
    <div class="list">
        <label class="item item-input item-stacked-label">
            <span class="input-text">Nome</span>
            <input type="text" data-name>
        </label>
        <label class="item item-input item-stacked-label">
            <span class="input-text">Email</span>
            <input type="text" data-email>
        </label>
        <label class="item item-input item-stacked-label">
            <span class="input-text">Senha</span>
            <input type="password" data-password>
        </label>
    </div>
    <div class="padding">
    <button class="button button-positive button-block">
        <i class="ion-thumbsup"></i>Cadastrar
    </button>
</div>
</form>  


    `   
}