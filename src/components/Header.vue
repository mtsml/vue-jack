<template>
    <mdb-navbar color="black" class="z-depth-0" dark>
         <mdb-navbar-brand href="/">
            <strong>                
                {{ head }}
            </strong>
        </mdb-navbar-brand>
    </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand } from 'mdbvue';

export default {
    name: 'Header',
    components: {
        mdbNavbar,
        mdbNavbarBrand
    },
    props: {
        head: String
    }
}
</script>