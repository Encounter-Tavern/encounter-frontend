<template>
    <div class="encounter pa-3">
            {{$route.params.id}}
            <MonsterCard/>
    </div>
</template>

<script>
import MonsterCard from '../components/MonsterCard';

export default {
    name: 'Encounter',
    components: {
        MonsterCard
    }
}
</script>


<style scoped>

</style>