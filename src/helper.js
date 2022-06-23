
export const status = {
    loading: "loading",
    resolved: "resolved",
    rejected: "rejected",
}

export const categories = [
    "Design",
    "Branding",
    "Illustration",
    "Motion",
]

export const getCategory = (category) => {
    if(category) return category;
    else {
        let rand = parseInt(Math.random() * categories.length)
        return categories[rand]
    }
}

export const getFirstWord = (str) => {
    if (!str) return
    return str.split(",")[0].trim();
}