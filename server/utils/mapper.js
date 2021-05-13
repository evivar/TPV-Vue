"use strict";

const moment = require('moment');

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
        uuid: category.uuid,
        name: category.name,
        image: category.image,
        parentCategory: category.CategoryId,
        ChildrenCategories: category.ChildrenCategories
    }
};

function mapProductToDto(product){
    return {
        id: product.id,
        uuidº: product.uuid,
        name: product.name,
        price: product.price,
        image: product.image,
        categoryId: product.categoryId
    }
};

function mapTableToDto(table){
    return {
        id: table.id,
        uuid: table.uuid,
        name: table.name,
        status: table.status
    }
};

function mapInvoiceToDto(invoice){
    return {
        id: invoice.id,
        uuid: invoice.uuid,
        table: invoice.tableId,
        status: invoice.status,
        date: moment(invoice.updatedAt).format('DD/MM/YYYY - HH:mm'),
        lines: (invoice.Lines) ? invoice.Lines.map((line) => mapLineToDto(line)) : []
    }
};

function mapLineToDto(line){
    return {
        id: line.id,
        uuid: line.uuid,
        quantity: line.quantity,
        product: line.product,
        cost: line.cost,
        price: line.cost * line.quantity,
        totalCost: (line.cost * line.quantity) * (1 - (line.discount / 100)),
        discount: line.discount,
        invoiceId: line.invoiceId
    }
};

module.exports = {
    mapUserToDto,
    mapCategoryToDto,
    mapProductToDto,
    mapTableToDto,
    mapInvoiceToDto,
    mapLineToDto
}