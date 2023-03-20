export class ProductPage {

    constructor() {
        this.closeModal = '#closeModal'
        this.goShoppingCartButton = '#goShoppingCart'
    };

    clickAddtoCart(producto) {
        cy.get(`[value="${producto}"]`).click();
        cy.get(this.closeModal).click();
    }
    clickGoShoppingCart() {
        cy.get(this.goShoppingCartButton).click();
    }

    //

    clickAddtoCart2(producto2) {
        cy.get(`[value="${producto2}"]`).click();
        cy.get(this.closeModal).click();
    }
    clickGoShoppingCart2() {
        cy.get(this.goShoppingCartButton).click();

};
};