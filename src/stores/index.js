import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'microwave',
                    price: 700,
                    image: 'https://www.midea.com/content/dam/midea-aem/th/small-home-appliance/cooking-range/microwave/mmo-20j91/04-Small%20appliances_02-CookingRange_05-Microwave_07-MMO-20J91_Fornt_Right.jpg'
                },
                {
                    id: 2,
                    name: 'air fryer',
                    price: 400,
                    image: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/45/88/8852607003845/8852607003845_4.jpg'
                },
                {
                    id: 3,
                    name: 'Xiaomi HL USB Humidifier Aromatherapy',
                    price: 1200,
                    image: 'https://ae01.alicdn.com/kf/H122fe1f332ca42018c671ac2755683b6r/Original-Xiaomi-Mijia-HL-USB-Mini-Air-Aromatherapy-Diffuser-Humidifier-Aroma-Mist-Maker-7.jpg'
                },
                {
                    id: 4,
                    name: 'Portable Air Conditioner',
                    price: 900,
                    image: 'https://img.priceza.com/img1/314/0910/314-20230728185413-146522613917073627.jpg'
                },
                {
                    id: 5,
                    name: 'Smart Home Air Purifier',
                    price: 520,
                    image: 'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000258908_t_2.jpg'
                },
                {
                    id: 6,
                    name: 'SONAR electric iron',
                    price: 400,
                    image: 'https://th-live-01.slatic.net/p/b00040fecd5183db52f12030db151845.jpg'
                },
                {
                    id: 7,
                    name: 'UV Alkaline',
                    price: 1399,
                    image: 'https://down-th.img.susercontent.com/file/fd857a71f9da4181ab79fe95a4f2178e'
                },
                {
                    id: 8,
                    name: 'TCL 75 นิ้ว UHD LED 4K Google TV 2023 รุ่น 75P745',
                    price: 650,
                    image: 'https://ge.lnwfile.com/q0yq98.webp'
                },
                {
                    id: 9,
                    name: 'Dyson Pure Coo air purifier TP00',
                    price: 100,
                    image: 'https://www.wpi.ph/cdn/shop/products/TP00SILVER.png?v=1620266367'
                },
                {
                    id: 10,
                    name: 'lamborghini aventador',
                    price: 999999,
                    image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/model_chooser/aventador_ultimae_roadster_m.jpg'
                }
            
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been removed',
              showConfirmButton: false,
              timer: 1500
            });
        }
        
    },
})