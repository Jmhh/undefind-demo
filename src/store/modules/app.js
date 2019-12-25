const state = {
    loading: false,
    isCollapse: false, //侧边栏导航收缩
    userName: localStorage.getItem("userName"),
    token: localStorage.getItem("token")
}

const mutations = {
    SET_SIDEBAR: state => {
        state.isCollapse = true
    },
    TOGGLE_SIDEBAR: state => {
        if (state.isCollapse) {
            state.isCollapse = false
        } else {
            state.isCollapse = true
        }
    },
    SET_USERNAME: (state, data) => {
        if (data) {
            localStorage.setItem("userName", data);
            state.userName = data
        } else {
            localStorage.removeItem("userName");
        }
    },
    SET_USERTOKEN: (state, data) => {
        if (data) {
            localStorage.setItem("token", data);
            state.token = data
        } else {
            localStorage.removeItem("token");
        }
    }
}

const actions = {
    setSideBar({
        commit
    }) {
        commit('SET_SIDEBAR')
    },
    toggleSideBar({
        commit
    }) {
        commit('TOGGLE_SIDEBAR')
    },
    setUserName({
        commit
    }, data) {
        commit('SET_USERNAME', data)
    },
    setUserToken({
        commit
    }, data) {
        commit('SET_USERTOKEN', data)
    }
}

export default {
    state,
    mutations,
    actions
}