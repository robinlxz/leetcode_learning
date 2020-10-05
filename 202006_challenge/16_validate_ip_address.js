/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  if (IP.includes('-')) {
    return 'Neither';
  }
  let regTest = /[g-zG-Z]/;
  if (regTest.test(IP)) {
    return 'Neither';
  }
  if (IP.includes('.')) {
    if (IP.includes('e')) {
      return 'Neither';
    }
    let v4 = IP.split('.');
    if (v4.length !== 4) {
      return 'Neither';
    }
    for (let num of v4) {
      if (isNaN(num) || num == '') {
        return 'Neither';
      } else if (num.length > 1 && num[0] == '0') {
        return 'Neither';
      } else if (parseInt(num) < 0 || parseInt(num) > 255) {
        return 'Neither';
      }
    }
    return 'IPv4';
  } else if (IP.includes(':')) {
    let v6 = IP.split(':');
    if (v6.length !== 8) {
      // console.log('length is: ' + v6.length);
      return 'Neither';
    }
    for (let num of v6) {
      if (parseInt(num, 16) == NaN || num == '') {
        // console.log(num + ' is NaN');
        return 'Neither';
        // } else if (num[0] == '0' && num.length > 4) {
      } else if (num.length > 4) {
        return 'Neither';
      } else if (parseInt(num, 16) < 0 || parseInt(num, 16) > 65535) {
        return 'Neither';
      }
    }
    return 'IPv6';
  }

  return 'Neither';
};

// console.log(validIPAddress('172.16.254.1'));
// console.log(validIPAddress('1.0.1.'));
// console.log(validIPAddress('1.1.1.1.'));
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334'));
console.log(validIPAddress('2001:db8:85a3:0::8a2E:0370:7334'));
// console.log(validIPAddress('2001:1db8:85a3:0000:0:8A2E:0370:733a'));
// console.log(validIPAddress('02001:0db8:85a3:0000:0:8A2E:0370:733a'));
// console.log(validIPAddress('256.256.256.256'));
