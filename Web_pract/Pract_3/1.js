x = +prompt ("Input number from 1 to 6");
switch (x) {
    case 2:
    case 4:
    case 6:
      alert ("even");
      break;
    case 1:
    case 3:
    case 5:
      alert ("odd");
      break;
    default:
      alert ("Out of range");
};
window.location.href = "../map.html";