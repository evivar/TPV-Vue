"use strict";

function mapUserToDto(user){
    return {
        uuid: user.uuid,
        username: user.username,
        active: user.active
    }
};

function mapCategoryToDto(category){
    return {
        id: category.id,
        name: category.name,
        image: category.image,
        ChildrenCategories: category.ChildrenCategories
    }
};

function mapProductToDto(product){
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        categoryId: product.categoryId
    }
}

module.exports = {
    mapUserToDto,
    mapCategoryToDto,
    mapProductToDto
}