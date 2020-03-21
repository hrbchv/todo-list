import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: null
    },
    mutations: {
        setUser(state, user) {
            state.users.push(user);
        },
        deleteUser(state, user) {
            state.users.splice(user, 1);
        },
        updateUser(state, {index, user}) {
            state.users.splice(index, 1, user);
        },
        setUsers(state, users) {
            state.users = users;
        },
        saveToLocalStorage(state) {
            localStorage.setItem("users", JSON.stringify(state.users))
        }
    },
    getters: {
        getUser: (state) => (id) => {
            return state.users[id];
        }
    },
    actions: {
        SET_USER(state, payload) {
            state.commit("setUser", payload);
            state.commit("saveToLocalStorage");
        },
        DELETE_USER(state, payload) {
            state.commit("deleteUser", payload);
            state.commit("saveToLocalStorage");
        },
        UPDATE_USER(state, {index, user}) {
            state.commit("updateUser", {index, user});
            state.commit("saveToLocalStorage");
        },
        INIT_STATE(state) {
            let users;
            try {
                users = JSON.parse(localStorage.getItem("users"));
            } catch (e) {
                console.error(e);
            }
            state.commit("setUsers", users || []);
        }
    }

});

export default store;