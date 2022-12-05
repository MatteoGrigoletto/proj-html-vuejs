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
        },
        {
            img:  'src/assets/black_leather_jacket.jpg',
            item: 'black jacket',
            type: 'Woman,  Black leather jacket',
            brand: null,
            rated: null,
            price: '125 $',
            gender: 'woman dress',
        },
        {
            img:  'src/assets/black_leather_suit.jpg',
            item: 'black leather suit',
            type: 'Men, Jackets',
            brand: null,
            rated: null,
            price: '176 $',
            gender: 'men dress',
        },
        {
            img:  'src/assets/blue_jacket_and_white_stripe_tee.jpg',
            item: 'blue jacket and white stripe tee',
            type: 'Men, Jackets,Suits',
            brand: null,
            rated: null,
            price: '580 $',
            gender: 'men dress',
        },
        {
            img:  'src/assets/hipster_black_top.jpg',
            item: 'hipster black top',
            type: 'woman',
            brand: null,
            rated: null,
            price: '57 $',
            gender: 'woman dress',
        },
        {
            img:  'src/assets/leather_gloves.jpg',
            item: 'leather_gloves.',
            type: 'Man',
            brand: null,
            rated: null,
            price: '45 $',
            gender: 'men gloves',
        },
        {
            img:  'src/assets/modern_black_leather_suit.jpg',
            item: 'modern black leather suit',
            type: 'Man, Jackets',
            brand: null,
            rated: null,
            price: '96 $',
            gender: 'men dress',
        },
        {
            img:  'src/assets/modern_leather_boots.jpg',
            item: 'modern leather boots',
            type: 'Man',
            brand: null,
            rated: null,
            price: '30 $',
            gender: 'men boots',
        },
        {
            img:  'src/assets/modern_love_tee.jpg',
            item: 'modern love tee',
            type: 'Woman, ',
            brand: null,
            rated: null,
            price: '50 $',
            gender: 'woman dress',
        },
        {
            img:  'src/assets/spring_printed_dress.jpg',
            item: 'spring printed dress',
            type: 'Woman, ',
            brand: 'by Admin',
            rated: null,
            price: '47 $',
            gender: 'woman dress',
        },
        



    ]

});