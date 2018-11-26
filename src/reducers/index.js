const themeReducer = (state, action) => {
    if (!state) return {
      themeColor: 'red'
    }
    // 处理各类action，并返回最新的状态数据
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
}
export default themeReducer