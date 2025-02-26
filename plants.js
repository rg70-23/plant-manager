const createPlant = (name,daysToMaturity, categories) => ({ name, daysToMaturity, categories });
const createCategory = (name) => ({ name });

    export const plants = [
        createPlant("Basil", 68, [
            createCategory("Herbs & Kitchen Staples"), 
            createCategory("Salad Essentials")
         ]),
        createPlant("Breen", 45, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials")
        ]),
        createPlant("Bronze Arrow Lettuce", 55, [
            createCategory("Salad Essentials")
        ]),
        createPlant("Bull's Blood", 35, [
            createCategory("Beautiful Blooms"),
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials")
        ]),
        createPlant("Bunching Onions"), 50, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials")
        ]),
        createPlant("Butterhead", 55, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials"),
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Celosia", 90, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Cilantro", 28, [
            createCategory("Salad Essentials")
        ]),
        createPlant("Collard Greens", 60, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Green Bok Choy", 20, [
            createCategory("Herbs & Kitchen Staples")]),
        createPlant("Green Salanova", 55, [
            createCategory("Herbs & Kitchen Staples")]),
        createPlant("Green Tatsoi", 21, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials")
        ]),
        createPlant("Kale Lacinato", 65, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Kale", 65, [
            createCategory("Salad Essentials")
        ]),
        createPlant("Kohlrabi", 45, [
            createCategory("Salad Essentials")
        ]),
        createPlant("Lemon Balm", 70, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Lemon Basil", 70, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Perpetual Spinach", 40, [
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials", 40)
        ]),
        createPlant("Pink Celery", 75, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Purple Basil", 65, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Purple Kohlrabi", 45, [
            createCategory("Herbs & Kitchen Staples")
        ]),
        createPlant("Red Mustard", 35, [
            createCategory("Salad Essentials")
        ]),
        createPlant("Red Sorrel", 60, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Romaine", 60, [
            createCategory("Salad Essentials")
        ]),
        createPlant("Salanova", 50, [
            createCategory("Beautiful Blooms"),
            createCategory("Salad Essentials")
        ]),
        createPlant("Snapdragon", 100, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Stock Flower", 75, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Sunflower", 65, [
            createCategory("Beautiful Blooms"),
            createCategory("Herbs & Kitchen Staples"),
            createCategory("Salad Essentials")
        ]),
        createPlant("Thyme", 90, [
            createCategory("Herbs & Kitchen Staples")

        ]),
        createPlant("Watercress", 30, [
            createCategory("Salad Essentials")
        ]),
        createPlant("White Petunia", 80, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Yellow Chard", 60, [
            createCategory("Beautiful Blooms")
        ]),
        createPlant("Yellow Swiss Chard", 60, [
            createCategory("Herbs & Kitchen Staples")
        ]),
];

export const categories = [...new Set(plants.flatMap(plant => plant.categories.map(category => category.name)))];
export const plantsList = plants;