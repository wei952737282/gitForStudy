<template>
    <div>
        <ul class="shopList">
            <li v-for="(shop, index) in shopList" :key="index">
                <div>
                    <router-link to="/">
                        <dl>
                            <dt>{{shop.name}}</dt>
                            <dd>
                                {{shop.price}}<br>
                                {{shop.description}} <br>
                                <text-area v-bind="post"></text-area>
                            </dd>
                        </dl>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
var textArea = {
  template: '<span>{{post.id}}{{post.name}}</span>'
}
export default {
  name: 'Shop',
  components: {
    textArea
  },
  post: {
    id: 1,
    name: 'nuannuan'
  },
  data () {
    return {
      shopList: [
        {
          name: 'abc',
          price: 'abc',
          description: 'abc',
          showLink: ''
        },
        {
          name: 'abc',
          price: 'abc',
          description: 'abc',
          showLink: ''
        },
        {
          name: 'abc',
          price: 'abc',
          description: 'abc',
          showLink: ''
        },
        {
          name: 'abc',
          price: 'abc',
          description: 'abc',
          showLink: ''
        },
        {
          name: 'abc',
          price: 'abc',
          description: 'abc',
          showLink: ''
        }
      ]
    }
  }
}
</script>
<style>
.shopList li{
    margin:10px auto;
}
</style>
