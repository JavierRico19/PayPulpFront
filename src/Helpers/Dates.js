export default class Dates {
  static getCurrentDate = () => {
    const date = new Date();
    return date;
  };

  static formatDateYMD = (dateString) => {
    const date = new Date(dateString);
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const formatDate = `${year}-${month > 9 ? month : "0" + month}-${
      day > 9 ? day : "0" + day
    }`;
    return formatDate;
  };
}
