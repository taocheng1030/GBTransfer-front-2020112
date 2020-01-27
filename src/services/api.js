import Config from "../config";
import * as _ from 'lodash'
import $ from 'jquery';

export default {
  async baseApi(sub_url, method, json_data, cb) {
    
    let user = localStorage.currentUser?JSON.parse(localStorage.currentUser):null
    console.log('user on baseApi====',user)
    console.log('json data on baseApi==',json_data)
    try {
      let request = {
        method,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": user
            ? "Bearer " + user['access_token']
            : null,
        }
      };
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }
      console.log(Config.SERVICE_API_URL + sub_url, request)
      let response = await fetch(Config.SERVICE_API_URL + sub_url, request);
      let responseJson = await response.json();
      if (response.status == 200) {
        cb(null, responseJson);
      } else {
        cb(responseJson);
      }
    } catch (error) {
      cb(error);
    }
  },

  async init(cb) {
    //check if current user exists or not
    var email = localStorage.email
    var password = localStorage.password

    if (password) {
      this.login(email, password, (err, user) => {
        cb(err, user)
      })
    } else {
      cb(null)
    }
  },

  login(email, password, cb) {
    this.baseApi('/api/login', 'POST', { email, password }, (err, res) => {
      if (err == null) {
        console.log('login------------------', res)
        localStorage.currentUser = JSON.stringify(res)
        localStorage.email=email
        localStorage.password=password;
      }
      cb(err, res)
    })
  },
  updateProfile(data, cb) {
    console.log('data profile---on update--',data)
    this.baseApi('/api/users/me', 'POST', data, cb)
  },
  getUser(id,cb) {
    this.baseApi(`/api/users/${id}`, 'GET', {}, cb)
  },
  async photoUpload(uri, cb) {
    try {
      const formData = new FormData();
      formData.append('file', uri);
      let response = await fetch(
        Config.SERVICE_API_URL + '/api/fileUpload',
        {
          method: "POST",
          headers: {
            "Accept": "application/json"
            // "Content-Type": "multipart/form-data"
          },
          mode:'cors',
          body: formData
        }
      );
      let status = response.status;
      let responseJson = await response.json();
      if (status == 200 || status == 201) {
        cb(null, responseJson);
      } else {
        cb(responseJson.message);
      }
    } catch (error) {
      cb(error);
    }
  },

  logout() {
    delete localStorage.currentUser
    delete localStorage.email
    delete localStorage.password
  },

  signup(data, cb) {
    console.log('signup data on signup',data)
    this.baseApi('/api/signup', 'POST', data, (err, res) => {
      cb(err, res)
    })
  },

  uploadFile(file, callback, ext, progressCallback) {
    var obj = {
        _filename: file.name,
        size: file.size,
        mimeType: file.type
    };

    if (ext) {
        _.extend(obj, ext);
    }

    var formData = new FormData();
    formData.append('file', file)
    formData.append('filename', file.name)
    formData.append('size', file.size)
    formData.append('mimeType', file.type)

    //console.log('uploading data is ', formData);
    $.ajax({
        url: Config.BACKEND_FILE_URL + "/api/fileUpload",
        data: formData,
        method: 'post',
        xhr: function () {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function (e) {
                    console.log('here', e)
                    if (e.lengthComputable) {
                        var max = e.total;
                        var current = e.loaded;

                        if (progressCallback) {
                            progressCallback(max, current)
                        }
                    }
                }, false);
            }
            return myXhr;
        },
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            Authorization: 'Basic ' + localStorage.token
        },
        success: function (data) {
            if (data) {
                callback(data);
            } else {
                callback('empty data')
            }
        },
        error: function (data) {
            callback(data)
        }
    });
},



  async chatFileUpload(file, cb) {
    try {
      let formData = new FormData();
      formData.append("file", file);
     
      let response = await fetch(
        Config.BACKEND_FILE_URL + '/api/fileUpload',
        {
          method: "POST",
          // headers: {
          //   Accept: "application/json",
          //   "Content-Type": "multipart/form-data"
          // },
          body: formData
        }
      );
      let status = response.status;
     // console.log('status', status)

      let responseJson = await response.json();
     // console.log('respo', responseJson)
      if (status == 200 || status == 201) {
        cb(null, responseJson);
      } else {
        cb(responseJson.message);
      }
    } catch (error) {
      cb(error);
    }
  
  },
  async uploadImage(file, cb) {
    let user = localStorage.currentUser?JSON.parse(localStorage.currentUser):null
    try {
      let image={
        _filename: file.name,
        size: file.size,
        mimeType: file.type, 
        uri: file.preview,
        type: file.type,
        name: file.name
      }
      let formData = new FormData();
      formData.append("file", image);
      let response = await fetch(
        Config.SERVICE_API_URL + '/api/fileUpload',
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            "Authorization": user
            ? "Bearer " + user['access_token']
            : null,
          },
          body: formData
        }
      );
      let status = response.status;
      console.log('status', status)

      let responseJson = await response.json();
      console.log('respo', responseJson)
      if (status == 200 || status == 201) {
        cb(null, responseJson);
      } else {
        cb(responseJson.message);
      }
    } catch (error) {
      cb(error);
    }
  },
  getUsers(cb){
    this.baseApi('/api/users', 'GET', {}, cb)
  },
  getFamilyFriend(id, groupId, cb) {
    console.log('id,groupID on getFamilyFriend', id,groupId)
    if (groupId == 1 || groupId == 2) {
      this.baseApi(`/api/users/groups/${id}?group_id=` + groupId, 'GET', {}, cb)
    } else {
      this.baseApi(`/api/users/groups/${id}`, 'GET', {}, cb)
    }
  },
  getProjects(cb) {
    this.baseApi('/api/projects', 'GET', {}, cb)
  },
  getProject(id, cb){
    this.baseApi('/api/projects/'+id, 'GET', {}, cb)
  },
  setProject(data, cb){
    this.baseApi('/api/projects', 'POST', data, cb)
  },
  createPaypalPayment(data, cb) {
    this.baseApi('/api/createPaypalPayment', 'POST', data, cb)
  },
  executePaypalPayment(data, cb) {
    this.baseApi('/api/executePaypalPayment', 'POST', data, cb)
  },
  getProjectTypes(cb) {
    this.baseApi('/api/projectTypes', 'GET', {}, cb)
  },
  getProjectTypeById(id, cb) {
    this.baseApi(`/api/projectTypes/${id}`, 'GET', {}, cb)
  },
  getCurrencies(cb) {
    this.baseApi('/api/currencies', 'GET', {}, cb)
  },
  donates(data, cb){
      this.baseApi('/api/donates', 'POST', {data}, cb)
  },
  activate(token, cb){
      this.baseApi('/api/activate/'+token, 'GET', {}, cb)
  },
  getMyWallet(cb){
    this.baseApi('/api/myWallet', 'GET', {}, cb)
  },
  getHistory(cb){
    this.baseApi('/api/userDonates', 'GET', {}, cb)
  },
  // getTransactions(data, cb){
  //   this.baseApi('/api/transactions', 'POST', data, cb)
  // },
  chargeStripe(data, cb){
    this.baseApi('/api/web/chargeStripe', 'POST', data, cb)
  },
  getTransactions(data, cb) {
    console.log('from,to--on getTransactions===',data)
    this.baseApi('/api/transactions?pageNum=' + data.pageNum + '&pageSize=' + data.pageSize + '&from='+data.from + '&to='+data.to + '&receiverName='+data.receiverName + '&blockchainTxId='+data.blockchainTxId ,'GET', {}, cb)
  },
  getTransactionsForExport(data, cb) {
    console.log('from,to--on for export',data)
    this.baseApi('/api/transactionsforexport?' + 'from='+data.from + '&to='+data.to + '&receiverName='+data.receiverName + '&blockchainTxId='+data.blockchainTxId ,'GET', {}, cb)
  },
  calcFee(data, cb){
    this.baseApi('/api/calcFee', 'POST', data, cb)
  },
  transfer(data, cb){
    console.log('data on transfer api--',data)
    this.baseApi('/api/transfer', 'POST', data, cb)
  },
  forgotPassword(data, cb){
    this.baseApi('/api/reset/request', 'POST', data, cb)
  },
  getExchangeRate(base, cb) {
    this.baseApi(`/api/currencies/rates/${base}`, 'GET', {}, cb)
  },
  resetPassword(data, cb){
    console.log('data on resetPassword===',data)
    this.baseApi('/api/users/resetPassword', 'POST', {data}, cb)
  },
  updateUser(data, cb){
    this.baseApi('/api/users/me', 'POST', {data}, cb)
  },
  requestWithdraw(data, cb) {
    this.baseApi('/api/requestWithdraw', 'POST', data, cb)
  },
};
