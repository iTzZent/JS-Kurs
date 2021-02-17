class UserService {

  static init(){
    var user = UserService.createUser(1, "Herbert", "xxxx", "herbert@gmx.de", "01.01.1900");
    var user2 = UserService.createUser(2, "Franz", "xxxx", "franz@gmx.de", "01.01.1900");

    var userList = new UserList();
    userList.addUser(user);
    userList.addUser(user2);

    console.log(userList.users);
    UserService.createTableHeaderAndContent(user);
    UserService.showUsers(userList.users);
  }

  static createUser(id, name, password, email, birthday){
      var user = new User(id, name, password, email, birthday);
      return user;
  }

  static showUsers(userList){
    var reslut = [];
    var resultContent ="";
    for (var i = 0; i < userList.length; i++) {
      resultContent = resultContent + "<tr>";
      let user = userList[i];
      console.log(user);
      reslut =  UserService.createTableHeaderAndContent(user);
      resultContent = resultContent + reslut[1] + "</tr>";
    }
      document.getElementById("header").innerHTML = result[0];
      document.getElementById("content").innerHTML = resultContent;
  }

  static createTableHeaderAndContent(user){
    var columnNames = Object.keys(user);
    var columnValueArray = Object.values(user);

    var resultHeader ="";
    var resultContent ="<tr>";

    for (var i = 0; i < columnNames.length; i++) {
      var columnName = "<th>" + columnNames[i] + "</th>";
      resultHeader = resultHeader + columnName;

      var columnValue = "<td>" + columnValueArray[i] + "</td>";
      resultContent = resultContent + columnValue;
    }
    return [resultHeader, resultContent]

  }
}
