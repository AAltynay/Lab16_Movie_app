<template> 
  <form @submit.prevent="submit"> 
    <input v-model="query" placeholder="Search for a movie..." /> 
    <button type="submit">Search</button> 
  </form> 
</template> 
 
<script> 
export default { 
  data() { 
    return { 
      query: '', 
    }; 
  }, 
  methods: { 
    submit() { 
      this.$emit('search', this.query); 
      this.query = ''; 
    }, 
  }, 
}; 
</script>