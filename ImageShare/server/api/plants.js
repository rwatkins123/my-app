// import axios from "axios";

// //set action types
// const ADD_PLANT_DATA = 'ADD_PLANT_DATA'

// // action creators
// const __addPlantData = (plantData) => {
//   return {
//     type: ADD_PLANT_DATA,
//     plantData
//   }
// }

// export const addPlantData = (data) => {
//   return async (dispatch) => {
//     try {
//       const { data: receivedData } = await axios.post("http://10.0.0.199:1900/api/plants", data);
//       dispatch(__addPlantData(receivedData))
//     } catch (error) {
//       console.error('error in addplantData thunk', error)
//     }
//   }
// }
