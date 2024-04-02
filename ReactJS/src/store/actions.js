// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
export const getDashboardData = () => async (dispatch) => {
    try {
  
      const response = await fetch('https://example.com/dashboard-data');
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
  
      const data = await response.json();
  
      // Dispatch an action with the received data
      dispatch({ type: 'FETCH_DASHBOARD_DATA_SUCCESS', payload: data });
    } catch (error) {
      
    }
  };