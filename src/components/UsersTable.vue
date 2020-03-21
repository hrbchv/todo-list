<template>
    <div class="container">
        <div class="controls">
            <router-link
                    :to="{name: 'users-new'}">
                <b-button type="is-primary">Add users</b-button>
            </router-link>
        </div>
        <b-table v-if="users" :data="users">
            <template slot-scope="props">
                <b-table-column :field="Labels.NAME" label="First Nam" width="40">
                    {{ props.row.firstName }}
                </b-table-column>
                <b-table-column :field="Labels.SURNAME" label="Surname" width="40">
                    {{ props.row.surName }}
                </b-table-column>
                <b-table-column :field="Labels.PHONE" label="Phone" width="40" numeric>
                    {{ props.row.phone }}
                </b-table-column>
                <b-table-column :field="Labels.EMAIL" label="Email" width="40">
                    {{ props.row.email }}
                </b-table-column>
                <b-table-column label="Actions" width="40">
                    <router-link
                            class="edit-user"
                            :to="{name: 'users-edit', params: {id: props.index}}">
                        <b-button type="is-info">Edit</b-button>
                    </router-link>
                    <b-button
                            @click="deleteUser(props.index)"
                            type="is-danger">Delete
                    </b-button>
                </b-table-column>
            </template>
        </b-table>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Labels from "../enums/labels-name-enum";

    export default {
        data() {
            return {
                Labels
            }
        },
        computed: {
            ...mapState({
                users: (state) => state.users
            })
        },
        methods: {
            deleteUser(index) {
                this.$store.dispatch("DELETE_USER", index);
            }
        }
    }
</script>

<style>
    .edit-user {
        margin-right: 10px;
    }

    .controls {
        display: flex;
        justify-content: flex-end;
    }
</style>