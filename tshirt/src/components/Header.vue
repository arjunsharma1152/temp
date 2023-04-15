<template>
<header>
<h1>
Task Tracker
{{title}}
</h1>
</header>
</template>

<script>
    export default {
        name: "Header",
        props: ['title']
    }
</script>

<style scoped> 
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>