import {reactive} from "vue";

export const store = reactive({

    products: [
        {
            img:  'src/assets/black_elegant_leather_jacket.jpg',
            item: 'black elegant leather jacket',
            type: 'Men, Jackets,Jeans',
            brand: 'by Admin',
            rated: 5,
            price: '200 $',
            gender: 'men dress',
            featured: true,
            onSale: true,
            topRated: true,
            latestReviews: true,
        },
        {
            img:  'src/assets/black_leather_jacket.jpg',
            item: 'black jacket',
            type: 'Woman,  Black leather jacket',
            brand: null,
            rated: null,
            price: '125 $',
            gender: 'woman dress',
            featured: true,
            onSale: false,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/black_leather_suit.jpg',
            item: 'black leather suit',
            type: 'Men, Jackets',
            brand: null,
            rated: null,
            price: '176 $',
            gender: 'men dress',
            featured: false,
            onSale: false,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/blue_jacket_and_white_stripe_tee.jpg',
            item: 'blue jacket and white stripe tee',
            type: 'Men, Jackets,Suits',
            brand: null,
            rated: null,
            price: '580 $',
            gender: 'men dress',
            featured: false,
            onSale: true,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/hipster_black_top.jpg',
            item: 'hipster black top',
            type: 'woman',
            brand: null,
            rated: null,
            price: '57 $',
            gender: 'woman dress',
            featured: true,
            onSale: false,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/modern_black_leather_suit.jpg',
            item: 'modern black leather suit',
            type: 'Man, Jackets',
            brand: null,
            rated: null,
            price: '96 $',
            gender: 'men dress',
            featured: false,
            onSale: false,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/modern_leather_boots.jpg',
            item: 'modern leather boots',
            type: 'Man',
            brand: null,
            rated: null,
            price: '30 $',
            gender: 'men boots',
            featured: false,
            onSale: true,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/modern_love_tee.jpg',
            item: 'modern love tee',
            type: 'Woman, ',
            brand: null,
            rated: null,
            price: '50 $',
            gender: 'woman dress',
            featured: false,
            onSale: false,
            topRated: false,
            latestReviews: false,
        },
        {
            img:  'src/assets/spring_printed_dress.jpg',
            item: 'spring printed dress',
            type: 'Woman, ',
            brand: 'by Admin',
            rated: 5,
            price: '47 $',
            gender: 'woman dress',
            featured: false,
            onSale: false,
            topRated: true,
            latestReviews: true,
        },
        {
            img:  'src/assets/leather_gloves.jpg',
            item: 'leather_gloves.',
            type: 'Man',
            brand: 'by BirdMan',
            rated: 5,
            price: '45 $',
            gender: 'men gloves',
            featured: false,
            onSale: false,
            topRated: true,
            latestReviews: true,
        },
    ],
    brands: [
        {
            name:'forest',
            logo:'src/assets/brend/b_logotype_1.png'
        },
        {
            name:'badge',
            logo:'src/assets/brend/b_logotype_2.png'
        },
        {
            name:'beard fashion',
            logo:'src/assets/brend/b_logotype_3.png'
        },
        {
            name:'hype',
            logo:'src/assets/brend/b_logotype_4.png'
        },
        {
            name:'a & q',
            logo:'src/assets/brend/b_logotype_5.png'
        },
        {
            name:'authentic',
            logo:'src/assets/brend/b_logotype_6.png'
        },
        {
            name:'the yard',
            logo:'src/assets/brend/b_logotype_7.png'
        },
    ],
    posts: [
        {
            name:'Antonio',
            text:'Aenean labortis sapien enim viverra'
        },
        {
            name:'Federico',
            text:'Duis ac massa semper macimus'
        },
        {
            name:'Francesca',
            text:'Nncs femint nulla eu husto sem id'
        },
        {
            name:'Giulia',
            text:'Aliquam posuera magna eget nibh'
        },
        {
            name:'Samuele',
            text:'Cras ac nulla ac consecte rutrum'
        },
        {
            name:'Nicholas',
            text:'Fusce mattis nunc ut aliquam'
        }
    ],
    tags: [
        'Black',
        'boots',
        'Brown',
        'Casual',
        'D&G',
        'Fabric',
        'flowers',
        'Grey',
        'hat',
        'Hipster',
        'line',
        'Multi-porpose',
        'New york',
        'Outdoors',
        'red',
        'responsive',
        'summer',
        'sweater',
        'Travel',
        'Warm',
        'white',
        'winter',
    ]
});