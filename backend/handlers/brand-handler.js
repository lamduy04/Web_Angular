const Brand =require("./../db/brand");

async function getBrands() {
    let brands= await Brand.find();
    return brands.map(x=>x.toObject());
}

async function getBrandById(id) {
    let brands= await Brand.findById(id);
    return brands.toObject();
}

async function addBrand(model) {
    let brand = new Brand({
        name: model.name,
    });
    await brand.save();
    return brand.toObject();
}

async function updateBrand(id, model) {
    await Brand.findByIdAndUpdate(id, model);
}

async function deleteBrand(id) {
    await Brand.findByIdAndDelete(id);
}

module.exports={getBrands,getBrandById,addBrand,updateBrand,deleteBrand}