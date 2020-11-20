import axios from "axios";

const BASEURL = "https://divercity-test.herokuapp.com/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getAllListings: function () {
    return axios.get(BASEURL + "jobs");
  },
  register: function (data) {
    return axios.post(BASEURL + "register", data);
  },
  login: function (data) {
    return axios.post(BASEURL + "login", data);
  },
  application:function(data){
    return axios.post(BASEURL + `jobs/2/apply/`, data)
  }
};
