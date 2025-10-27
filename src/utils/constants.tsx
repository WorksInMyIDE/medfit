interface ItemTypes {
    name: string
    imageLink: string
    price: number
    discount?: number
    category: string
}

export const items: ItemTypes[] = [
    {
        name: "B12 Medicine",
        imageLink: "/b12-medicine.svg",
        price: 25,
        discount: 10,
        category: "Medicine"
    },
    {
        name: "Tonometer",
        imageLink: "/tonometer.svg",
        price: 19,
        category: "Healthcare"
    },
    {
        name: "ECG cardiograph",
        imageLink: "/ecg-cardiograph.svg",
        price: 20,
        discount: 20,
        category: "Healthcare"
    },
    {
        name: "Blood glucose meter",
        imageLink: "/blood-glucose-meter.svg",
        price: 15,
        category: "Healthcare"
    },
    {
        name: "Stethoscope",
        imageLink: "/stethoscope.svg",
        price: 20,
        discount: 20,
        category: "Healthcare"
    },
    {
        name: "Lab hand gloves",
        imageLink: "/hand-gloves.svg",
        price: 20,
        discount: 20,
        category: "Healthcare"
    },
    {
        name: "Inhaler pressure drop",
        imageLink: "/inhaler-pressure-drop.svg",
        price: 35,
        category: "Healthcare"
    },
    {
        name: "Multi vitamin",
        imageLink: "/multi-vitamin.svg",
        price: 20,
        category: "Medicine"
    },
    {
        name: "Microscope",
        imageLink: "/microscope.svg",
        price: 45,
        category: "Healthcare"
    },
    {
        name: "Pulse Oximeter",
        imageLink: "/oximeter.svg",
        price: 19,
        category: "Healthcare"
    },
    {
        name: "Vitamin Serum",
        imageLink: "/serum.svg",
        price: 20,
        category: "Medicine"
    },
    {
        name: "High Protein",
        imageLink: "/high-protein.svg",
        price: 50,
        category: "Medicine"
    },
    {
        name: "Hand Sanitizer",
        imageLink: "/high-protein.svg",
        price: 50,
        category: "Medicine"
    },
    {
        name: "Face Wash",
        imageLink: "/aloe-vera.svg",
        price: 50,
        category: "Medicine"
    },
    {
        name: "Face Mask",
        imageLink: "/face-mask.svg",
        price: 35,
        discount: 10,
        category: "Healthcare"
    },

]