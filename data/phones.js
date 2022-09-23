import images from "../assets/images/phone";

export const phones = [
    {
        id: 1,
        title: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
        name: "Vsmart Joy 3",
        price: 1790000,
        colors: [
            {
                name: "xanh",
                hex: "#234896",
                imagePath: images.vsmart_live_xanh,
            },
            {
                name: "trắng",
                hex: "#E3D8DE",
                imagePath: images.vsmart_white,
            },
            {
                name: "đỏ",
                hex: "#F30D0D",
                imagePath: images.vsmart_red,
            },
            {
                name: "đen",
                hex: "#000",
                imagePath: images.vsmart_black,
            },
        ],
        rating: 5,
        comments: 828,
    },
    {
        id: 2,
        title: "Điện Thoại iPhone 14 Hàng chính hãng",
        name: "iPhone 14",
        price: 32000000,
        colors: [
            {
                name: "tím",
                hex: "#E7DFEC",
                imagePath: images.ip14_violet,
            },
            {
                name: "trắng",
                hex: "#fff",
                imagePath: images.ip14_white,
            },
            {
                name: "đen",
                hex: "#192026",
                imagePath: images.ip14_black,
            },
            {
                name: "xanh",
                hex: "#98ADC0",
                imagePath: images.ip14_blue_light,
            },
            {
                name: "đỏ",
                hex: "#E50626",
                imagePath: images.ip14_red,
            },
        ],
        rating: 5,
        comments: 1628,
    },
    {
        id: 3,
        title: "Điện Thoại Samsung Hàng chính hãng",
        name: "Samsung S22",
        price: 29900000,
        colors: [
            {
                name: "hồng",
                hex: "#F4E1DD",
                imagePath: images.s22_pink,
            },
            {
                name: "trắng",
                hex: "#fff",
                imagePath: images.s22_white,
            },
            {
                name: "đen",
                hex: "#192026",
                imagePath: images.s22_black,
            },
            {
                name: "xanh",
                hex: "#445A59",
                imagePath: images.s22_light_green,
            },
        ],
        rating: 5,
        comments: 1628,
    },
];
