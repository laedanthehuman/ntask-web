exports.render = () => {
    return `<form>
    <div class="list">
        <label class="item item-input item-stacked-label">
            <span class="input-label">Email</span>
            <input type="text" data-email>
        </label>
        <label class="item item-input item-stacked-label">
            <span class="input-label" data-password>Senha</span>
            <input type="password">
        </label>
        <div class="padding">
            <button class="button button-positive button-block">
                <i class="ion-home">Entrar</i>
            </button>
        </div>
    </div>
</form>
<div class="padding">
    <button class="button button-block" data-signup>
        <i class="ion-person-add"></i>Cadastrar
    </button>
</div>  
    `
}