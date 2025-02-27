const createPlant = (name,daysToMaturity, categories) => ({ name, daysToMaturity, categories });
const createCategory = (name) => ({ name });

    export const plants = [
        createPlant("Basil", 68, [
            createCategory("Herbs & Kitchen Staples"), 
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
         ]),
        createPlant("Breen", 45, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Bronze Arrow Lettuce", 55, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover")
        ]),
        createPlant("Bull's Blood", 35, [
            createCategory("Beautiful Blooms"),
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Bunching Onions"), 50, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Butterhead", 55, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials"),
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist")
        ]),
        createPlant("Campanula", 90, [
            createCategory("Budding Florist")
        ]),
        createPlant("Celery", 150, [
            createCategory("Chef Faves")
        ]),
        createPlant("Celosia", 90, [
            createCategory("Beautiful Blooms"),
            createCategory("Budding Florist")
        ]),
        createPlant("Cilantro", 28, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Collard Greens", 60, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Chef Faves")
        ]),
        createPlant("Dill", 45, [
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Green Bok Choy", 20, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Chef Faves")
        ]),
        createPlant("Green Mustard", 31, [
            createCategory("Salad Lover")
        ]),
        createPlant("Green Salanova", 55, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Green Tatsoi", 21, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Kale", 65, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Kale Lacinato", 65, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Kohlrabi", 45, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Lavender", 105, [
            createCategory("Budding Florist")
        ]),
        createPlant("Lemon Balm", 70, [
            createCategory("Beautiful Blooms"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Lemon Basil", 70, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Marigold", 75, [
            createCategory("Budding Florist")
        ]),
        createPlant("Mini Cauliflower", 55, [
            createCategory("Chef Faves")
        ]),
        createPlant("Perpetual Spinach", 40, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials", 40),
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Pink Celery", 75, [
            createCategory("Beautiful Blooms"),
            createCategory("Budding Florist")

        ]),
        createPlant("Purple Basil", 65, [
            createCategory("Beautiful Blooms"),
            createCategory("Budding Florist")

        ]),
        createPlant("Purple Kohlrabi", 45, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Purple Snapdragon", 97, [
            createCategory("Budding Florist")
        ]),
        createPlant("Red Mustard", 35, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover")
        ]),
        createPlant("Red Salad Bowl", 40, [
            createCategory("Salad Lover")
        ]),
        createPlant("Red Sorrel", 60, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Red Tatsoi", 50, [
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Romaine", 60, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover")
        ]),
        createPlant("Salanova", 50, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Snapdragon", 100, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Stock Flower", 75, [
            createCategory("Beautiful Blooms"),
            createCategory("Budding Florist")
        ]),
        createPlant("Sunflower", 65, [
            createCategory("Beautiful Blooms"),
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Sweet Thai Basil", 64, [
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Thyme", 90, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Tokyo Bekana", 50, [
            createCategory("Salad Lover"),
            createCategory("Chef Faves")
        ]),
        createPlant("Watercress", 30, [
            createCategory("Salad Essentials"),
            createCategory("Salad Lover")
        ]),
        createPlant("White Petunia", 80, [
            createCategory("Beautiful Blooms"),
            createCategory("Budding Florist")
        ]),
        createPlant("Yellow Chard", 60, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Lover"),
            createCategory("Budding Florist"),
            createCategory("Chef Faves")
        ]),
        createPlant("Yellow Swiss Chard", 60, [
            createCategory("Herbs & Kitchen Staples")
        ]),
];

export const categories = [...new Set(plants.flatMap(plant => plant.categories.map(category => category.name)))];
export const plantsList = plants;