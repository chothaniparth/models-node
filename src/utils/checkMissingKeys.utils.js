exports.checkMissingKeys = (requiredFields, body) => {
    const missingKeys = []
    requiredFields.map((field)=>{
        if(!body[field] || body[field] === null || body[field] === undefined || body[field] === ''){
            missingKeys.push(field);
        }
    })
    return missingKeys
}