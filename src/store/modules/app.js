const state = {
    isCollapse: false //侧边栏导航收缩
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        if (state.isCollapse) {
            state.isCollapse = false
        } else {
            state.isCollapse = true
        }
    }
}

const actions = {
    toggleSideBar({
        commit
    }) {
        commit('TOGGLE_SIDEBAR')
    }
}

export default {
    state,
    mutations,
    actions
}