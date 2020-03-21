<template>
    <div class="users-form">
        <form action="" @submit="addUser">
            <b-field :label="Labels.NAME">
                <b-input required v-model="userParams.firstName"></b-input>
            </b-field>
            <b-field :label="Labels.SURNAME">
                <b-input required v-model="userParams.surName"></b-input>
            </b-field>
            <b-field :label="Labels.PHONE">
                <b-input required v-model="userParams.phone"></b-input>
            </b-field>
            <b-field :label="Labels.EMAIL">
                <b-input required v-model="userParams.email"></b-input>
            </b-field>
            <div class="controls">
                <b-button class="save-user" type="is-success" native-type="submit">Save</b-button>
                <router-link to="/">
                    <b-button type="is-danger">Cancel</b-button>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import Labels from "../enums/labels-name-enum";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                userParams: null,
                Labels
            }
        },
        computed: {
            ...mapGetters({
                user: `getUser`
            })
        },
        created() {
            this.userParams = Object.assign({}, this.user(this.id));
        },
        methods: {
            addUser() {
                if (this.$route.params.id || this.$route.params.id === 0) {
                    this.$store.dispatch("UPDATE_USER", {index: this.id, user: this.userParams});
                } else  {
                    this.$store.dispatch("SET_USER", this.userParams);
                }
                this.$router.push("/");
            },
        }
    }
</script>

<style>
    .users-form {
        width: 500px;
        margin: 0 auto;
    }

    .save-user {
        margin-right: 10px;
    }
</style>