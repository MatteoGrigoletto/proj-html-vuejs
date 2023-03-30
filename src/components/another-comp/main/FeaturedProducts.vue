<template>
  <div class="container-70">
    <div class="">
      <TitleSection
        title="Featured Products"
        info="Must have products from our top sellers"
      />
      <div class="gender-selector">
        <button>Men</button>
        <button>Women</button>
        <button>Accessories</button>
      </div>
    </div>
    <div class="preview">
      <div
        class="card"
        v-for="item in products"
        v-show="item.gender == 'men dress'"
      >
        <div class="img-card">
          <img :src="item.img" alt="" />
          <span class="radiant"></span>
        </div>
        <div class="text-card">
          <h5>{{ item.item }}</h5>
          <small>{{ item.type }}</small>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../../store";
// HO IMPORTANTO UN COMPONENTE ALL'INTERNO DI UN  ALTRO COMPONENTE, COMPONENTE PER INSERIRE IL TITOLO DELLA SECTION
import TitleSection from "./TitleSection.vue";

export default {
  name: "FeaturedProducts",
  data() {
    return {
      store,
      products: [
        {
          img: "src/assets/black_elegant_leather_jacket.jpg",
          item: "black elegant leather jacket",
          type: "Men, Jackets,Jeans",
          brand: "by Admin",
          rated: 5,
          price: "200 $",
          gender: "men dress",
          featured: true,
          onSale: true,
          topRated: true,
          latestReviews: true,
        },
        {
          img: "src/assets/black_leather_jacket.jpg",
          item: "black jacket",
          type: "Woman,  Black leather jacket",
          brand: null,
          rated: null,
          price: "125 $",
          gender: "woman dress",
          featured: true,
          onSale: false,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/black_leather_suit.jpg",
          item: "black leather suit",
          type: "Men, Jackets",
          brand: null,
          rated: null,
          price: "176 $",
          gender: "men dress",
          featured: false,
          onSale: false,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/blue_jacket_and_white_stripe_tee.jpg",
          item: "blue jacket and white stripe tee",
          type: "Men, Jackets,Suits",
          brand: null,
          rated: null,
          price: "580 $",
          gender: "men dress",
          featured: false,
          onSale: true,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/hipster_black_top.jpg",
          item: "hipster black top",
          type: "woman",
          brand: null,
          rated: null,
          price: "57 $",
          gender: "woman dress",
          featured: true,
          onSale: false,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/modern_black_leather_suit.jpg",
          item: "modern black leather suit",
          type: "Man, Jackets",
          brand: null,
          rated: null,
          price: "96 $",
          gender: "men dress",
          featured: false,
          onSale: false,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/modern_leather_boots.jpg",
          item: "modern leather boots",
          type: "Man",
          brand: null,
          rated: null,
          price: "30 $",
          gender: "men boots",
          featured: false,
          onSale: true,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/modern_love_tee.jpg",
          item: "modern love tee",
          type: "Woman, ",
          brand: null,
          rated: null,
          price: "50 $",
          gender: "woman dress",
          featured: false,
          onSale: false,
          topRated: false,
          latestReviews: false,
        },
        {
          img: "src/assets/spring_printed_dress.jpg",
          item: "spring printed dress",
          type: "Woman, ",
          brand: "by Admin",
          rated: 5,
          price: "47 $",
          gender: "woman dress",
          featured: false,
          onSale: false,
          topRated: true,
          latestReviews: true,
        },
        {
          img: "src/assets/leather_gloves.jpg",
          item: "leather_gloves.",
          type: "Man",
          brand: "by BirdMan",
          rated: 5,
          price: "45 $",
          gender: "men gloves",
          featured: false,
          onSale: false,
          topRated: true,
          latestReviews: true,
        },
      ],
    };
  },
  components: {
    TitleSection,
  },
};
</script>

<style lang="scss" scoped>
.container-70 {
  div {
    text-align: center;
    .gender-selector {
      padding: 30px 0px;
      button {
        padding: 10px 20px;
      }
    }
  }
}
.preview {
  display: flex;
  margin-bottom: 100px;
  .card {
    width: calc(100% / 4 - 10px);
    height: 500px;
    margin: 5px;
    .img-card {
      height: 440px;
      position: relative;

      img {
        height: 100%;
        object-fit: cover;
      }
      span {
        text-align: center;
        line-height: 440px;
        color: white;
        font-size: 40px;
      }
    }
    .text-card {
      > * {
        padding: 10px 0px;
      }
    }
  }
}

.radiant {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(#e66465, #9198e5);
  opacity: 0.7;
  display: none;
}
.radiant::before {
  position: absolute;
  content: "";
  height: 80px;
  width: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(30, 29, 29);
  border-radius: 50%;
  font: var(--fa-font-solid);
  content: "\f007";
  opacity: 1;
  line-height: 80px;
  font-size: 20px;
}
.img-card:hover .radiant {
  display: block;
}

//  MEDIA QUERIES

@media screen and (max-width: 600px) {
  .preview {
    flex-wrap: wrap;
    .card {
      width: 100%;
    }
  }
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  .preview {
    flex-wrap: wrap;
    justify-content: center;
    .card {
      width: 40%;
    }
  }
}
</style>
